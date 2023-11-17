"use client";

import Image from "next/image";
import Link from "next/link";
import SearchButton from "./SearchButton";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${searchTerm}`);
  };

  return (
    <header className="flex items-center sm:flex-row sm:space-y-0 space-y-2 flex-col justify-between space-x-2 font-bold px-16 py-6 bg-[#282828]">
      <Link href="/">
        <h1 className="text-5xl font-bold">
          <span className="bg-gradient-to-r from-[#282828] via-[#e0e9e9] to-[#282828] bg-clip-text text-transparent">
            Book Reviews
          </span>
        </h1>
        <p className="text-[#fdfdfd] opacity-50 pt-2">a couple of uninformative book reviews</p>
        {/* Et par uinformativ bokanmeldelser. */}
      </Link>
      <div className=" flex flex-row gap-1 items-center justify-center">
        {/* 
        <div>NO</div>
        <div>EN</div>
        */}
        <div className="">
          <form onSubmit={handleSearch} className="w-full">
            <div className="flex flex-1 items-center gap-2 w-full px-4">
              <div className="flex flex-1 items-center space-x-2 bg-white rounded-xl border px-2 py-2 md:max-w-sm">
                <input
                  type="text"
                  name="searchProducts"
                  placeholder="Search"
                  className="outline-none flex-1  "
                  onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                />
                <SearchButton />
              </div>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
