"use client";
import SideNav from "../ui/dashboard/sidenav";
import Particles from "../ui/particles";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">

      <div className="w-full flex-none md:w-64 opacity-65 hover:opacity-95">
        <SideNav />
      </div>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}