import Image from "next/image";

function Logo() {
  return (
    <a href="/" className="flex items-center justify-between py-2 gap-4 z-10">
      <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" />
      <span className="text-xl font-semibold text-white">
        The Wild Oasis Website
      </span>
    </a>
  );
}

export default Logo;
