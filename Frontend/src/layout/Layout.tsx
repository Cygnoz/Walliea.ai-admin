import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import SideBar from "./sidebar/SideBar";

type Props = {}

function Layout({ }: Props) {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex flex-col w-full h-full">
        <Header />
        <div className="flex-grow p-7 flex overflow-y-scroll"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
