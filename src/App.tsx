import React from "react";

const App = () => {
  return (
    <div className="flex justify-evenly items-center w-full h-[100vh]">
      <div className="text-3xl text-center border border-black px-5 rounded">
        <div className=" flex justify-center items-center gap-4">
          <input type="checkbox" />
          item 1
        </div>
        <div className=" flex justify-center items-center gap-4">
          <input type="checkbox" />
          item 1
        </div>
        <div className=" flex justify-center items-center gap-4">
          <input type="checkbox" />
          item 1
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <button className="relative h-[40px] w-20 overflow-hidden border border-black rounded-full px-3 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-sky-400 before:transition-all before:duration-500 hover:text-whit hover:before:left-0 hover:before:w-full">
          <span className="relative z-10 text-3xl">&#8594;</span>
        </button>
        <button className="relative h-[40px] w-20 overflow-hidden border border-black rounded-full px-3 shadow-2xl transition-all before:absolute before:bottom-0 before:right-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-sky-400 before:transition-all before:duration-500 hover:text-whitehover:before:right-0 hover:before:w-full">
          <span className="relative z-10 text-3xl">&#8592;</span>
        </button>
      </div>

      <div className="text-3xl text-center border border-black px-5 rounded">
        <div className=" flex justify-center items-center gap-4">
          <input type="checkbox" />
          item 1
        </div>
        <div className=" flex justify-center items-center gap-4">
          <input type="checkbox" />
          item 1
        </div>
        <div className=" flex justify-center items-center gap-4">
          <input type="checkbox" />
          item 1
        </div>
      </div>
    </div>
  );
};

export default App;
