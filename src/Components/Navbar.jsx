import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-base-100 shadow-sm">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between py-4 px-4">

        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold">
          CS — Ticket System
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a className="hover:text-primary cursor-pointer">Home</a>
          <a className="hover:text-primary cursor-pointer">FAQ</a>
          <a className="hover:text-primary cursor-pointer">Blog</a>
          <a className="hover:text-primary cursor-pointer">Contact</a>

          <button className="btn btn-primary">
            + New Ticket
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-base-100 px-4 pb-4 space-y-3">
          <a className="block hover:text-primary">Home</a>
          <a className="block hover:text-primary">FAQ</a>
          <a className="block hover:text-primary">Blog</a>
          <a className="block hover:text-primary">Contact</a>

          <button className="w-full btn btn-primary">
            + New Ticket
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;