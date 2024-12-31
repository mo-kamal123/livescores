import { Spinner } from 'flowbite-react'
import React from 'react'

function CompitTable({standings}) {
console.log(standings);
  if(standings.length === 1) 
  return (
    <div className="flex flex-col gap-5 mt-10 w-full px-2 md:w-[90%] mx-auto">
    <div className="rounded-lg w-full border border-[#222]">
      <table className="min-w-full divide-y-2 divide-[#222] bg-black text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap pl-1 py-3 w-5 font-medium text-white">
              #
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-start text-white">
              TEAM
            </th>
            <th className="whitespace-nowrap px-4 py-2 w-5 font-medium text-white">
              P
            </th>
            <th className="whitespace-nowrap hidden md:table-cell px-4 py-2 w-5 font-medium text-white">
              W
            </th>
            <th className="whitespace-nowrap hidden md:table-cell px-4 py-2 w-5 font-medium text-white">
              D
            </th>
            <th className="whitespace-nowrap hidden md:table-cell px-4 py-2 w-5 font-medium text-white">
              L
            </th>
            <th className="whitespace-nowrap hidden md:table-cell px-4 py-2 w-5 font-medium text-white">
              F
            </th>
            <th className="whitespace-nowrap hidden md:table-cell px-4 py-2 w-5 font-medium text-white">
              A
            </th>
            <th className="whitespace-nowrap px-4 py-2 w-5 font-medium text-white">
              GD
            </th>
            <th className="whitespace-nowrap pl-4 md:px-4 py-2 w-5 font-medium text-white">
              PTS
            </th>
          </tr>
        </thead>
        {standings[0].table.map((team) => (
          <>
            <tbody key={team.id} className="divide-y divide-[#222]">
              <tr>
                <td className="whitespace-nowrap pl-1 md:px-4 py-2 font-medium text-white">
                  {team.position}
                </td>
                <td className="flex items-center gap-2 whitespace-nowrap px-4 py-2 font-medium text-white">
                <img src={team.team.crest} className="w-4 md:w-8" alt="" />
                  <p className="text-xs">{team.team.name}</p>
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  {team.playedGames}
                </td>
                <td className="whitespace-nowrap hidden  md:table-cell px-4 py-2 font-medium text-white">
                  {team.won}
                </td>
                <td className="whitespace-nowrap hidden  md:table-cell px-4 py-2 font-medium text-white">
                  {team.draw}
                </td>
                <td className="whitespace-nowrap hidden  md:table-cell px-4 py-2 font-medium text-white">
                  {team.lost}
                </td>
                <td className="whitespace-nowrap hidden  md:table-cell px-4 py-2 font-medium text-white">
                  {team.goalsFor}
                </td>
                <td className="whitespace-nowrap hidden md:table-cell px-4 py-2 font-medium text-white">
                  {team.goalsAgainst}
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  {team.goalDifference}
                </td>
                <td className="whitespace-nowrap pl-4 md:px-4 py-2 font-semibold text-white">
                  {team.points}
                </td>
              </tr>
            </tbody>
          </>
        ))}
      </table>
    </div>
  </div>
    )
  if(standings.length > 1) 
  return (
    <>
    {standings.map((group) => (
      <div className="flex flex-col gap-5 my-10 w-full px-2 md:w-[90%] mx-auto">
            <p>{group.group}</p>
          <div className="rounded-lg w-full border border-[#222]">
            <table className="min-w-full divide-y-2 divide-[#222] bg-black text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="whitespace-nowrap pl-1 py-3 w-5 font-medium text-white">
                    #
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-start text-white">
                    TEAM
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 w-5 font-medium text-white">
                    P
                  </th>
                  <th className="whitespace-nowrap hidden md:table-cell px-4 py-2 w-5 font-medium text-white">
                    W
                  </th>
                  <th className="whitespace-nowrap hidden md:table-cell px-4 py-2 w-5 font-medium text-white">
                    D
                  </th>
                  <th className="whitespace-nowrap hidden md:table-cell px-4 py-2 w-5 font-medium text-white">
                    L
                  </th>
                  <th className="whitespace-nowrap hidden md:table-cell px-4 py-2 w-5 font-medium text-white">
                    F
                  </th>
                  <th className="whitespace-nowrap hidden md:table-cell px-4 py-2 w-5 font-medium text-white">
                    A
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 w-5 font-medium text-white">
                    GD
                  </th>
                  <th className="whitespace-nowrap pl-4 md:px-4 py-2 w-5 font-medium text-white">
                    PTS
                  </th>
                </tr>
              </thead>
              {group.table.map((team) => (
                <>
                  <tbody key={team.id} className="divide-y divide-[#222]">
                    <tr>
                      <td className="whitespace-nowrap pl-1 md:px-4 py-2 font-medium text-white">
                        {team.position}
                      </td>
                      <td className="flex items-center gap-2 whitespace-nowrap px-4 py-2 font-medium text-white">
                      <img src={team.team.crest} className="w-4 md:w-8" alt="" />
                        <p className="text-xs">{team.team.name}</p>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-white">
                        {team.playedGames}
                      </td>
                      <td className="whitespace-nowrap hidden  md:table-cell px-4 py-2 font-medium text-white">
                        {team.won}
                      </td>
                      <td className="whitespace-nowrap hidden  md:table-cell px-4 py-2 font-medium text-white">
                        {team.draw}
                      </td>
                      <td className="whitespace-nowrap hidden  md:table-cell px-4 py-2 font-medium text-white">
                        {team.lost}
                      </td>
                      <td className="whitespace-nowrap hidden  md:table-cell px-4 py-2 font-medium text-white">
                        {team.goalsFor}
                      </td>
                      <td className="whitespace-nowrap hidden md:table-cell px-4 py-2 font-medium text-white">
                        {team.goalsAgainst}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-white">
                        {team.goalDifference}
                      </td>
                      <td className="whitespace-nowrap pl-4 md:px-4 py-2 font-semibold text-white">
                        {team.points}
                      </td>
                    </tr>
                  </tbody>
                </>
              ))}
            </table>
          </div>
        </div>
    ))}
    </>
)
return(
  <Spinner />
)
}

export default CompitTable