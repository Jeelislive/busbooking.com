import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BookingSchedule from './schedule.jsx'
import InnerPage from './inner.jsx'

// ReactDOM.createRoot(document.getElementById('schedule')).render(
//   <React.StrictMode>
//     <BookingSchedule />
//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('inner')).render(

  <InnerPage />

)

ReactDOM.createRoot(document.getElementById('bookbus')).render(
  <React.StrictMode>
    <BookingSchedule />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('login')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('refund')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)