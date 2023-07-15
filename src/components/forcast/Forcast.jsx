import { WiCloud } from 'react-icons/wi';

const Forcast = () => {
    return (
        <div >
            <div className=' my-5 '>
                <p className=' text-white  px-1 text-xl font-semibold mb-5'>6 Days Forcast</p>

                <div className="grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 ">

                    <div className=" sidebar rounded-2xl p-5  text-center  ">
                        <p className=' font-semibold'>Sun</p>
                        <div className="mb-3 text-white flex justify-center text-8xl">
                            <WiCloud />
                        </div>
                        <p className='  bg-cyan-700  text-white rounded-full w-3/5 mx-auto' >20°C</p>
                    </div>
                    <div className=" sidebar rounded-2xl p-5  text-center  ">
                        <p className=' font-semibold'>Sun</p>
                        <div className="mb-3 text-white flex justify-center text-8xl">
                            <WiCloud />
                        </div>
                        <p className='  bg-cyan-700  text-white rounded-full w-3/5 mx-auto' >20°C</p>
                    </div>
                    <div className=" sidebar rounded-2xl p-5  text-center  ">
                        <p className=' font-semibold'>Sun</p>
                        <div className="mb-3 text-white flex justify-center text-8xl">
                            <WiCloud />
                        </div>
                        <p className='  bg-cyan-700  text-white rounded-full w-3/5 mx-auto' >20°C</p>
                    </div>
                    <div className=" sidebar rounded-2xl p-5  text-center  ">
                        <p className=' font-semibold'>Sun</p>
                        <div className="mb-3 text-white flex justify-center text-8xl">
                            <WiCloud />
                        </div>
                        <p className='  bg-cyan-700  text-white rounded-full w-3/5 mx-auto' >20°C</p>
                    </div>
                    <div className=" sidebar rounded-2xl p-5  text-center  ">
                        <p className=' font-semibold'>Sun</p>
                        <div className="mb-3 text-white flex justify-center text-8xl">
                            <WiCloud />
                        </div>
                        <p className='  bg-cyan-700  text-white rounded-full w-3/5 mx-auto' >20°C</p>
                    </div>
                    <div className=" sidebar rounded-2xl p-5  text-center  ">
                        <p className=' font-semibold'>Sun</p>
                        <div className="mb-3 text-white flex justify-center text-8xl">
                            <WiCloud />
                        </div>
                        <p className='  bg-cyan-700  text-white rounded-full w-3/5 mx-auto' >20°C</p>
                    </div>
                   
                </div>



            </div>

        </div>
    )
}

export default Forcast