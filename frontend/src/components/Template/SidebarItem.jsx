import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false);

  if (item.childrens) {
    return (
      <div
        className={`flex flex-col` + open && "bg-blue-50"}
        onClick={() => setOpen(!open)}
      >
        <div className="flex justify-between">
          <div className="flex items-center">
            <GoDotFill className="text-blue-400" />
            <p className="m-0 pl-3">{item.title}</p>
          </div>
          {open ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
        </div>
        {open && (
          <div className="sidebar-content">
            {item.childrens.map((child, index) => (
              <SidebarItem key={index} item={child} />
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="flex">
        <div className="w-2 h-6 border-r border-blue-400"></div>
        <a
          href={item.path || "#"}
          className="sidebar-item plain ml-5 text-sm text-slate-400"
        >
          {item.icon && <i className={item.icon}></i>}
          {item.title}
        </a>
      </div>
    );
  }
}
