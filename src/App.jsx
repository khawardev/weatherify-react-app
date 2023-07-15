
import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Current/Current'
import Forcast from './components/forcast/Forcast';
import Highlights from './components/highlights/Highlights';



function App() {

  return (
    <>
      <Header />
      <div className=' w-11/12 mx-auto md:flex   gap-5 '>
        <div className='md:w-1/2'>
          <Sidebar />
        </div>
        <div className='md:w-1/2'>
          <Forcast />
        </div>
      </div>
      <Highlights />
    </>
  )
}

export default App
