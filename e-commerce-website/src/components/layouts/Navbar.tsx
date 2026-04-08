import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBoxComponent from "../ui/SearchBoxComponent";
import { faBell, faEnvelope, faShop, faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons/faCartArrowDown";

export default function Navbar() {


    return (
        <nav>
            <div className="flex h-20 border-b border-gray-200 items-center justify-between px-4">
                <div className="flex items-center space-x-4">
                    <FontAwesomeIcon icon={faShop} className="text-xl text-orange-500" />
                    <h3 className="text-xl font-bold text-orange-500">Ecoomerce Shop</h3>
                </div>
                <div className="flex items-center space-x-7 ">
                    <div className="flex space-x-3">
                        <a href="">
                            <FontAwesomeIcon className="text-black size-5" icon={faCartArrowDown} />
                        </a>

                        <a href="">
                            <FontAwesomeIcon className="text-black size-5" icon={faBell} />
                        </a>
                        <a href="">
                            <FontAwesomeIcon className="text-black size-5" icon={faEnvelope} />
                        </a>


                    </div>
                    <div className="h-8 w-8 rounded-full flex justify-center items-center border border-orange-500 overflow-hidden p-1">
                        <img src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                    </div>
                </div>

            </div>
        </nav>
    )
};
