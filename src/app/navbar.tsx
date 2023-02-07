"use client"; // This is a client-side only file (no server-side rendering)
import Link from "next/link";

const Navbar = () => {
  return (
    <ul className="justify-between text-green-500">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/user/login">Login</Link>
      </li>
      <li>
        <Link href="/user/signup">Sign Up</Link>
      </li>
    </ul>
  );
};

export default Navbar;
