import { Link } from "react-router-dom";
import { Spinner } from "flowbite-react";

// function MatchCard({ matches }) {
//   if (matches.length > 1) {
//     return (
//       <div className="flex flex-col justify-center gap-5 w-full mt-10">
// {matches.map((match) => (
//   <Link
//     key={match.id}
//     to={`/match/${match.id}`}
//     onClick={() => console.log(match.id)}
//     className="w-1/2 mx-auto h-fit px-8 py-4 cursor-pointer  bg-[#181818] text-white rounded-lg shadow-md dark:bg-gray-800"
//   >
//     <div className="flex items-center justify-between">
//       <img className="w-8" src={match.competition.emblem} alt="" />
//       <span className="font-light dark:text-gray-400">
//         {match.competition.name}
//       </span>
//       <a
//         className={`px-3 py-1  text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer ${
//           match.status === "IN_PLAY" ? "bg-red-500" : ""
//         }`}
//         tabindex="0"
//         role="button"
//       >
//         {match.status === "IN_PLAY" ? "Live" : match.status}
//       </a>
//     </div>

//     <div className="mt-5 flex flex-col gap-1 justify-between items-start">
//       <div className="flex w-full items-center justify-between gap-2">
//         <div className="flex items-center justify-center gap-2">
//           <img className="w-8" src={match.homeTeam.crest} alt="" />
//           <a
//             href="#"
//             className="text- font-bold dark:text-white hover:text-orange-500"
//             tabindex="0"
//             role="link"
//           >
//             {match.homeTeam.shortName}
//           </a>
//         </div>
//         <p className="text-lg font-semibold">
//           {match.score.fullTime.home === null
//             ? ""
//             : `${match.score.fullTime.home}`}
//         </p>
//       </div>
//       <div className="text-lg font-semibold flex justify-end w-full">
//         {match.status === "TIMED"
//           ? match.utcDate
//               .split("T")[1]
//               .split(":")
//               .slice(0, -1)
//               .join(" : ")
//           : ""}
//       </div>
//       <div className="flex w-full items-center justify-between gap-2">
//         <div className="flex items-center justify-center gap-2">
//           <img className="w-8" src={match.awayTeam.crest} alt="" />
//           <a
//             href="#"
//             className="text- font-bold dark:text-white hover:text-orange-500"
//             tabindex="0"
//             role="link"
//           >
//             {match.awayTeam.shortName}
//           </a>
//         </div>
//         <p className="text-lg font-semibold">
//           {match.score.fullTime.away === null
//             ? ""
//             : `${match.score.fullTime.away}`}
//         </p>
//       </div>
//     </div>

//     <div className="flex items-center justify-between mt-4">
//       <div className="space-y-4 w-full "></div>
//     </div>
//   </Link>
// ))}
//       </div>
//     );
//   } else {
//     return (
//       <div className="w-[95%] md:w-1/2 h-fit px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800" onClick={() => console.log(matches.homeTeam.crest)}>
//         <div className="mt-5 flex flex-col gap-1 justify-between items-start">
//           <div className="flex w-full items-center justify-between gap-2">
//             <div className="flex items-center justify-center gap-2">
//               <img className="w-8" src={matches.homeTeam.crest} alt="" />
//               <a
//                 href="#"
//                 className="text-lg font-bold dark:text-white hover:text-orange-500"
//                 tabindex="0"
//                 role="link"
//               >
//                 {matches.homeTeam.shortName}
//               </a>
//             </div>
//             <p className="text-lg font-semibold">
//               {matches.score.fullTime.home === null
//                 ? ""
//                 : `${matches.score.fullTime.home}`}
//             </p>
//           </div>
//           <div className="text-lg font-semibold flex justify-end w-full">
//             {matches.status === "TIMED"
//               ? matches.utcDate.split("T")[1].split(":").slice(0, -1).join(" : ")
//               : ""}
//           </div>
//           <div className="flex w-full items-center justify-between gap-2">
//             <div className="flex items-center justify-center gap-2">
//               <img className="w-8" src={matches.awayTeam.crest} alt="" />
//               <a
//                 href="#"
//                 className="text- font-bold dark:text-white hover:text-orange-500"
//                 tabindex="0"
//                 role="link"
//               >
//                 {matches.awayTeam.shortName}
//               </a>
//             </div>
//             <p className="text-lg font-semibold">
//               {matches.score.fullTime.away === null
//                 ? ""
//                 : `${matches.score.fullTime.away}`}
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// =======================================

