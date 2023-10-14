import React, { useState } from 'react';

const BookingSchedule = () => {
    const [ selectedDate, setSelectedDate ] = useState(null);
    const [ bookings, setBookings ] = useState([]);

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    const handleSaveBooking = () => {
        if (selectedDate) {
            setBookings([ ...bookings, selectedDate ]);
            setSelectedDate(null);
        }
    };

    return (
        <>
            <div className="max-w-md mx-auto p-4 mt-3 rounded Fixed  bg-white">
                <h2 className="text-2xl font-semibold mb-4">Booking Schedule</h2>
                <div className="grid grid-cols-7 gap-2">
                    { Array.from({ length: 31 }, (_, i) => (
                        <button
                            key={ i }
                            onClick={ () => handleDateClick(i + 1) }
                            className={ `p-2 border rounded-full text-center ${ selectedDate === i + 1 ? 'bg-blue-500 text-white' : 'hover:bg-blue-100' }` }
                        >
                            { i + 1 }
                        </button>
                    )) }
                </div>
                { selectedDate && (
                    <div className="mt-4">
                        <p className="text-lg">Selected Date: { selectedDate }</p>
                        <button
                            onClick={ handleSaveBooking }
                            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
                        >
                            Save Booking
                        </button>
                    </div>
                ) }
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">Booked Dates:</h3>
                    <ul>
                        { bookings.map((booking, index) => (
                            <li key={ index }>{ booking }</li>
                        )) }
                    </ul>
                </div>
            </div>
        </>
    );
};

export default BookingSchedule;
