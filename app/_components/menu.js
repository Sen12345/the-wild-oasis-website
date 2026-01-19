import Link from "next/link";
import Image from "next/image";

const Menu = ({ toggle, session }) => {
  console.log(session);
  return (
    <>
      <ul className="hidden md:flex  items-center justify-center  md:flex-row  gap-5 top-20 md:right-auto p-3  right-0 ">
        <li className="py-3 md:py-0">
          <Link href="/">Home</Link>
        </li>
        <li className="pb-3 md:pb-0">
          <Link href="/cabins">Cabins</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link className="flex gap-2" href="/account">
              <Image
                src={session.user.image}
                alt={session.user.name}
                width={20}
                height={20}
                className="rounded-full object-cover"
              />
              <span>Guest Area</span>
            </Link>
          ) : (
            <Link href="/account">Guest Area</Link>
          )}
        </li>
      </ul>
      <div className="md:hidden absolute top-20 md:p-0 right-0">
        {toggle && (
          <ul className=" flex items-center  justify-center flex-col  text-black  gap-5  p-3   bg-[hsla(0,100%,100%,0.8)]">
            <li className="py-3 md:py-0">
              <Link href="/">Home</Link>
            </li>
            <li className="pb-3 md:pb-0">
              <Link href="/cabins">Cabins</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/account">Guest Area</Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Menu;
