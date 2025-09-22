import React, { useState } from "react";

function SearchInput({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      onSearch(searchText.trim());
    }
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      onSearch(searchText.trim());
    }
  };

  return (
    <div className="flex justify-center p-28">
      <div className="text-center">
        <h1
          className="text-4xl md:text-8xl font-black text-white mb-16 select-none"
          style={{
            textShadow: `
                4px 4px 0px #1e2745,
                8px 8px 0px #2b3765,
                12px 12px 0px #3a4a85,
                16px 16px 0px #4a5ca5,
                20px 20px 0px #5a6ec5,
                24px 24px 0px #6a80e5
              `,
          }}
        >
          Search Movie
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative flex justify-center">
            <input
              type="text"
              placeholder="Search film . . . "
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full max-w-sm md:max-w-xl lg:max-w-2xl 
                 px-4 md:px-6 py-1 md:py-4 
                 text-lg md:text-xl text-gray-700 
                 bg-white border-none rounded-lg 
                 focus:outline-none focus:ring-4 
                 focus:ring-blue-400 transition-all duration-200"
              style={{
                boxShadow: `
          0 4px 0px #1e2745,
          0 8px 0px #2b3765,
          0 12px 0px #3a4a85,
          0 16px 20px rgba(0, 0, 0, 0.3)
        `,
              }}
            />
          </div>

          <button
            type="button"
            onClick={handleButtonClick}
            disabled={!searchText.trim()}
            className="px-4 md:px-6 lg:px-8 
               py-1 md:py-2 lg:py-4 
               text-base md:text-lg lg:text-xl 
               font-bold text-white bg-[#2b3765]
               rounded-3xl 
               transition-all duration-200 
               hover:bg-[#1e2745] active:translate-y-1
               disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              boxShadow: `
        0 4px 0px #1e2745,
        0 8px 0px #2b3765,
        0 12px 0px #3a4a85,
        0 16px 20px rgba(0, 0, 0, 0.3)
      `,
            }}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchInput;
