import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
function Header() {
  return (
    <header>
      <div className="grid grid-col-3 p-10 items-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1>The ZEINAB NEWS</h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
