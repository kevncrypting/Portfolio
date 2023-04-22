import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-green-500">
      <span>TKP</span>
      <ul className="flex gap-4 list-none">
        <li>Home</li>
        <li>Blog</li>
        <li>Work</li>
        <li>Contact</li>
        <li>Resume</li>
      </ul>
    </nav>
  );
}
