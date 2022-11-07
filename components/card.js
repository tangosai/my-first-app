import Link from "next/link";
import React from "react";

const Card = ({ data }) => {
  return (
    <>
      <div className="px-6 py-10 bg-slate-100">
        <div>
          <div className="">
            <h3 className="text-xl font-semibold mb-2 text-red-600">
              {data.title}
            </h3>
            <p className="text-base text-slate-600">{data.para}</p>
            <Link
              href={data.link}
              className="color flex mt-3 text-base items-center"
            >
              <span className="block">Learn More</span>
              <span className="block relative top-[1px] ml-1">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.979 8.95L16.986 12.5H19V5.5H12V7.514L15.55 7.521L5 18.071L6.429 19.5L16.979 8.95Z"
                    fill="#007EF3"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
