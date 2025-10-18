
const HomeSliderData = ({heroCount, setHeroCount, homeSliderData, className}) => {
  return (
    <div className={className}>
        <div className="flex flex-col gap-1">
            <p className="text-4xl md:text-6xl text-[#303030]">{homeSliderData.title}</p>
            <p className="text-sm pl-1 text-[#303030]">{homeSliderData.desc}</p>
        </div>
        <div>
            <ul className="flex gap-1 pt-4">
                <li onClick={() => setHeroCount(0)} className={heroCount === 0?"bg-[#00ADB5] w-[50px] h-[5px] rounded-full duration-500":"bg-[#666666] w-[15px] h-[5px] rounded-full cursor-pointer duration-500"}></li>
                <li onClick={() => setHeroCount(1)} className={heroCount === 1?"bg-[#00ADB5] w-[50px] h-[5px] rounded-full duration-500":"bg-[#666666] w-[15px] h-[5px] rounded-full cursor-pointer duration-500"}></li>
                <li onClick={() => setHeroCount(2)} className={heroCount === 2?"bg-[#00ADB5] w-[50px] h-[5px] rounded-full duration-500":"bg-[#666666] w-[15px] h-[5px] rounded-full cursor-pointer duration-500"}></li>
            </ul>
        </div>
    </div>
  )
}

export default HomeSliderData