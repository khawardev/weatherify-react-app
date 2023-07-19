/* eslint-disable react/prop-types */

const QualityAircard = ({ Text, Number }) => {
    return (
        <>
            <div className='text-center'>
                <p className='font-semibold '>{Text}</p>
                <div className='sm:text-4xl text-3xl font-semibold text-white'>
                    {Number}
                </div>
            </div>


        </>
    )
}

export default QualityAircard