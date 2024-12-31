
function TeamCard({team}) {
  return (
    <div className="w-fit md:w-fit h-fit flex justify-between items-center px-8 py-4 bg-[#181818] text-white text-sm md:text-xl rounded-lg shadow-xl mx-auto mt-28">
      <div className="flex flex-col items-center w-fit justify-center gap-2">
        <img
          className="w-24 p-2"
          src={team.crest}
          alt=""
        />
        <a
          href="#"
          className="text-sm md:text-lg font-bold dark:text-white"
          tabIndex="0"
          role="link"
        >
          {team.name}
        </a>
      </div>
    </div>
      )
}

export default TeamCard