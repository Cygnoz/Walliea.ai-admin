import { useNavigate } from "react-router-dom";
import BannerIcon from "../../assets/icons/BannerIcon";
import ContactIcon from "../../assets/icons/ContactIcon";
import DashboardIcon from "../../assets/icons/DashboardIcon";
import wallai from "../../assets/images/Walliea.ai.png";
import { useEffect, useState } from "react";

type Props = {};

function SideBar({ }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const navigate = useNavigate();

  const navlist = [
    {
      nav: "Dashboard",
      icon: <DashboardIcon />,
      route: "/",
    },
    {
      nav: "Contact",
      icon: <ContactIcon />,
      route: "/contact",
    },
    {
      nav: "Banner",
      icon: <BannerIcon />,
      route: "/banner",
    },
  ];

  // Load saved active index on component mount
  useEffect(() => {
    const savedIndex = localStorage.getItem("index");
    if (savedIndex !== null) {
      const index = Number(savedIndex);
      setActiveIndex(index);
      if (index >= 0 && index < navlist.length) {
        navigate(navlist[index].route);
      }
    }
  }, [navigate]);

  // Function to handle item click
  const handleClick = (index: number, route: string) => {
    setActiveIndex(index);
    localStorage.setItem("index", index.toString());
    navigate(route);
  };

  return (
    <aside className="bg-[#0E371A] h-[100vh] w-[9.625rem] text-white">
      {/* Logo */}
      <div className="cursor-pointer mb-5 p-8">
        <img src={wallai} alt="Logo" />
      </div>

      <ul className="space-y-4">
        {navlist.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(index, item.route)}
            className={`relative flex items-center space-x-2 p-2 cursor-pointer 
              ${activeIndex === index ? "bg-gradient-to-r" : "hover:bg-[#295f33]"}`}
            style={
              activeIndex === index
                ? {
                  background: "linear-gradient(89.9deg, #102C19 0.08%, #3F661C 54.18%, #D8E431 165.23%)",
                }
                : {}
            }
          >
            {activeIndex === index && (
              <div className="absolute left-0 -top-1 w-1.5 h-[42px] bg-[#D8E431] rounded-r-md"></div>
            )}
            <div className="ms-2">{item.icon}</div>
            <span className="text-[0.8125rem]">{item.nav}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default SideBar;
