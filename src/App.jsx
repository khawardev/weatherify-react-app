
import './App.css'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/Current/Current'
import Forcast from './components/forcast/Forcast';
import Highlights from './components/highlights/Highlights';
import Day from './components/day/day';

function App() {

  return (
    <>
      <Navbar />
      <div className=' w-11/12 mx-auto md:flex   gap-5 '>
        <div className='md:w-1/2'>
          <Sidebar />
        </div>
        <div className='md:w-1/2'>
          <Forcast />
        </div>
      </div>
      <Highlights />
      <Day/>
    </>
  )
}

export default App
