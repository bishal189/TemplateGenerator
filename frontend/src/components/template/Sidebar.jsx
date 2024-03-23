import SidebarItem from "./SidebarItem";
import items from "./sidebar.json";
import logo from "../../assets/logo.svg";

export default function Sidebar() {
  return (
    <div className="w-full h-lvh flex flex-col content-center items-center justify-items-center p-3">
      <div className="w-2/3">
        <img src={logo} alt="" />
      </div>
      <div className="flex flex-col w-full mt-5 h-1/2 overflow-auto">
        {items.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </div>

      <div className="w-2/3 mt-4">
        <button className="w-full py-2 bg-blue-600 rounded-md hover:bg-blue-400 text-white">
          Preview
        </button>
        <button className="w-full py-2 rounded-md border-2 text-slate-400 hover:border-gray-950 mt-3">
          Save Progress
        </button>
      </div>
    </div>
  );
}
