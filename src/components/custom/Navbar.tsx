import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full h-20 px-4 border-b shadow-sm bg-background flex items-center">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-x-4">
          <Link href={"/"}>
            <h1 className="font-semibold text-3xl">
              Convex Tutorial Application
            </h1>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
