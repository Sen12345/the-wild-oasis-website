import SideNavigation from "../_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[16rem_1fr] max-w-full min-h-full">
      <SideNavigation />

      <div className="py-1">{children}</div>
    </div>
  );
}
