/* eslint-disable react/prop-types */
import Current from '../Current/Current'
import Forcast from '../forcast/Forcast';
const ForcastCurrent = ({data,ForcastData,loading}) => {
  return (
    <>
    <div className=' w-11/12 mx-auto md:flex   gap-5 '>
          <div className='md:w-1/2'>
            <Current data={data} loading={loading}  />
          </div>
          <div className='md:w-1/2'>
            
            <Forcast  text={'6 Days Forcast'} grid={'xl:grid-cols-4 sm:grid-cols-3 grid-cols-2'} ForcastData={ForcastData} />
          </div>
        </div>
    
    </>
  )
}

export default ForcastCurrent