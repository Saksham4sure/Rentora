import { useEffect, useState } from "react";
import { homeSliderData } from "../Context";
import HomeSlider from "../Components/HomeSlider";
import HomeSliderData from "../Components/HomeSliderData";
import { Link } from "react-router";

const Home = () => {
  const [heroCount, setHeroCount] = useState(0);
  const totalSlide = homeSliderData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setHeroCount((count) => (count === totalSlide - 1 ? 0 : count + 1));
  };

  const previousSlide = () => {
    setHeroCount((count) => (count === 0 ? totalSlide - 1 : count - 1));
  };

  return (
    <>
      <div className="flex w-screen flex-col px-4 md:px-10 py-20">
        <div className="flex flex-col md:flex-row w-full pt-20 pb-10 px-6 md:px-0">
          <h1 className="md:w-2/3 flex md:text-left text-5xl md:text-7xl leading-10 md:leading-15">
            Comfort meets <br /> convenience.
          </h1>
          <p className="md:w-1/3 flex md:text-right text-sm font-light items-end pt-2 md:pt-5 tracking-wide">
            With Rentora, finding your ideal stay is effortless — explore
            quality homes built around comfort, safety, and peace.
          </p>
        </div>
        <div className="relative h-[50vh] md:h-[100vh]">
          <HomeSlider
            className="absolute flex object-cover h-full w-full left-0 rounded-2xl opacity-90"
            heroCount={heroCount}
          />
          <HomeSliderData
            className="absolute top-[20%] left-[5%]"
            homeSliderData={homeSliderData[heroCount]}
            heroCount={heroCount}
            setHeroCount={setHeroCount}
          />
          <button
            className="z-10 absolute right-0 h-full w-[20%] flex items-center justify-end md:px-10"
            onClick={nextSlide}
          >
            <i class="ri-arrow-right-long-line text-3xl text-[#00ADB5] hidden md:flex"></i>
          </button>
          <button
            className="z-10 absolute left-0 h-full w-[20%] flex items-center justify-start md:px-10"
            onClick={previousSlide}
          >
            <i class="ri-arrow-left-long-line text-3xl text-[#00ADB5] hidden md:flex"></i>
          </button>
          <Link
            className="bg-[#222222] text-[#D0D0D0] z-50 absolute h-[50px] w-[50px] text-xs md:text-sm md:h-[70px] md:w-[70px] flex items-center justify-center right-4 bottom-10 rounded-full text-center"
            to="/booking"
          >
            Book Now!!
          </Link>
        </div>
      </div>

    </>
  );
};

export default Home;
