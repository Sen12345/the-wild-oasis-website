import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { cabinId } = await params;

  const id = Number(cabinId);

  if (isNaN(Number(id))) return notFound();

  const { name } = await getCabin(id);

  return { title: `Cabin ${name}` };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
  // console.log(ids);
  return ids;
}

export default async function Page({ params }) {
  const { cabinId } = await params;

  const id = Number(cabinId);

  if (Number.isNaN(id)) notFound();

  const cabin = await getCabin(id);
  if (!cabin) notFound();

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-[4fr_4fr]  gap-5 border border-primary-800 py-3 px-10 mb-24">
        <div className="relative aspect-square  -translate-x-3">
          <Image
            fill
            src={cabin.images}
            className="object-cover"
            alt={`Cabin ${cabin.name}`}
          />
        </div>
        <Cabin cabin={cabin} />
      </div>

      <div>
        <h2 className="text-5xl text-accent-400 font-semibold text-center">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
