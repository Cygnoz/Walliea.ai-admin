import { useNavigate } from "react-router-dom";
import SearchIcon from "../../assets/icons/SearchIcon"
import UserIcon from "../../assets/icons/UserIcon"

type Props = {}

function Header({ }: Props) {
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    Navigate("/login");
  };
  const Navigate =useNavigate()

  return (
    <div className="px-8 py-4 border-b border-[#DADEE5] flex justify-between">
      <div className="relative w-[720px]">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A9AEB7]" />
        <input
          type="text"
          className="border border-[#E7E8EB] focus:outline-none rounded-lg w-full h-[2.25rem] pl-10 pr-5 text-[#A9AEB7] text-xs"
          placeholder="Search licenses, clients, tickets, or invoices"
        />
      </div>

      <div>
        <button onClick={handleLogout} className="flex justify-center items-center border border-[#565148] bg-[#FEFDFA]
        rounded-lg  text-sm font-medium text-[#565148] px-5 h-[2.25rem] gap-2
        ">
          <UserIcon /> Logout
        </button>
      </div>
    </div>
  )
}

export default Header