function MatchCard({ matches = [], isLoading = false }) {
  if (isLoading) {
    // Show spinner while loading
    return (
      <div className="mx-auto flex justify-center items-center h-screen relative p-9 z-0">
        <Spinner
          color="failure"
          aria-label="Failure spinner example"
          size="xl"
        />
      </div>
    );
  }
  // Check if matches is valid and an array
  else if (Array.isArray(matches) && matches.length > 0) {
    return (
      <div
        id="cards"
        className="flex flex-col justify-center gap-5 w-full mt-5"
      >
        {matches.map((match) => (
          <Link
            key={match.id}
            to={`/match/${match.id}`}
            onClick={() => console.log(match.id)}
            className="w-[95%] md:w-1/2 mx-auto h-fit px-8 py-4 cursor-pointer  bg-[#181818] text-white rounded-lg shadow-md dark:bg-gray-800"
          >
                        <p className="text-center text-lg font-semibold bg-white/30 text-black w-fit mx-auto px-2 rounded-md">
                  {match.status === "SCHEDULED" || match.status === "TIMED"  ? match.utcDate.split("T")[0] : ""}
                </p>

            <div className="flex items-center justify-between">
              <img
                className="w-12 bg-white shadow-lg rounded p-1"
                src={match.competition.emblem}
                alt=""
              />
              <span className="font-light dark:text-gray-400">
                {match.competition.name}
              </span>
              <a
                className={`px-3 py-1  text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer ${
                  match.status === "IN_PLAY" ? "bg-red-500" : ""
                }`}
                tabindex="0"
                role="button"
              >
                {match.status === "IN_PLAY" ? "Live" : match.status}
              </a>
            </div>

            <div className="mt-5 flex flex-col gap-1 justify-between items-start">
              <div className="flex w-full items-center justify-between gap-2">
                <div className="flex items-center justify-center gap-2">
                  <img className="w-8" src={match.homeTeam.crest} alt="" />
                  <a
                    href="#"
                    className="text- font-bold dark:text-white hover:text-orange-500"
                    tabindex="0"
                    role="link"
                  >
                    {match.homeTeam.shortName}
                  </a>
                </div>
                <p className="text-lg font-semibold">
                  {match.score.fullTime.home === null
                    ? ""
                    : `${match.score.fullTime.home}`}
                </p>
              </div>
              <div className="text-lg font-semibold flex justify-end w-full">
                <p className="block">
                  {" "}
                  {match.status === "TIMED"
                    ? match.utcDate
                        .split("T")[1]
                        .split(":")
                        .slice(0, -1)
                        .join(" : ")
                    : ""}
                </p>
              </div>
              <div className="flex w-full items-center justify-between gap-2">
                <div className="flex items-center justify-center gap-2">
                  <img className="w-8" src={match.awayTeam.crest} alt="" />
                  <a
                    href="#"
                    className="text- font-bold dark:text-white hover:text-orange-500"
                    tabindex="0"
                    role="link"
                  >
                    {match.awayTeam.shortName}
                  </a>
                </div>
                <p className="text-lg font-semibold">
                  {match.score.fullTime.away === null
                    ? ""
                    : `${match.score.fullTime.away}`}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="space-y-4 w-full "></div>
            </div>
          </Link>
        ))}{" "}
      </div>
    );
  } else if (matches && matches.homeTeam) {
    // Handle single match object case
    return (
      <>
        <div className="text-white flex gap-3 items-center">
          <img
            className="w-10 p-1 bg-white rounded-md"
            src={matches.competition.emblem}
          ></img>
          {matches.competition.name}
        </div>
        <p className="text-center text-lg font-semibold bg-white/30 text-white w-fit mx-auto px-2 rounded-md">
                  {matches.status === "SCHEDULED" || matches.status === "TIMED"  ? matches.utcDate.split("T")[0] : ""}
                </p>
        <div className="w-[95%] md:w-1/2 h-fit px-8 py-4 bg-[#181818] text-white rounded-lg shadow-xl dark:bg-gray-800">
          <div className="text-center">
            <a
              className={`px-3 py-1  text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer ${
                matches.status === "IN_PLAY" ? "bg-red-500" : ""
              }`}
              tabindex="0"
              role="button"
            >
              {matches.status === "IN_PLAY" ? "Live" : matches.status}
            </a>
          </div>
          <div className="mt-5 flex gap-1 justify-between items-center">
            <div className="min-w-[35%] flex items-center justify-center gap-2">
              <Link
                to={`/team/${matches.homeTeam.id}`}
                onClick={() => console.log(matches.homeTeam.id)}
                className="flex flex-col items-center justify-center gap-2"
              >
                <img className="w-24" src={matches.homeTeam.crest} alt="" />
                <a
                  href="#"
                  className="text-lg font-bold dark:text-white hover:text-orange-500"
                  tabindex="0"
                  role="link"
                >
                  {matches.homeTeam.shortName}
                </a>
              </Link>
            </div>
            <div className="text-lg font-semibold flex flex-col items-center justify-between h-full w-full">
              <div>
                {matches.status === "TIMED" || matches.status === "SCHEDULED"
                  ? matches.utcDate
                      .split("T")[1]
                      .split(":")
                      .slice(0, -1)
                      .join(" : ")
                  : `${matches.score.fullTime.home} - ${matches.score.fullTime.away}`}
              </div>
            </div>
            <div className="flex min-w-[35%] items-center justify-center gap-2">
              <Link
                to={`/team/${matches.awayTeam.id}`}
                onClick={() => console.log(matches.awayTeam.id)}
                className="flex flex-col items-center justify-center gap-2"
              >
                <img className="w-24" src={matches.awayTeam.crest} alt="" />
                <a
                  href="#"
                  className="text-lg font-bold dark:text-white hover:text-orange-500"
                  tabindex="0"
                  role="link"
                >
                  {matches.awayTeam.shortName}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  } else if (matches.length == 0) {
    // Fallback UI if matches is invalid or empty
    return (
      <p className="text-center text-red-500">there is no mathces available </p>
    );
  } else {
    return (
      <div className="mx-auto flex justify-center items-center h-screen relative p-9 z-0">
        {/* <Spinner
          color="failure"
          aria-label="Failure spinner example"
          size="xl"
        /> */}
        Error occured
      </div>
    );
  }
}

// =======================================

export default MatchCard;

// {
/* <div className="w-1/2 h-fit px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
<div className="flex items-center justify-between">
    <span className="text-sm font-light text-gray-600 dark:text-gray-400">match date</span>
    <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabindex="0" role="button">Live</a>
</div>

<div className="mt-2 flex justify-between items-center">
  <div>
    <img src="" alt="" />
    <a href="#" className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" tabindex="0" role="link">first team</a>
  </div>
  <div>
    1-1
  </div>
  <div>
    <img src="" alt="" />
    <a href="#" className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-orange-500" tabindex="0" role="link">first team</a>
  </div>
</div>

<div className="flex items-center justify-between mt-4">
<div className="space-y-4 w-full ">
{/* <details className="group [&_summary::-webkit-details-marker]:hidden">
<summary
  className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
>
  <h2 className="font-medium">Details</h2>

  <svg
    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
  </svg>
</summary>

<p className="mt-4 px-4 leading-relaxed text-gray-700">

</p>
</details> */
// }

// </div>
// </div>
// </div>   */}
