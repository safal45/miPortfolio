import React from "react";

const ProgressComponent = ({ progresses }) => {
      console.log("Rendering ProgressComponent with data:", progresses);
  return (<>
    <h1 className=" font-Handy text-fuchsia-50 hover:text-fuchsia-500 flex items-center justify-center -mb-8 text-8xl pt-24">MY SKILLS</h1>
    <hr class="w-72 h-2 mx-auto border-2 border-white my-4 bg-orange hover:bg-purple-800 rounded mt-8"></hr>
    <div className="w- bg-transition justify-center mt-24 flex flex-wrap bg-transparent  ">
      {progresses.map((progress, index) => (
        <div className="h-auto w-72 mx-24 pt-6 text-white  " key={index}>
          <p className="font-Anton text-lg h-auto text-purple-200 hover:text-purple-800">{progress.name}</p>
          <div className="mb-8">
            <div
              className="flex w-full h-2 bg-white border-1 border-orange-950 rounded-full overflow-hidden dark:bg-gray-700"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className={`${progress.value} flex flex-col justify-center rounded-full overflow-hidden bg-orange-800 text-md text-white text-center whitespace-nowrap transition duration-500`}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div></>
  );
};

export default ProgressComponent;
