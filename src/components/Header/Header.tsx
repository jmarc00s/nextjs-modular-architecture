import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="flex justify-between py-4 px-8 bg-gray-800 border-b border-gray-700">
      <h1 className="font-bold text-lg">
        <Link href="/">NextJS Modular Architecture</Link>
      </h1>
      <ul className="flex gap-2">
        <li className="hover:underline">
          <Link href="/books">Books</Link>
        </li>
        <li className="hover:underline">
          <Link href="/authors">Authors</Link>
        </li>
      </ul>
    </header>
  );
};
