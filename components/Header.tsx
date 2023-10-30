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
    <header className="flex items-center justify-between space-x-2 font-bold px-16 py-6 bg-gray-800">
      <Link href="/">
        <h1 className="text-5xl font-bold">
          <span className="bg-gradient-to-r from-gray-800 via-[#49cea8] to-gray-800 bg-clip-text text-transparent">
            Book Reviews
          </span>
        </h1>
        <p className="text-[#49cea8] pt-2">a couple of uninformative book reviews</p>
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
