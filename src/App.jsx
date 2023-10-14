import InnerPage from "./inner"
import React, { useEffect, useState, useRef } from 'react';
import BookingSchedule from "./schedule";
import bus from './assets/BusImage.jpeg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'




function App() {

  const [ inner, setinner ] = useState(false)
  const [ showSchedule, setshowSchedule ] = useState(false)
  const [ clickCount, setClickCount ] = useState(0)
  const containerRef = useRef(null);

  const handle = () => {

    setClickCount(prevcount => prevcount + 1)
    if (clickCount % 2 === 0) {
      setinner(true)
    } else {
      setinner(false)

    }
  }

  const handleClick = () => {
    setClickCount(prevcount => prevcount + 1)

    if (clickCount % 2 === 0) {
      setshowSchedule(true)
    } else {
      setshowSchedule(false)
    }
  };

  useEffect(() => {
    const closeMenu = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setinner(false);
        setshowSchedule(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, []);


  return (
    <>



      <header className="text-2xl bg-blue-500 p-4">

        <a href="http://localhost:5175/"><b>BusBook.com</b></a>


      </header>
      {/* Navigation */ }
      <nav className="bg-slate-700 p-3  ">
        <ul className="flex space-x-6 p-1 ml-2  ">
          <li>

            <a href="#" className=" text-white  p-6 rounded " id="inner" onClick={ handle }>
              menu
            </a>
            { inner && <InnerPage /> }

          </li>
          <li><a href="#" onClick={ handleClick }
            className="text-white p-2 rounded ">Booking Schedule </a>
            { showSchedule && <BookingSchedule /> }
          </li>


          <li><a href="login.html" className=" text-white p-2 rounded">Login</a></li>
        </ul>
      </nav >




      <main className="container mx-auto p-4">
        <section className="bg-white shadow-md p-6 rounded-md">
          <h1 className="text-3xl font-semibold mb-4">Welcome to BusBook App</h1>
          <p className="text-lg">
            Book your bus tickets easily with BusBook.com , Discover routes, check availability, and make reservations with just a few clicks.
          </p>
        </section>
      </main>
      {/* < img src={ bus } className="relative "></img > */ }

      <div className="relative">

        <img src={ bus } alt="bus Image" className="w-full h-auto"></img>
        <div className="absolute top-0 left-0 p-20 m-30">
          <h2 className="text-6xl  text-black mb-4">NOW, <b>GET MORE THAN</b></h2>
          <p className="text-4xl text-black mb-3"><b>JUST BUS </b>TICKETS WITH </p>
          <p className="text-4xl text-black "><b>BOOKBUS.COM</b></p>
        </div>
      </div>

      <footer className="bg-blue-500 p-4 mt-4 mb-3 ">
        <div className="container mx-auto text-white text-sm text-center">
          &copy; 2023 BusBook App
        </div>
      </footer>


    </>
  )
}

export default App
