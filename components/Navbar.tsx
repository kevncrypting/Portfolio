import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-green-500 p-2">
      <span>TKP</span>
      <ul className="flex gap-4 list-none">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>Work</li>
        <li>Contact</li>
        <li>Resume</li>
      </ul>
    </nav>
  );
}
