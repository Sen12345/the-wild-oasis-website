"use client";

import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer
      className={` flex items-center justify-center py-5 z-10 border-t-[0.1px] border-t-gray-700 w-full text-white ${pathname === "/" ? "bg-[hsla(0,0%,0%,0.6)]" : "bg-primary-950"}`}
    >
      &copy; 2026 &reg; 0957444
    </footer>
  );
};

export default Footer;
