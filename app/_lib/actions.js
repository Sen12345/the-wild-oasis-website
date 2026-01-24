"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

export async function updateGuest(formData) {
  const session = await auth();
  if (!session) throw new Error("Your must be logged in");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[A-Za-z0-9]{6,12}$/.test(nationalID)) {
    throw new Error("Please provide a valid NationalID");
  }

  const updateData = { nationality, countryFlag, nationalID };

  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) {
    throw new Error(error.message);
  }
  revalidatePath("/account/profile");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function createBookingAction(bookingData, formData) {
  const session = await auth();
  if (!session) throw new Error("Your must be logged in");
  //Alternative Object.entries(formdate.entries());
  const newBooking = {
    ...bookingData,
    guestId: session?.user?.guestId,
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 500),
    totalPrice: bookingData.cabinPrice,
    extrasPrice: 0,
    isPaid: false,
    hasBreakfast: false,
    status: "Unconfirmed",
  };
  const { error } = await supabase.from("bookings").insert([newBooking]);

  // console.log(newBooking);

  // if (error) console.error(error);
  // throw new Error("Booking could not be created");
  if (error) {
    console.error("SUPABASE ERROR:", error);
    throw new Error(error.message);
  }
  revalidatePath(`/cabins/${bookingData.cabinId}`);

  redirect("/cabins/thankyou");
}

export async function deleteBookingAction(bookingId) {
  // For testing
  // await new Promise((res) => setTimeout(res, 2000));

  // throw new Error();

  const session = await auth();
  if (!session) throw new Error("Your must be logged in");

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingsId = guestBookings.map((booking) => booking.id);
  if (!guestBookingsId.includes(bookingId)) {
    throw new Error("You are not allowed to delete this booking");
  }

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) throw new Error("Booking could not be deleted");
  revalidatePath("/account/reservation");
}

export async function updateBookingAction(formData) {
  //Authentication
  const session = await auth();
  if (!session) throw new Error("Your must be logged in");

  const bookingId = Number(formData.get("bookingId"));
  // Authorization
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingsId = guestBookings.map((booking) => booking.id);
  if (!guestBookingsId.includes(bookingId)) {
    throw new Error("You are not allowed to update this booking");
  }

  const numGuests = formData.get("numGuests");
  const observations = formData.get("observations").slice(0, 500);

  const updateData = { numGuests, observations };

  const { error } = await supabase
    // Mutation
    .from("bookings")
    .update(updateData)
    .eq("id", bookingId);
  // Error handling
  if (error) {
    throw new Error(error.message);
  }

  revalidatePath(`/account/reservation/edit/${bookingId}`);
  revalidatePath("/account/reservation");

  redirect("/account/reservation");
}
