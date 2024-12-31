import React, { useEffect, useRef, useState } from "react";
import MatchCard from "./MatchCard";
import Nav from "../Nav";

function TodaysMatches() {
  let [matches, setMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let [currdate, setCurrDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const dateRef = useRef();
  const url = `https://api.football-data.org/v4/matches`;
  // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const proxyUrl = "https://thingproxy.freeboard.io/fetch/";

  const fetchMatches = (selectedDate) => {
    setIsLoading(true);
    let date = new Date(selectedDate);
    let today = date.toISOString().split("T")[0];
    date.setDate(date.getDate() + 1); // Increment the date by 1
    let nextday = date.toISOString().split("T")[0]; // Formats as YYYY-MM-DD
    let params = `?dateFrom=${today}&dateTo=${nextday}`;

    fetch(`${proxyUrl}${url}${params}`, {
      method: "GET",
      headers: { "X-Auth-Token": "8955705d5dba4ec8b3d12f78738ae026" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMatches(data.matches);
        setIsLoading(false);
      });
  };
  // let x = formatted.join('-')
  useEffect(() => {
    fetchMatches(currdate);
  }, []);
  return (
    <>
      <Nav />
      <div className="mt-24">
        <div className="fixed z-50 md:top-52 left-0 top-96">
          <form
            onSubmit={(e) => e.preventDefault()}
            id="FilterForm"
            className="relative p-4 left-0 flex flex-col gap-5 rounded-r-md bg-gray-900 transition-all duration-300 show md:!left-0"
          >
            <p>Show Mathces In date:</p>
            <input
              ref={dateRef}
              className="text-black rounded-md"
              type="date"
              name=""
            />
            <button
              className="bg-white px-2 py-1 w-1/2 text-black mx-auto rounded-md"
              onClick={() => {
                let choosedDay = dateRef.current.value;
                if (choosedDay != "") {                  
                  setCurrDate(choosedDay);
                  setMatches([]);
                  fetchMatches(choosedDay);
                }
              }}
            >
              show
            </button>
          </form>
          <button
            className="bg-white rounded-r md:hidden"
            onClick={() =>
              document.getElementById("FilterForm").classList.toggle("show")
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
            </svg>{" "}
          </button>
        </div>
        <p className="text-center text-2xl">Date : {currdate}</p>
        {/* <p>{matches.resultSet.count}</p> */}
        <MatchCard matches={matches} isLoading={isLoading} />
      </div>
    </>
  );
}

export default TodaysMatches;
