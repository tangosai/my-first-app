import Link from "next/link";
import React from "react";

const Header = () => {
  const menuData = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "About",
      link: "/about",
    },
    {
      id: 3,
      title: "Services",
      link: "/",
    },
    {
      id: 4,
      title: "Products",
      link: "/",
    },
  ];
  return (
    <>
      <div className="bg-slate-900">
        <div className=" px-2 max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between py-2">
            <div className="w-44">
              <img src="/gitam_white_logo.png" alt="logo" />
            </div>
            <div>
              <ul className="flex">
                {menuData.map((data) => {
                  return (
                    <li key={data.id}>
                      <Link href={data.link} className="text-white mr-4">
                        {data.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
