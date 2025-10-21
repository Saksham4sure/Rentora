import { useEffect, useState } from "react";
import { homeSliderData } from "../Context";
import HomeSlider from "../Components/HomeSlider";
import HomeSliderData from "../Components/HomeSliderData";
import { Link } from "react-router";
import resortPage from '../assets/images/resort-page.jpg'
import apartmentPage from '../assets/images/apartment-page.jpg'
import lakeHousePage from '../assets/images/lakehouse-page.jpg'


const Home = () => {
  const [heroCount, setHeroCount] = useState(0);
  // const totalSlide = homeSliderData.length;

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
            className="absolute flex object-cover h-full w-full left-0 rounded-2xl"
            heroCount={heroCount}
          />
          <HomeSliderData
            className="absolute top-[20%] left-[5%] "
            homeSliderData={homeSliderData[heroCount]}
            heroCount={heroCount}
            setHeroCount={setHeroCount}
          />
          <button
            className="z-10 absolute right-0 h-full w-[20%] flex items-center justify-end md:px-10 "
            onClick={nextSlide}
          >
            <div className="w-[50%] h-[12%] backdrop-blur-sm justify-center items-center rounded-full overflow-hidden hidden md:flex">
              <i class="ri-arrow-right-long-line text-3xl text-[#949494]"></i>
            </div>
          </button>
          <button
            className="z-10 absolute left-0 h-full w-[20%] flex items-center justify-start md:px-10"
            onClick={previousSlide}
          >
            <div className="w-[50%] h-[15%] backdrop-blur-sm justify-center items-center rounded-full overflow-hidden hidden md:flex">
              <i class="ri-arrow-left-long-line text-3xl text-[#949494] "></i>
            </div>
          </button>
          <Link
            className="bg-[#222222] text-[#D0D0D0] z-50 absolute h-[50px] w-[50px] text-xs md:text-sm md:h-[70px] md:w-[70px] flex items-center justify-center right-4 bottom-10 rounded-full text-center"
            to="/booking"
          >
            Book Now!!
          </Link>
        </div>
      </div>

      <div className="w-screen flex flex-col px-10 md:px-20">
        <div>
          <h1 className="text-4xl md:text-7xl freestyle cursor-default">Rentora.</h1>
        </div>
        <div className="py-5 flex flex-col md:flex-row w-full gap-6 md:gap-10">
          <div className="md:w-1/2 md:px-5">
            <p className="md:text-2xl">Discover Rentora, where every space is thoughtfully designed to blend comfort, elegance, and purpose.
              <br />
              <br />
              From the spacious sophistication of the Classic to the intimate allure of the Mini in Patras, and the peaceful charm of the Village Family Home in Vartholomio — each Rentora accommodation promises a memorable experience.
            </p>
          </div>
          <div className="md:w-1/2 md:px-5 flex flex-col gap-8 md:gap-32">
            <p className="md:text-2xl">
              Explore life with us. From cozy retreats to modern homes, discover spaces designed to make every stay feel effortless.
            </p>
            <div className="flex flex-wrap gap-4 px-2">
              <Link className="text-[#ffffff] bg-[#222222] h-[70px] w-[130px] flex items-center justify-center relative rounded-full overflow-hidden" to="/resort">
                <img className="object-cover absolute opacity-30" src={resortPage} />
                <h1 className="z-10 text-xl">Resort</h1>
              </Link>
              <Link className="text-[#ffffff] bg-[#222222] h-[70px] w-[145px] flex items-center justify-center relative rounded-full overflow-hidden" to="/apartment">
                <img className="object-cover absolute opacity-30" src={apartmentPage} />
                <h1 className="z-10 text-xl">Apartment</h1>
              </Link>
              <Link className="text-[#ffffff] bg-[#222222] h-[70px] w-[160px] flex items-center justify-center relative rounded-full overflow-hidden" to="/lake-house">
                <img className="object-cover absolute opacity-30" src={lakeHousePage} />
                <h1 className="z-10 text-xl">Lake House</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 md:py-20 px-10">
        <div>
          <h1 className="text-3xl md:text-5xl cursor-default">Offerings and Perks</h1>
        </div>
        <div>

        </div>
      </div>
    </>
  );
};

export default Home;
