import { Search } from "lucide-react";
import { useEffect } from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  useEffect(()=>{
    const searchString=sessionStorage.getItem('eventListSearchQuery');
    if(searchString){
      setSearchQuery(searchString);
    }
  },[])
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className="relative border-2 border-violet-500 rounded-full p-0.5 subtle-glow">
      <input
        type="text"
        placeholder="Search...."
        className="w-full p-3 pr-14 rounded-full bg-gray-950 text-white border border-gray-800 hover:border-violet-400 focus:outline-none focus:border-violet-600 transition-colors duration-200"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div className="absolute right-0 top-0 h-full w-14 bg-gradient-to-r from-pink-600 to-violet-600 rounded-r-full flex items-center justify-center">
        <Search className="text-white" size={20} />
      </div>
      <style jsx>{`
        .subtle-glow {
          box-shadow: 0 0 5px 1px rgba(139, 92, 246, 0.5);
        }
      `}</style>
    </div>
  );
};

export default SearchBar;