import React from "react";
import Card from "./card";

const Services = () => {
  const data = [
    {
      id: 1,
      title: "Orthopaedic",
      para: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
      link: "/services/orthopaedic",
    },
    {
      id: 2,
      title: "Cardiovascular",
      para: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
      link: "/services/cardiovascular",
    },
    {
      id: 3,
      title: "Neurology",
      para: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
      link: "/services/neurology",
    },
    {
      id: 4,
      title: "Gastroenterology",
      para: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
      link: "/services/gastroenterology",
    },
    {
      id: 5,
      title: "Surgery",
      para: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
      link: "/services/surgery",
    },
    {
      id: 6,
      title: "Physiotherapy",
      para: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
      link: "/services/physiotherapy",
    },
  ];
  return (
    <>
      <div className="px-2 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-3 gap-5">
          {data.map((data) => {
            return <Card data={data} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
