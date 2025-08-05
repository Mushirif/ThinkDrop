import React from "react";
import Search from "./Search";
import { Link, useSearchParams } from "react-router-dom";

const SideMenu = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleFilterChange = (e) => {
    if (searchParams.get("sort") !== e.target.value) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        sort: e.target.value,
      });
    }
  };

  const handleCategoryChange = (category)=>{
    if (searchParams.get("cat") !== category) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        cat: category,
      });
    }
  }
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
            <input
              type="radio"
              name="sort"
              onChange={handleFilterChange}
              value="newest"
              className="bg-white appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800"
            />
            Newest
          </label>
          <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="sort"
              onChange={handleFilterChange}
              value="popular"
              className="bg-white appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800"
            />
            Most popular
          </label>
          <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="sort"
              onChange={handleFilterChange}
              value="trending"
              className="bg-white appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800"
            />
            Trending
          </label>
          <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="sort"
              onChange={handleFilterChange}
              value="oldest"
              className="bg-white appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800"
            />
            Oldest
          </label>
        </div>
      </div>
      <div>
        <h1 className="mt-4 text-sm font-medium mb-3">Categories</h1>
        <div className="flex flex-col gap-2 text-sm">
          <span className="underline cursor-pointer" onClick={()=>handleCategoryChange("general")}>All</span>
          <span className="underline cursor-pointer" onClick={()=>handleCategoryChange("web-design")}>Web Design</span>
          <span className="underline cursor-pointer" onClick={()=>handleCategoryChange("development")}>Development</span>
          <span className="underline cursor-pointer" onClick={()=>handleCategoryChange("databases")}>Databases</span>
          <span className="underline cursor-pointer" onClick={()=>handleCategoryChange("seo")}>Search Engines</span>
          <span className="underline cursor-pointer" onClick={()=>handleCategoryChange("marketing")}>Marketing</span>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
