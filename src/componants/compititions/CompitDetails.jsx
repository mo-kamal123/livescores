import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MatchCard from "../match/MatchCard";
import Nav from "../Nav";
import CompitTable from "./CompitTable";
import CompitCard from "./CompitCard";
import { Spinner } from "flowbite-react";

function CompitDetails() {
  const { compitId, round } = useParams();
  const [currRound, setCurrRound] = useState(Number(round));
  const [compit, setCompit] = useState(null); // Initialize as null
  const [standings, setStandings] = useState(null); // Initialize as null
  const [matches, setMatches] = useState([]);
  const [active, setActive] = useState("table");
  const compitUrl = `http://api.football-data.org/v4/competitions/${compitId}/standings`;
  const roundUrl = `http://api.football-data.org/v4/competitions/${compitId}/matches?matchday=${currRound}`;
  // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const proxyUrl = "https://thingproxy.freeboard.io/fetch/";

  useEffect(() => {
    fetch(`${proxyUrl}${compitUrl}`, {
      method: "GET",
      headers: { "X-Auth-Token": "8955705d5dba4ec8b3d12f78738ae026" },
    })
      .then((res) => res.json())
      .then((data) => {
        setCompit(data); // Update compit with fetched data
        setStandings(data.standings); // Update compit with fetched data
        console.log(data);
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const fetchByRound = () => {
    fetch(`${proxyUrl}${roundUrl}`, {
      method: "GET",
      headers: { "X-Auth-Token": "8955705d5dba4ec8b3d12f78738ae026" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMatches(data.matches);
        console.log(matches);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    fetchByRound();
  }, [currRound]);

  // Render conditionally to avoid errors
  if (!compit || !compit.competition) {
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

  return (
    <>
      <Nav />
      <CompitCard compit={compit} standings={standings} />
      <div className="flex items-center justify-center gap-5">
        <button
          type="button"
          class={` mt-10 border-b-[2px] ${
            active === "table"
              ? "bg-white text-black"
              : "hover:bg-white hover:text-black"
          } border-gray-300 transition-all duration-300 focus:outline-none font-medium text-sm px-5 py-2.5 text-center inline-flex items-center`}
          onClick={() => setActive("table")}
        >
          Standings
        </button>{" "}
        <button
          type="button"
          disabled={active === "matches"}
          class={` mt-10 border-b-[2px] ${
            active === "matches"
              ? "bg-white text-black"
              : "hover:bg-white hover:text-black"
          } border-gray-300 transition-all duration-300 focus:outline-none font-medium text-sm px-5 py-2.5 text-center inline-flex items-center`}
          onClick={() => {
            setActive("matches");
            fetchByRound();
          }}
        >
          Matches
        </button>{" "}
      </div>
      <div className="relative">
        <div
          className={`absolute left-1/2 -translate-x-1/2 w-full sm:w-3/4 transition-all duration-300 ${
            active === "matches" ? "opacity-0" : "opacity-100"
          }`}
        >
          <CompitTable standings={standings} />
        </div>
        <div
          className={`absolute w-full top-0 transition-all duration-300 ${
            active === "table" ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex justify-center items-center gap-10">
            <button
              onClick={() => {
                setCurrRound(currRound - 1);
                // fetchByRound()
              }}
              className="hover:bg-white hover:text-black h-10 px-2 transition-all duration-300"
            >
              Prev
            </button>
            <p className="text-center my-5 text-2xl">Round: {currRound}</p>
            <button
              onClick={() => {
                setCurrRound(currRound + 1);
                // fetchByRound()
              }}
              className="hover:bg-white hover:text-black h-10 px-2 transition-all duration-300"
            >
              Next
            </button>
          </div>
          <MatchCard matches={matches} />
        </div>
      </div>
    </>
  );
}

export default CompitDetails;
