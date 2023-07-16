import { WiCloud } from 'react-icons/wi';

const Forcastcards = () => {
    return (
        <>

            <div className=" sidebar rounded-2xl p-5  text-center  ">
                <p className=' font-semibold text-white'>Sun</p>
                <div className="mb-3 text-white flex justify-center text-8xl">
                    <WiCloud />
                </div>
                <p className='  bg-cyan-700  text-white rounded-full w-3/5 mx-auto' >20°C</p>
            </div>

        </>
    )
}

export default Forcastcards