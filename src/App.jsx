
import './App.css'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/Current/Current'
import Forcast from './components/forcast/Forcast';
import Highlights from './components/highlights/Highlights';
import DayForcast from './components/dayForcast/DayForcast';
function App() {

  return (
    <>
      <Navbar />
      <div className=' w-11/12 mx-auto md:flex   gap-5 '>
        <div className='md:w-1/2'>
          <Sidebar />
        </div>
        <div className='md:w-1/2'>
          <Forcast text={'6 Days Forcast'} classes={'grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4'} />
        </div>
      </div>
      <Highlights />
      <DayForcast/>
    </>
  )
}

export default App
