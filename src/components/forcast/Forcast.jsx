import Forcastcards from './forcastcards/Forcastcards';
const Forcast = () => {
    return (
        <div >
            <div className=' my-5 '>
                <p className=' text-white  px-1 text-xl font-semibold mb-5'>6 Days Forcast</p>

                <div className="grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 ">

                    <Forcastcards/>
                    <Forcastcards/>
                    <Forcastcards/>
                    <Forcastcards/>
                    <Forcastcards/>
                    <Forcastcards/>
                   
                   
                </div>



            </div>

        </div>
    )
}

export default Forcast