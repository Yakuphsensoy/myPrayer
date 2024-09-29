// import { useState, useEffect } from "react";
// import PrayerTimes from "./PrayerTimes.js";

// export default function Countdown() {
//     const [time, setTime] = useState(23)

//     useEffect(() => {
//         if (time > 0) {
//             const interval = setInterval(() => {
//                 setTime((prevTime) => prevTime - 1);
//             }, 1000);
//             return () => clearInterval(interval);
//         }
//     }, [time]);

//     return (
//         <div>
//             <h2>{time}</h2>
//         </div>
//     )
// }
