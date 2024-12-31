import { Link } from "react-router-dom";
import Nav from "../Nav";
import manUnited from "../../imgs/man-united.png";
import manCity from "../../imgs/man-city.svg";
import liverbool from "../../imgs/Liverpool.svg";
import Chelsea from "../../imgs/chelsea.svg";
import Arsenal from "../../imgs/arsenal-fc.svg";
import Barcelona from "../../imgs/barcelona.svg";
import RealMadrid from "../../imgs/real-madrid.svg";
import AtléticoMadrid from "../../imgs/atletico-madrid.svg";
import Napoli from "../../imgs/SSC Napoli.svg";
import InterMilan from "../../imgs/inter-milan.svg";
import ACMilan from "../../imgs/ac-milan.svg";

function Teams() {
  const teams = [
    {
      name: "Man City",
      logo: manCity,
      id: 65,
    },
    {
      name: "Man United",
      logo: manUnited,
      id: 66,
    },
    {
      name: "Liverpool",
      logo: liverbool,
      id: 64,
    },
    {
      name: "Chelsea",
      logo: Chelsea,
      id: 61,
    },
    {
      name: "Arsenal",
      logo: Arsenal,
      id: 57,
    },
    {
      name: "Barcelona",
      logo: Barcelona,
      id: 81,
    },
    {
      name: "Real Madrid",
      logo: RealMadrid,
      id: 86,
    },
    {
      name: "Atlético de Madrid",
      logo: AtléticoMadrid,
      id: 78,
    },
    {
      name: "Napoli",
      logo: Napoli,
      id: 113,
    },
    {
      name: "Inter Milan",
      logo: InterMilan,
      id: 108,
    },
    {
      name: "AC Milan",
      logo: ACMilan,
      id: 98,
    },
  ];
  return (
    <>
      <Nav />
      <div>
        <div className="flex justify-between bg-main border-r-2 border-gray-400">
          <div className="px-4 py-6 mt-20 w-[90%] mx-auto">
            <span className="grid h-10 w-full place-content-center rounded-lg text-2xl text-white">
              Teams
            </span>

            <ul className="mt-6 space-y-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 w-full mx-auto">
              {teams.map((team) => (
                <li className="h-[140px] !m-0" key={team.id}>
                  <Link
                    to={`/team/${team.id}`}
                    className="h-[140px] flex flex-col gap-5 items-center justify-around rounded-lg bg-[#181818] text-white px-4 py-2 text-[8px] md:text-sm font-medium transition-all duration-200 hover:bg-[#e1e1e1] hover:text-[#080808]"
                  >
                    <img className="w-20" src={team.logo} alt="img" />
                    <div>{team.name}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>{" "}
      </div>
    </>
  );
}

export default Teams;
