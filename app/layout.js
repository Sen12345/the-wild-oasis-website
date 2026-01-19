import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/app/_components/navigation";
import Footer from "@/app/_components/footer";
import "@/app/_styles/globals.css";
import { ContextProvider } from "./context/ReservationContext";
import { auth } from "./_lib/auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // title: "The Wild Oasis Website",
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description: "Luxurious cabin hotel located in the heart of Montego Bay",
};

export default async function RootLayout({ children }) {
  const session = await auth();
  return (
    <html lang="en">
      <body
        className={`flex min-h-screen flex-col relative text-primary-100 ${geistSans.variable} ${geistMono.variable} antialiased bg-primary-950`}
      >
        <header className="min-w-full border-b-[.3px] border-b-gray-600">
          <Navigation session={session} />
        </header>
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto">
            <ContextProvider>{children}</ContextProvider>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
