import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
import { Link } from "react-router-dom";
import Nav from "../Nav";

function Compitition() {
  let [competitions, setCompetitions] = useState([]);
  let [loading, setLoading] = useState(true);
  // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const proxyUrl = "https://livescores-mo.netlify.app/";
  const url =
    `${proxyUrl}https://api.football-data.org/v4/competitions`;
  useEffect(() => {
    fetch(`${url}`, {
      method: "GET",
      headers: { "X-Auth-Token": "8955705d5dba4ec8b3d12f78738ae026" },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        setLoading(false);
        return res.json();
      })
      .then((data) => {
        console.log(data.competitions);
        setCompetitions(data.competitions);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);
  if (competitions != 0) {
    return (
      <>
        <div>
          <Nav />
        </div>
        <div className="flex justify-between bg-main border-r-2 border-gray-400">
          <div className="px-4 py-6 mt-20 w-[90%] mx-auto">
            <span className="grid h-10 w-full place-content-center rounded-lg text-2xl text-white">
              Compititions
            </span>

            <ul className="mt-6 space-y-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 w-full mx-auto">
              {competitions.map((competition) => (
                <li className="h-[140px] !m-0" key={competition.id}>
                  <Link
                    to={`/compitition/${competition.id}/${competition.currentSeason.currentMatchday}`}
                    onClick={() =>
                      console.log(competition.currentSeason.currentMatchday)
                    }
                    className="h-[140px] flex flex-col gap-5 items-center justify-around rounded-lg bg-[#181818] text-white px-4 py-2 text-[8px] md:text-sm font-medium transition-all duration-200 hover:bg-[#e1e1e1] hover:text-[#080808]"
                  >
                    <img className="w-16" src={competition.emblem} alt="img" />
                    <div>{competition.name}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="mx-auto max-w-[1000px] h-screen flex items-center justify-center p-9 relative z-10">
        <Spinner
          color="failure"
          aria-label="Failure spinner example"
          size="xl"
        />
      </div>
    );
  }
}

export default Compitition;
