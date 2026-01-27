import CabinList from "./CabinList";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

// export const revalidate = 3600;
// export const revalidate = 15;

export const metadata = {
  title: "Cabins",
};

export default async function Page({ searchParams }) {
  // CHANGE
  const sparems = await searchParams;
  const filter = sparems?.capacity ?? "all";

  return (
    <div className="min-h-screen mt-16 max-w-full px-4">
      <h1 className="text-4xl text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature's beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>

      <div className="flex justify-end">
        <Filter />
      </div>

      <Suspense fallback={<Spinner key={filter} />}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
