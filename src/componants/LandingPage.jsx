import Nav from "./Nav";
import intro from "../imgs/intro.mp4";
import introSm from "../imgs/intro-sm.mp4"
import { Link } from "react-router-dom";
// bg-[#110f09] -z-50 relative
function LandingPage() {
  return (
    <div className="">
      <section className="relative h-svh overflow-hidden">
        <div className="bg-black/30 w-full h-screen absolute top-0 left-0 z-0"></div>
        <Nav />
        {/* <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div> */}

        <div className="relative h-svh  flex justify-between items-center mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="w-full  justify-center text-center flex items-end h-full ltr:sm:text-left rtl:sm:text-right">
            {/* <h1 className="text-3xl text-white sm:text-5xl">
              Let find your Fav Team
              <strong className="block mt-1 text-[#ff6b00]">
                Score.
              </strong>
            </h1> */}
            <div className="mt-8 flex justify-end flex-wrap gap-4 text-center">
              <Link
                to={'/Todaymatches'}
                href="#"
                className="block w-full rounded bg-white px-12 text-black py-3 transition-all duration-300 text-sm font-medium  shadow  focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Matches
              </Link>

              <Link
                to={'/Compititions'}
                href="#"
                className="block w-full rounded bg-white px-12 text-black py-3 transition-all duration-300 text-sm font-medium  shadow  focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Compititions
              </Link>
            </div>
          </div>
          <div className="video">
            <video className="hidden md:block rounded-lg absolute -top-20 left-0 w-full -z-10 transition-all duration-300" width="520" height="440" autoPlay muted loop playsInline>
              {" "}
              <source src={intro} type="video/mp4" /> Your browser does not
              support the video tag.{" "}
            </video>{" "}
            <video className="md:hidden h-svh bg-[#110f09] rounded-lg absolute -top-10 left-0 w-full -z-10 transition-all duration-300" width="520" height="440" autoPlay muted loop playsInline>
              {" "}
              <source src={introSm} type="video/mp4" /> Your browser does not
              support the video tag.{" "}
            </video>{" "}
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;


{/* <div>
<section className="relative bg-[url(https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat">
  <div className="bg-black/60 w-full h-screen absolute top-0 left-0 z-0"></div>
  <Nav />
  <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

  <div className="relative flex justify-between items-center mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
    <div className="max-w-xl text-center flex flex-col items-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl text-white sm:text-5xl">
        Let find your Fav Team
        <strong className="block mt-1 text-[#ff6b00]">
          Score.
        </strong>
      </h1>
      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <Link
          to={'/Todaymatches'}
          href="#"
          className="block w-full rounded bg-black/90 px-12 py-3 transition-all duration-300 text-sm font-medium text-white shadow hover:bg-white hover:text-black focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Matches
        </Link>

        <Link
          to={'/Compititions'}
          href="#"
          className="block w-full rounded bg-black/90 px-12 py-3 transition-all duration-300 text-sm font-medium text-white shadow hover:bg-white hover:text-black focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Compititions
        </Link>
      </div>
    </div>
    <div className="video  rounded-lg">
      <video className="rounded-lg border-0 border-black shadow-2xl shadow-black animate-fly hover:scale-105 hover:border-[30px]  hover:border-black transition-all duration-300" width="520" height="440" autoPlay muted loop playsInline>
        {" "}
        <source src={intro} type="video/mp4" /> Your browser does not
        support the video tag.{" "}
      </video>{" "}
    </div>
  </div>
</section>
</div> */}