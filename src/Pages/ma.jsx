import React from "react";
import { VscFilter, VscFilterFilled } from "react-icons/vsc";
import "../App.css";

const Ma = () => {
  let a = [1, 2, 3, 4, 5, 2, 2, 2, 2, 2, 2, 2, 12, 2, 1, 12, 12];
  const [view, setView] = React.useState(true);
  return (
    <div className="p-10  h-screen w-full">
      <div>
        <h1 className="text-5xl font-bold ">Measured Actifity</h1>
      </div>
      <div class="flex m-6 justify-start text-center text-gray-800 " >
        {/* <button className="a p-2 bg-gray-50 hover:bg-gray-500 rounded-lg" onClick={'border bottom'}>Approve <a href="" className="m-3">0</a></button>
        <button className="a p-2 bg-gray-50 hover:bg-gray-500 rounded-lg">Active <a href="" className="m-3">0</a></button>
        <button className="a p-2 bg-gray-50 hover:bg-gray-500 rounded-lg">Overdue <a href="" className="m-3">0</a></button>
        <button className="a p-2 bg-gray-50 hover:bg-gray-500 rounded-lg">Complete <a href="" className="m-3">0</a></button>
         */}
        <diva>Approve <a className="">0</a></diva>
        <diva>Active <a className="">0</a></diva>
        <diva>Overdue <a className="">0</a></diva>
        <diva>Complete <a className="">0</a></diva>
      </div>
      <div className="text-white grid grid-cols-12 space-x-3 my-5">
        <label htmlFor="" className="col-span-3">
          <input
            type="text"
            placeholder="Search.."
            className="outline-none bg-slate-100 text-base placeholder:text-sm :border-2 text-black px-3 py-1 rounded-lg w-full"
          />
        </label>
        <div className=" text-black col-end-6 col-span-2">
          <a
            href="#"
            class="inline-flex items-center py-0 px-1 text-sm font-medium text-center text-gray-800 bg-white-700 rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white"
            onClick={() => {
              setView(!view);
            }}
          >
            Filter
            {view ? <VscFilter size={30} /> : <VscFilterFilled size={30} />}
          </a>
        </div>
      </div>
      <p className="border-b-2 w-full my-5"></p>
      {/* <div className="grid grid-cols-12  ">
        {a.map((e) => (
          <div className="col-span-4 m-1 px-4 py-2 border border-red-200 rounded-xl">
            <div className="flex justify-between items-center">
              <div className="flex space-x-3 ">
                <input type="checkbox" name="" id="" />
                <p className="text-sm">Fudail Ramadhani</p>
              </div>
              <p className="text-xs">12 Nov</p>
            </div>
            <div className="font-bold text-lg flex items-center space-x-2 my-5">
              <div className="border p-2 rounded-full text-xs">100%</div>
              <p>Membuat halaman di html dengan bantuan css</p>
            </div>
            <div className="flex justify-between border-t-2 mt-2">
              <p>Status</p>
              <p>Done</p>
            </div>
          </div>
        ))}
      </div> */}

      <div>
        {a.map((e) => (
          <div className=" items-center border-2 p-4 grid grid-cols-11 m-3 rounded-lg">
            <input type="checkbox" name="" id="" className="col-end-2" />
            <div className="border p-5 rounded-full text-xs text-center m-auto ">
              100%
            </div>
            <div className=" col-span-5">
              <p className="text-xl font-bold">
                Membuat halaman di html dengan bantuan css
              </p>
              <p className="text-xs">12 Nov</p>
            </div>
          </div>
        ))}
      </div>
      <div className="h-20 w-full"></div>
    </div>
  );
};

export default Ma;
