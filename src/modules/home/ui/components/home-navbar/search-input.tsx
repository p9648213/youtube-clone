import { SearchIcon } from "lucide-react";

export const SearchInput = () => {
  // TODO: Add search functionality

  return (
    <form className="flex w-full max-w-[600px]">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search"
          className="py-2 pr-12 pl-4 border focus:border-blue-500 rounded-l-full w-full focus:outline-none"
        />
        {/* //TODO: add remove search button */}
      </div>
      <button
        type="submit"
        className="bg-gray-100 hover:bg-gray-200 disabled:opacity-50 px-5 py-2.5 border border-l-0 rounded-r-full disabled:cursor-not-allowed"
      >
        <SearchIcon className="size-5" />
      </button>
    </form>
  );
};
