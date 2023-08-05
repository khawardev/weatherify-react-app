/* eslint-disable react/prop-types */

const QualityAircard = ({ data, index }) => {

    const Text = (index) => {
        switch (true) {
            case index === 0:
                return 'CO';
            case index === 1:
                return 'NO2';
            case index === 2:
                return 'O3';

            case index === 3:
                return 'PM10';
            default:
                return '';
        }
    }

    return (
        <>
            <div className='text-center'>
                <p className='font-semibold '>{Text(index)}</p>
                <div className='sm:text-4xl text-3xl font-semibold text-white-black'>
                    {data}
                </div>
            </div>


        </>
    )
}

export default QualityAircard