import axios from 'axios'

export const getPrayTimes = async (date, latitude = 40.783333, longtitude = 30.40) => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = (today.getMonth() + 1).toString().padStart(2, '0'); // Months start at 0!
    const dd = today.getDate().toString().padStart(2, '0');
    const formattedDate = dd + '-' + mm + '-' + yyyy

    const results = await axios.get(`https://api.aladhan.com/v1/timings/${formattedDate}?latitude=${latitude}&longitude=${longtitude}`)

    const timings = results.data.data.timings


    return timings
}