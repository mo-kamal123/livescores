import React from "react";

function CompitCard({compit, standings}) {
  return (
    <div className="w-[95%] md:w-1/2 h-fit flex justify-between items-center px-2 sm:px-8 py-4 bg-[#181818] text-white text-sm md:text-xl rounded-lg shadow-xl mx-auto mt-28">
      <div className="flex flex-col items-center w-fit justify-center gap-2">
        <img
          className="w-24 bg-white rounded-lg p-2"
          src={compit.competition.emblem}
          alt=""
        />
        <a
          className="text-sm md:text-lg font-bold dark:text-white"
          tabIndex="0"
          role="link"
        >
          {compit.competition.name}
        </a>
      </div>
      <div className="">
        <div className="flex items-center gap-2 mb-6">
          <p>coutry:</p>
          <img className="w-3" src={compit.area.flag} alt="" />
          <p>{compit.area.name}</p>
        </div>
        <div>
          Season: {compit.season.startDate.split("-")[0]}/
          {compit.season.endDate.split("-")[0]}
        </div>
      </div>
      <div>
        <p className="mb-6">Teams: {standings[0].table.length}</p>
        <p>Round: {compit.season.currentMatchday}</p>
      </div>
    </div>
  );
}

export default CompitCard;
  