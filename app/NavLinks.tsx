"use client";

import { categories } from "@/constants";
import NavLink from "./NavLink";
import { useSearchParams } from "next/navigation";

function NavLinks() {
  const searchParams = useSearchParams();
  const category = searchParams.get("term");

  const isActive = (path: string) => {
    return category === path;
  };
  return (
    <nav className="grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto borer-b">
      {categories.map((category) => (
        <NavLink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </nav>
  );
}

export default NavLinks;
