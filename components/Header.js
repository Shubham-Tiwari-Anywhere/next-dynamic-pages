"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => setDropdown(!dropdown);
  
  return (
    <header className="fixed top-0 w-full p-3 bg-slate-800 text-slate-100 flex flex-col justify-between md:p-5 md:flex-row">
      <div className="flex justify-between md:block">
        <Image
          src="https://cdn.iconscout.com/icon/premium/png-256-thumb/dynamic-3277308-2740095.png"
          width={100}
          height={20}
          alt="ts logo"
          className="w-10 h-10"
        />
        <button onClick={handleDropdown} className="md:hidden">=</button>
      </div>
      <nav className={`text-sm space-x-2 md:space-x-3 transition-all duration-100 ease-in-out ${dropdown ? "h-screen overflow-auto" : "h-0 overflow-hidden"} md:h-full md:overflow-auto`}>
        <Link href="/dashboard/services">Dashboard</Link>
      </nav>
    </header>
  );
};

export default Header;
