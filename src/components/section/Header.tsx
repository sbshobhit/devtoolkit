"use client";
import { FaGithub } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import Link from "next/link";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <header className="bg-gray-900 text-gray-300 py-2 px-2 fixed top-0 left-0 right-0">
      <div className="mx-auto px-2 py-2">
        <div className="flex items-center justify-between">
            <Link href="/" className="left-0">
              <h1 className="text-2xl font-bold flex items-center gap-2 cursor-pointer group">
                <span className="transition-all duration-300 group-hover:scale-105">
                  DevsToolKit
                </span>
              </h1>
            </Link>
            <nav className="flex space-x-2 right-0">
              {[
                { name: <FaTools />, link: "/", onNewTab: "_self" },
                { name: <FaGithub />, link: "https://github.com/sbshobhit/devstoolkit", onNewTab: "_blank" },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="hover:border p-2 transition-all duration-100 relative group"
                  style={{ animationDelay: `${idx * 100}ms` }}
                  target={item.onNewTab}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
        </div>
      </div>
    </header>
  );
}
