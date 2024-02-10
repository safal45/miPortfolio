import React from "react";

const ProgressComponent = ({ progresses }) => {
      console.log("Rendering ProgressComponent with data:", progresses);
  return (<>
    <h1 className=" font-Handy flex items-center justify-center -mb-8 text-8xl pt-24">MY SKILLS</h1>
    <hr class="w-72 h-1 mx-auto my-4 bg-white shadow-lg shadow-purple-800 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
    <div className="w- bg-transition justify-center mt-24 flex flex-wrap bg-transparent  ">
      {progresses.map((progress, index) => (
        <div className="h-auto w-72 mx-24 pt-6 text-white  " key={index}>
          <p className="font-Handy text-2xl h-auto text-teal-200">{progress.name}</p>
          <div className="mb-8">
            <div
              className="flex w-full h-2 bg-gray-600 border-1 border-orange-950 rounded-full overflow-hidden dark:bg-gray-700"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className={`${progress.value} flex flex-col justify-center rounded-full overflow-hidden bg-orange-950 text-md text-white text-center whitespace-nowrap transition duration-500`}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div></>
  );
};

export default ProgressComponent;
