/* eslint-disable react/prop-types */
import Forcastcards from './forcastcards/Forcastcards';
const Forcast = ({ classes, text, AvailaibleToday }) => {
    const rotationAngles = Array.from({ length: 8 }, (_, index) => index * 45);

    const colorclass = ' bg-cyan-700 rounded-full w-3/5 mx-auto text-white '
    return (
        <div >
            <div className=' my-5 '>
                <p className=' text-white  px-1 text-xl font-semibold mb-5'>{text}</p>
                <div className={classes} >

                    {AvailaibleToday ? (
                        <>
                            {rotationAngles.map((index) => (
                                <Forcastcards key={index} colorclass='text-white' LocationIconclasses={'my-6  flex justify-center text-6xl'} index={index} />
                            ))}

                        </>
                    ) :
                        <>
                            <Forcastcards Iconparams={'cloud'} colorclass={colorclass} />
                            <Forcastcards Iconparams={'cloud'} colorclass={colorclass} />
                            <Forcastcards Iconparams={'cloud'} colorclass={colorclass} />
                            <Forcastcards Iconparams={'cloud'} colorclass={colorclass} />
                            <Forcastcards Iconparams={'cloud'} colorclass={colorclass} />
                            <Forcastcards Iconparams={'cloud'} colorclass={colorclass} />
                        </>
                    }

                </div>
            </div>


            {AvailaibleToday ? (
                <>
                    <hr className=" border-slate-400 mb-3 w-11/12 mx-auto" />
                    <div className=' my-5 '>
                        <div className={classes} >
                            {rotationAngles.map((index) => (
                                <Forcastcards Style={{ transform: `rotate(${index}deg)`, color:'#2298F1' }} key={index} colorclass='text-white' Iconparams={'Location'} LocationIconclasses={'my-8  flex justify-center text-4xl'} />
                            ))}
                        </div>
                    </div>
                </>
            ) : null}

        </div>
    )
}

export default Forcast