import { Link } from "react-router"

const Booking = () => {
  return (
    <div className='relative overflow-x-hidden'>
        <div className="absolute w-[1px] h-[20vh] rounded-full bg-[#999999] top-0 left-1/2 -translate-y-1/2 pointer-events-none ml-2"></div>
        <div className='pt-[15vh] w-[100vw] flex flex-col items-center justify-center'>
            <div className='h-[20vh]'>
                <img className='object-cover h-[20vh]' src="/Rentora.jpg" />
            </div>
            <div className='pt-10'>
              <form className='flex flex-col items-center justify-center h-full px-10 py-5'>
                <h1 className='text-2xl font-light'>Bookings</h1>
                <p className="text-base w-[70vw] md:w-[40vw] text-center flex items-center justify-center">The reservation request is not considered completed, we will contact you for acceptance.</p>
                <input className='border-[1px] border-[#D6D6D6] px-4 py-3 w-[70vw] md:w-[550px] mt-8' type="text" placeholder='Full Name*'/>
                <input className='border-[1px] border-[#D6D6D6] px-4 py-3 w-[70vw] md:w-[550px] mt-4 text-[#8d8d8d]' type="date" placeholder='Check in'/>
                <input className='border-[1px] border-[#D6D6D6] px-4 py-3 w-[70vw] md:w-[550px] mt-4' type="text" placeholder='Phone*'/>
                <label className=" w-[70vw] md:w-[550px] px-4 border-[1px] border-[#D6D6D6] mt-4">
                    <select className='w-full py-3 outline-none'>
                    <option value="">Residence*</option>
                    <option value="">Apartment</option>
                    <option value="">Lake house</option>
                    <option value="">Resort</option>
                    </select>
                </label>
                <input className='border-[1px] border-[#D6D6D6] px-4 py-3 w-[70vw] md:w-[550px] mt-4' type="email" placeholder='Email'/>
                <input className='border-[1px] border-[#D6D6D6] px-4 py-3 w-[70vw] md:w-[550px] mt-4' type="number" min='0' placeholder='Visitors*'/>
                <input className='border-[1px] border-[#D6D6D6] px-4 py-3 w-[70vw] md:w-[550px] mt-4' type="number" min='0' placeholder='Nights*'/>
                <label className="flex mt-4 w-[70vw] md:w-[550px]">
                    <input className="" type="checkbox" />
                    <p className="flex text-sm px-2">I agree to provide the above information for the purposes of the reservation.</p>
                </label>
                <button type='submit' className='text-white bg-[#242424] hover:bg-[#000000] px-6 py-3 mt-10 mb-20'>Send request</button>
              </form>
            </div>
        </div>
    </div>
  )
}
export default Booking