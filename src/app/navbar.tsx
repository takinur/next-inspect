// "use client"; // This is a client-side only file (no server-side rendering)
import Link from "next/link";

const Navbar = () => {
  return (
    <ul className="justify-between text-green-500">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/fruits">Fruits</Link>
      </li>
      <li>
        <Link href="/kernals">Kernals</Link>
      </li>
      <li>
        <Link href="/apex/wraith">Wraith</Link>
      </li>
    </ul>
  );
};

export default Navbar;
