import React from "react";
import { RiBuilding2Fill } from "react-icons/ri";
import TemplateCard from "../components/TemplateCard";

const Home = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center justify-items-center align-middle py-14">
        <h1 className="text-5xl font-bold text-center">
          Build Your Legal Forms
        </h1>

        <p className="text-xl text-center text-violet-400 mt-3">
          Create Your Free Legal Documents & Contracts Online in Minutes
        </p>
        <div className="flex justify-center mt-5">
          <TemplateCard Icon={RiBuilding2Fill} Text="Lease Agreement" />
          <TemplateCard Icon={RiBuilding2Fill} Text="Lease Agreement" />
          <TemplateCard Icon={RiBuilding2Fill} Text="Lease Agreement" />
          <TemplateCard Icon={RiBuilding2Fill} Text="Lease Agreement" />
          <TemplateCard Icon={RiBuilding2Fill} Text="Lease Agreement" />
          <TemplateCard Icon={RiBuilding2Fill} Text="Lease Agreement" />
        </div>
      </div>
    </>
  );
};

export default Home;
