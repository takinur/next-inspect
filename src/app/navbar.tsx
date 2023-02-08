// "use client"; // This is a client-side only file (no server-side rendering)
import Link from "next/link";

const Navbar = () => {
  return (
    <ul className="flex justify-start gap-4 pl-10 text-green-500 ">
      <li>
        <Link className="hover:text-green-900" href="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="hover:text-green-900" href="/fruits">
          Fruits
        </Link>
      </li>
      <li>
        <Link className="hover:text-green-900" href="/kernals">
          Kernals
        </Link>
      </li>
      <li>
        <Link className="hover:text-green-900" href="/apex/wraith">
          Wraith
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
