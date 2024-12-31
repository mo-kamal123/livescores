import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CompitCard from "../compititions/CompitCard";
import TeamCard from "./TeamCard";
import Nav from "../Nav";

function TeamDetails() {
  const { teamId } = useParams();
  const [team, setTeam] = useState([]);
  const [squad, setSquad] = useState([]);
  const [active, setActive] = useState("Info");
  // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const proxyUrl = "https://livescores-mo.netlify.app/";
  const url = `http://api.football-data.org/v4/teams/${teamId}`;
  console.log(teamId);
  useEffect(() => {
    fetch(`${proxyUrl}${url}`, {
      method: "GET",
      headers: { "X-Auth-Token": "8955705d5dba4ec8b3d12f78738ae026" },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setTeam(res);
        setSquad(res.squad);
        console.log(squad);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Nav />
      <TeamCard team={team} />
      <div>
        <div className="block w-full sm:w-fit mx-auto my-5">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex justify-around gap-6" aria-label="Tabs">
              <button
                onClick={() => setActive("Info")}
                className={`shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium ${
                  active === "Info" ? "text-orange-500" : "text-gray-400"
                } text-gray-400 hover:text-orange-500`}
              >
                Info
              </button>

              <button
                onClick={() => setActive("Squad")}
                className={`shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium ${
                  active === "Squad" ? "text-orange-500" : "text-gray-400"
                } text-gray-400 hover:text-orange-500`}
              >
                Squad
              </button>

              <button
                onClick={() => setActive("Compititions")}
                className={`shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium ${
                  active === "Compititions"
                    ? "text-orange-500"
                    : "text-gray-400"
                } text-gray-400 hover:text-orange-500`}
              >
                Compititions
              </button>
            </nav>
          </div>
        </div>
      </div>
      <div
        className={`opacity-0 ${
          active === "Info" ? "opacity-100" : "opacity-0"
        } transition-all duration-300`}
      >
        {active === "Info" && team.coach ? (
          <div className="info w-fit mx-auto flex flex-col gap-5 ">
            <p>coach : {team.coach.name}</p>
            <p>stadium : {team.venue}</p>
            <p>Location : {team.address}</p>
            <p>
              Wibsite :{" "}
              <a
                className="border-[1px] mx-1 px-2 py-1 hover:text-orange-500"
                href={team.website}
                target="_blank"
              >
                Visit
              </a>
            </p>
          </div>
        ) : (
          <p className="text-center text-red-500"> there are no info</p>
        )}
      </div>
      <div
        className={`w-full md:w-1/2 mx-auto opacity-0 ${
          active === "Squad" ? "opacity-100" : "opacity-0"
        } transition-all duration-300`}
      >
        {active === "Squad" && (
          <table className="min-w-full divide-y-2 divide-[#222] bg-black text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap pl-1 py-3 w-5 font-medium text-white">
                  #
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-start text-white">
                  Player
                </th>
                <th className="whitespace-nowrap px-4 py-2 w-5 font-medium text-white">
                  Position
                </th>
                <th className="whitespace-nowrap px-4 py-2 w-5 font-medium text-white">
                  Nationality
                </th>
              </tr>
            </thead>
            {squad.map((player, index) => (
              <>
                <tbody key={player.id} className=" px-3 divide-y divide-[#222]">
                  <tr className="text-[8px] md:text-base">
                    <td className="whitespace-nowrap pl-1 md:px-4 py-2 font-medium text-white">
                      {index + 1}
                    </td>
                    <td className="flex items-center gap-2 whitespace-nowrap px-4 py-2 font-medium text-white">
                      <p className="">{player.name}</p>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-white">
                      {player.position}
                    </td>
                    <td className="whitespace-nowrap  px-4 py-2 font-medium text-white">
                      {player.nationality}
                    </td>
                  </tr>
                </tbody>
              </>
            ))}
          </table>
        )}
      </div>
      <div
        className={`mx-auto mb-10 opacity-0 ${
          active === "Compititions" ? "opacity-100" : "opacity-0"
        } transition-all duration-300`}
      >
        {active === "Compititions" && (
          <>
            <div className="flex justify-between bg-main">
              <div className="px-4 py-6 w-full sm:w-[70%] mx-auto">
                <span className="grid h-10 w-full place-content-center rounded-lg text-2xl text-white">
                  Compititions
                </span>

                <ul className="mt-6 space-y-5 grid grid-cols-2 sm:grid-cols-3 gap-5 w-full mx-auto">
                  {team.runningCompetitions.map((competition) => (
                    <li className="h-[140px] !m-0" key={competition.id}>
                      <Link
                        to={`/compititions/`}
                        className="h-[140px] flex flex-col gap-5 items-center justify-around rounded-lg bg-[#181818] text-white px-4 py-2 text-[8px] md:text-sm font-medium transition-all duration-200 hover:bg-[#e1e1e1] hover:text-[#080808]"
                      >
                        <img
                          className="w-16"
                          src={competition.emblem}
                          alt="img"
                        />
                        <div>{competition.name}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default TeamDetails;
