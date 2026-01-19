import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/logo";

function Header() {
  return (
    <header className=" px-8 py-5">
      <div className="flex justify-between border-b-yellow-600 items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
