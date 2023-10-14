import BookingSchedule from "./schedule.jsx"
import React, { useState } from "react"

const InnerPage = () => {



    return (
        <>
            <div className="bg-slate-700 absolute mt-5 p-5 overflow-auto max-h-[200px]">


                {/* Main Content */ }
                <main className="p-1 ">
                    {/* Ticket Booking Section */ }
                    <div className="bg-white p-2 rounded-lg shadow-lg mb-4 mt-2">
                        <a href="./bookBus.html"><h2 className="text-2xl">Ticket Booking</h2></a>
                        {/* Booking form goes here */ }
                    </div>

                    {/* Ticket Refund Section */ }
                    <div className="bg-white p-2 rounded-lg shadow-lg mb-4 mt-4">
                        <a href="./refund.html"><h2 className="text-2xl">Ticket Refund</h2></a>
                        {/* Refund form goes here */ }
                    </div>
                    <div className="bg-white p-2 rounded-lg shadow-lg mb-4 mt-4">
                        {/* Additional Content Section */ }
                        <a href="https://en.wikipedia.org/wiki/Public_transport_bus_service">
                            <h2 className="text-2xl pr-9 ">Discover Our Services</h2>
                            <b>www.BookBus.com</b></a>
                        {/* More content here */ }
                        {/* More Sections Here */ }
                    </div>
                    {/* Footer */ }
                    {/* <footer className="bg-blue-500 p-4 text-white text-center">
                        &copy; 2023 Bus Booking
                    </footer> */}
                </main>

            </div>
        </>
    )
};

export default InnerPage;