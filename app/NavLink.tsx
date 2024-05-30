import Link from "next/link";

type Props = {
  category: string;
  isActive: boolean;
};

function NavLink({ category, isActive }: Props) {
  return (
    <Link
      className={`navLink ${
        isActive &&
        "underline decoration-orange-400 underline-offset-4 font-bold text-lg"
      }`}
      href={{ pathname: "/category", query: { term: category } }}
    >
      {category}
    </Link>
  );
}

export default NavLink;
