import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function SearchBoxComponent() {
    

    return(
       <div className="flex items-center w-96 h-10 px-4 border border-gray-300 rounded-xl bg-white ">
      <FontAwesomeIcon
        className="size-4 text-gray-400"
        icon={faMagnifyingGlass}
      />
      <input
      
        defaultValue=""
        placeholder="Tim kiem san pham"
        className="ml-3 w-full h-full outline-none text-black"
      />
    </div>
    )
};
