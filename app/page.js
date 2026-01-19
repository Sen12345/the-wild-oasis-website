import Image from "next/image";
import bgImage from "@/public/bg.png";
import Link from "next/link";

const Home = () => {
  return (
    <main className="min-h-screen max-w-full ">
      <Image
        src={bgImage}
        fill
        quality={80}
        placeholder="blur"
        className="object-cover object-center"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative flex w-full   justify-center  ">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-6xl text-primary-50  tracking-tight font-normal">
            Welcome to paradise.
          </h1>

          <Link
            href="/cabins"
            className=" my-10   bg-[hsla(0,100%,100%,0.6)]  p-6  text-black text-lg font-semibold hover:bg-accent-600 transition-all"
          >
            Explore luxury cabins
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
