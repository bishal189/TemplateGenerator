
import GetTheMostImg from "../assets/getthemost.png";

const GetTheMost = () => {
  return (
    <div className="w-full flex justify-center bg-slate-100">
      <div className="w-4/5 flex justify-center items-center p-10 bg-inherit">
        <div className="w-1/2 bg-inherit mr-5">
          <h2 className="text-5xl font-bold bg-inherit">
            Get the Most Out of Your Rental Properties
          </h2>
          <p className="text-lg text-slate-400 bg-inherit">
            Create an unlimited number of legally-binding Real Estate forms,
            from a lease agreement to lease termination. You’ll have access to
            regularly updated forms for every stage of business growth.
          </p>

          <button className="mt-3 rounded p-2 text-white font-bold border-2 border-blue-500 bg-blue-500 hover:text-blue-500 hover:bg-white">
            See All Real Estate Forms
          </button>
        </div>
        <div className="w-1/2 bg-inherit p-0 rounded-xl overflow-hidden ">
          <img src={GetTheMostImg} className="m-0" alt="" />
        </div>
      </div>
    </div>
  );
};

export default GetTheMost;
