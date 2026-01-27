import Image from "next/image";
import bgImage from "@/public/karsten-winegeart-sStahKEhT9w-unsplash.jpg";
import Link from "next/link";

const Home = () => {
  return (
    <main className="max-h-screen   max-w-full ">
      <Image
        src={bgImage}
        fill
        quality={80}
        placeholder="blur"
        className="object-cover object-bottom"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative top-32 flex w-full   justify-center  ">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-6xl text-white  tracking-tight font-normal">
            Welcome to paradise
          </h1>

          <Link
            href="/cabins"
            className=" my-10   bg-[hsla(10,100%,60%,0.4)]  p-6  text-white text-lg font-semibold hover:bg-[hsla(0,0%,0%,0.6)] transition-all"
          >
            Explore luxury cabins
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
