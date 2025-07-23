import React from "react";
import Search from "./Search";
import {Link} from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="flex flex-col gap-6 px-4 h-max sticky top-8">
      <div>
        {" "}
        <h1 className="mt-4 mb-4 text-sm font-medium">Search</h1>
        <Search />
      </div>

      <div>
        <h1 className="mt-4 text-sm font-medium">Filter</h1>
        <div className="flex flex-col gap-2 text-sm">
            <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="sort" value="newest" className="bg-white appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800" />
                Newest
            </label>
            <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="sort" value="popular" className="bg-white appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800" />
                Most popular
            </label>
            <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="sort" value="trending" className="bg-white appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800" />
                Trending
            </label>
            <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="sort" value="oldest" className="bg-white appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800" />
                Oldest
            </label>
           
        </div>
      </div>
      <div>
        <h1 className="mt-4 text-sm font-medium mb-3">Categories</h1>
        <div className="flex flex-col gap-2 text-sm">
          <Link className="underline" to="/post">
            All
          </Link>
          <Link className="underline" to="/post?cat=web-design">
            Web Design
          </Link>
          <Link className="underline" to="/post?cat=development">
            Development
          </Link>
          <Link className="underline" to="/post?cat=databases">
            Databases
          </Link>
          <Link className="underline" to="/post?cat=seo">
            Search Engines
          </Link>
          <Link className="underline" to="/post?cat=marketing">
            Marketing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
