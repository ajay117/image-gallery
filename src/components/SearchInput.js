function SearchInput() {
  return (
    <form className="text-center pb-4 pt-8">
      <input className="border border-black pl-2 w-1/3" type="search" placeholder="Search" />
      <button className="ml-4 border active:text-sm bg-blue-700 text-white px-7">Search</button>
    </form>
  );
}

export default SearchInput;
