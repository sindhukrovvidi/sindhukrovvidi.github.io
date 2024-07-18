import React from "react";
import { workExperience } from "../data/WorkExperience";

function WorkExperience() {
  const handleDemoUrl = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div name="workex" className="text-[#1e3751] md:min-h-screen">
        <div className="max-w-[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold border-b-4 border-[#C3073F] inline">
              Work Experience
            </p>
          </div>

          <div className="py-4 px-4 sm:px-0">
            {workExperience.map(
              ({ id, src, responsibilities, name, role, duration }) => (
                <div
                  key={id}
                  className="shadow-md shadow-gray-600 rounded-lg grid grid-cols-4 text-black my-8"
                >
                  <div className="col-span-1">
                    <img
                      src={src}
                      alt=""
                      className="p-2 rounded-md h-25 w-full duration-200 hover:scale-105"
                    />
                    <div className="flex-col items-center text-center justify-center">
                    <p className="text-sm font-bold text-orange-500 py-1 px-3 hover:scale-105 duration-200">
                        {name}
                      </p>
                      <p className="text-sm font-bold text-black-500 py-1 px-3 hover:scale-105 duration-200">
                        {role}
                      </p>
                      <p className="text-xs py-1 px-3">{duration}</p>
                    </div>
                  </div>
                  <div className="flex-col items-center col-span-3 pt-3 pb-2">
                    <ul className="list-disc list-inside px-2">
                      {responsibilities.map((responsibility, index) => (
                        <li className="text-xs text-black" key={index}>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkExperience;
