import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MatchCard from "./MatchCard";
import Nav from "../Nav";

function MatchDetails() {
  const { matchId } = useParams();
  const [matches, setMatches] = useState([]);
  const [active, setActive] = useState("info");
  const url = `https://api.football-data.org/v4/matches/${matchId}`;
  const proxyUrl = "https://thingproxy.freeboard.io/fetch/";
  // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  useEffect(() => {
    fetch(`${proxyUrl}${url}`, {
      method: "GET",
      headers: { "X-Auth-Token": "8955705d5dba4ec8b3d12f78738ae026" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMatches(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    // <div classNameName='text-white'>MatchDetails {matchId}</div>
    <>
      <Nav />
      <div className="flex flex-col gap-5 items-center justify-center w-full mt-20">
        <MatchCard matches={matches} />
        {/* <div>
          <div className="block">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex gap-6" aria-label="Tabs">
                <button
                    onClick={() => console.log("hi")}
                  className={`shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium ${active === "Info" ? "text-orange-500" : "text-gray-400"} text-gray-400 hover:text-orange-500`}
                >
                  Info
                </button>

                <a
                  href="#"
                  className={`shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium ${active === "Line-ups" ? "text-orange-500" : "text-gray-400"} text-gray-400 hover:text-orange-500`}
                >
                  Line-ups
                </a>

                <a
                  href="#"
                  className={`shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium ${active === "hi" ? "text-orange-500" : "text-gray-400"} text-gray-400 hover:text-orange-500`}
                >
                  Archive
                </a>

                <a
                  href="#"
                  className={`shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium ${active === "hi" ? "text-orange-500" : "text-gray-400"} text-gray-400 hover:text-orange-500`}
                  aria-current="page"
                >
                  Notifications
                </a>
              </nav>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default MatchDetails;
