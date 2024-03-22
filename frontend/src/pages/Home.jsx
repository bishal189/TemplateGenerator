
import Header from "../components/Header";
import Footer from '../components/Footer';
import { RiBuilding2Fill, RiSearch2Line } from "react-icons/ri";
import { GoLaw } from "react-icons/go";
import TemplateCard from "../components/TemplateCard";
import {HowItWorks} from "../components/howItWorks"
import {WhyChooseTemplate} from '../components/chooseTemplate'
const Home = () => {
  return (
    <>
    <Header />
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
      <div className="flex content-center justify-items-center justify-center">
        <div className="w-2/3 bg-white shadow-lg border-2 rounded-lg p-5 mt-5">
          <h2 className="text-3xl font-bold md-2">Find Your Document</h2>

          <div className="border border-gray-950 rounded-lg p-1 mt-3 flex items-center content-center justify-center bg-violet-50">
            <RiSearch2Line className="text-3xl align-middle" />
            <input
              className="w-full py-2 px-3 outline-none bg-violet-50"
              type="text"
              placeholder="Search documents and fonts"
            />

            <button className="w-1/6 mx-1 py-2 font-bold rounded-sm bg-violet-600 border-2 border-violet-600 hover:bg-white hover:text-violet-600 transition-all">
              Search
            </button>
          </div>

          <div className="flex mt-4">
            <a
              href="#"
              className="appearance-none text-violet-600 px-2 border-r-2 border-violet-600 text-sm"
            >
              Room Rental Agreement
            </a>

            <a
              href="#"
              className="appearance-none text-violet-600 px-2 border-r-2 border-violet-600 text-sm"
            >
              Quitclaim Deed
            </a>

            <a
              href="#"
              className="appearance-none text-violet-600 px-2 border-r-2 border-violet-600 text-sm"
            >
              Medical Power of Attorney
            </a>

            <a
              href="#"
              className="appearance-none text-violet-600 px-2 border-r-2 border-violet-600 text-sm"
            >
              NDA
            </a>

            <a
              href="#"
              className="appearance-none text-violet-600 px-2 border-r-2 border-violet-600 text-sm"
            >
              + More
            </a>
          </div>
        </div>
      </div>
<<<<<<< HEAD

      <div className="flex content-center justify-items-center justify-center">
        <div className="w-2/3 p-5 mt-5"></div>
      </div>
=======
      <HowItWorks />
      <WhyChooseTemplate />
      <Footer />
>>>>>>> main
    </>
  );
};

export default Home;
