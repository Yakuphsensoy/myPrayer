import { useEffect, useState } from 'react';
import { getPrayTimes } from '../helper/prayTimeHelper';
import moment from 'moment';
import "../styles/style.css";

const COORDINATES = [
    { name: 'Adana', latitude: 37.0, longitude: 35.3213 },
    { name: 'Adıyaman', latitude: 37.7648, longitude: 38.2786 },
    { name: 'Afyonkarahisar', latitude: 38.7638, longitude: 30.5405 },
    { name: 'Ağrı', latitude: 39.7217, longitude: 43.0567 },
    { name: 'Aksaray', latitude: 38.3687, longitude: 34.0369 },
    { name: 'Amasya', latitude: 40.6539, longitude: 35.8331 },
    { name: 'Ankara', latitude: 39.9334, longitude: 32.8597 },
    { name: 'Antalya', latitude: 36.8969, longitude: 30.7133 },
    { name: 'Ardahan', latitude: 41.1105, longitude: 42.7022 },
    { name: 'Artvin', latitude: 41.1828, longitude: 41.8183 },
    { name: 'Aydın', latitude: 37.8444, longitude: 27.8458 },
    { name: 'Balıkesir', latitude: 39.6484, longitude: 27.8826 },
    { name: 'Bartın', latitude: 41.5811, longitude: 32.461 },
    { name: 'Batman', latitude: 37.8812, longitude: 41.1351 },
    { name: 'Bayburt', latitude: 40.2552, longitude: 40.2249 },
    { name: 'Bilecik', latitude: 40.1419, longitude: 29.9793 },
    { name: 'Bingöl', latitude: 38.8847, longitude: 40.4939 },
    { name: 'Bitlis', latitude: 38.4016, longitude: 42.1077 },
    { name: 'Bolu', latitude: 40.735, longitude: 31.6066 },
    { name: 'Burdur', latitude: 37.7167, longitude: 30.2833 },
    { name: 'Bursa', latitude: 40.1826, longitude: 29.0669 },
    { name: 'Çanakkale', latitude: 40.1456, longitude: 26.4064 },
    { name: 'Çankırı', latitude: 40.6013, longitude: 33.6134 },
    { name: 'Çorum', latitude: 40.5506, longitude: 34.9556 },
    { name: 'Denizli', latitude: 37.7742, longitude: 29.0875 },
    { name: 'Diyarbakır', latitude: 37.924, longitude: 40.210 },
    { name: 'Düzce', latitude: 40.8438, longitude: 31.1565 },
    { name: 'Edirne', latitude: 41.6771, longitude: 26.5558 },
    { name: 'Elazığ', latitude: 38.6755, longitude: 39.2205 },
    { name: 'Erzincan', latitude: 39.75, longitude: 39.5 },
    { name: 'Erzurum', latitude: 39.904, longitude: 41.2679 },
    { name: 'Eskişehir', latitude: 39.7767, longitude: 30.5206 },
    { name: 'Gaziantep', latitude: 37.0662, longitude: 37.3833 },
    { name: 'Giresun', latitude: 40.9176, longitude: 38.3874 },
    { name: 'Gümüşhane', latitude: 40.460, longitude: 39.4837 },
    { name: 'Hakkari', latitude: 37.5744, longitude: 43.7408 },
    { name: 'Hatay', latitude: 36.4018, longitude: 36.3498 },
    { name: 'Iğdır', latitude: 39.9206, longitude: 44.0467 },
    { name: 'Isparta', latitude: 37.7644, longitude: 30.5522 },
    { name: 'İstanbul', latitude: 41.0082, longitude: 28.9784 },
    { name: 'İzmir', latitude: 38.4237, longitude: 27.1428 },
    { name: 'Kahramanmaraş', latitude: 37.5753, longitude: 36.9377 },
    { name: 'Karabük', latitude: 41.2049, longitude: 32.6277 },
    { name: 'Karaman', latitude: 37.1759, longitude: 33.2287 },
    { name: 'Kars', latitude: 40.5987, longitude: 43.0856 },
    { name: 'Kastamonu', latitude: 41.3887, longitude: 33.7827 },
    { name: 'Kayseri', latitude: 38.7312, longitude: 35.4787 },
    { name: 'Kilis', latitude: 36.7184, longitude: 37.1212 },
    { name: 'Kırıkkale', latitude: 39.8468, longitude: 33.5153 },
    { name: 'Kırklareli', latitude: 41.7351, longitude: 27.2252 },
    { name: 'Kırşehir', latitude: 39.1429, longitude: 34.1709 },
    { name: 'Kocaeli', latitude: 40.8533, longitude: 29.8815 },
    { name: 'Konya', latitude: 37.8667, longitude: 32.4833 },
    { name: 'Kütahya', latitude: 39.4167, longitude: 29.9833 },
    { name: 'Malatya', latitude: 38.3552, longitude: 38.3095 },
    { name: 'Manisa', latitude: 38.6191, longitude: 27.4289 },
    { name: 'Mardin', latitude: 37.3212, longitude: 40.7245 },
    { name: 'Mersin', latitude: 36.8121, longitude: 34.6415 },
    { name: 'Muğla', latitude: 37.2153, longitude: 28.3636 },
    { name: 'Muş', latitude: 38.9462, longitude: 41.7539 },
    { name: 'Nevşehir', latitude: 38.6244, longitude: 34.7239 },
    { name: 'Niğde', latitude: 37.976, longitude: 34.6939 },
    { name: 'Ordu', latitude: 40.9861, longitude: 37.8781 },
    { name: 'Osmaniye', latitude: 37.0741, longitude: 36.2474 },
    { name: 'Rize', latitude: 41.0201, longitude: 40.5234 },
    { name: 'Sakarya', latitude: 40.7569, longitude: 30.378 },
    { name: 'Samsun', latitude: 41.2867, longitude: 36.33 },
    { name: 'Siirt', latitude: 37.9274, longitude: 41.9448 },
    { name: 'Sinop', latitude: 42.0264, longitude: 35.1551 },
    { name: 'Sivas', latitude: 39.7483, longitude: 37.0179 },
    { name: 'Şanlıurfa', latitude: 37.167, longitude: 38.7939 },
    { name: 'Şırnak', latitude: 37.4187, longitude: 42.4918 },
    { name: 'Tekirdağ', latitude: 40.978, longitude: 27.5119 },
    { name: 'Tokat', latitude: 40.3167, longitude: 36.5500 },
    { name: 'Trabzon', latitude: 41.0015, longitude: 39.7178 },
    { name: 'Tunceli', latitude: 39.1081, longitude: 39.5473 },
    { name: 'Uşak', latitude: 38.6823, longitude: 29.4082 },
    { name: 'Van', latitude: 38.4946, longitude: 43.3832 },
    { name: 'Yalova', latitude: 40.650, longitude: 29.2769 },
    { name: 'Yozgat', latitude: 39.818, longitude: 34.8147 },
    { name: 'Zonguldak', latitude: 41.4564, longitude: 31.7987 },

]
export default function PrayerTimes() {
    const [name, setName] = useState()
    const [time, setTime] = useState()
    const [diff, setDiff] = useState()
    const [coordinate, setCoordinate] = useState(COORDINATES[0])
    const [timings, setTimings] = useState()

    function getPrayTimeRange(prayerTimes) {
        // Fajr, Sunrise, Duhr, Asr, Maghrib, Isha
        const currentTime = moment(moment(), 'HH:mm')

        if (currentTime.isBefore(moment(prayerTimes.Fajr, 'HH:mm'))) {
            return { name: 'İmsak', time: prayerTimes.Fajr, diff: moment(prayerTimes.Fajr, 'HH:mm').diff(currentTime, 'minutes') }   // 01:12 - 05:12
        }
        if (currentTime.isBefore(moment(prayerTimes.Sunrise, 'HH:mm'))) {
            return { name: 'Güneş', time: prayerTimes.Sunrise, diff: moment(prayerTimes.Sunrise, 'HH:mm').diff(currentTime, 'minutes') }
        }
        if (currentTime.isBefore(moment(prayerTimes.Duhr, 'HH:mm'))) {
            return { name: 'Öğlen', time: prayerTimes.Duhr, diff: moment(prayerTimes.Duhr, 'HH:mm').diff(currentTime, 'minutes') }
        }
        if (currentTime.isBefore(moment(prayerTimes.Asr, 'HH:mm'))) {
            return { name: 'İkindi', time: prayerTimes.Asr, diff: moment(prayerTimes.Asr, 'HH:mm').diff(currentTime, 'minutes') }
        }
        if (currentTime.isBefore(moment(prayerTimes.Maghrib, 'HH:mm'))) {
            return { name: 'Akşam', time: prayerTimes.Maghrib, diff: moment(prayerTimes.Maghrib, 'HH:mm').diff(currentTime, 'minutes') }
        }
        if (currentTime.isBefore(moment(prayerTimes.Isha, 'HH:mm'))) {
            return { name: 'Yatsı', time: prayerTimes.Isha, diff: moment(prayerTimes.Isha, 'HH:mm').diff(currentTime, 'minutes') }
        }
        if (currentTime.isAfter(moment(prayerTimes.Isha, 'HH:mm'))) {
            return { name: 'Sabah', time: prayerTimes.Fajr, diff: (24 * 60) - moment(currentTime, 'HH:mm').diff(moment(prayerTimes.Fajr, "HH:mm"), 'minutes') }

        }
    }

    function formatTime(minute) {

        const hour = Math.floor(Number(minute / 60));
        const leftMinutes = minute % 60;

        if (hour > 0 && leftMinutes > 0) {
            return `${hour}:${leftMinutes}`
        }
        if (hour > 0 && leftMinutes === 0) {
            return `${hour}:00`
        }
        if (leftMinutes > 0 && hour === 0) {
            return `00:${leftMinutes}`
        }
    }

    useEffect(() => {
        async function fetchPrayerTimes() {
            const timings = await getPrayTimes(moment().date(), coordinate?.latitude, coordinate?.longitude)
            const { name, time, diff } = getPrayTimeRange(timings)

            setTimings(timings)
            setName(name)
            setTime(time)
            setDiff(diff)
        }
        fetchPrayerTimes();

        const now = moment();
        const currentSecond = now.seconds();
        const timeUntilNextMinute = (60 - currentSecond) * 1000;


        const timeout = setTimeout(() => {
            fetchPrayerTimes();
            const interval = setInterval(fetchPrayerTimes, 60000);


            return () => clearInterval(interval);
        }, timeUntilNextMinute);


        return () => clearTimeout(timeout);
    }, [coordinate]);

    function date() {
        const day = moment().format('DD')
        const month = moment().format('MM')
        const year = moment().format('YYYY')
        return `${day}.${month}.${year}`
    }


    function now() {
        const hours = moment().format('HH')
        const minutes = moment().format('mm')
        return `${hours}:${minutes}`
    }

    function handleSetCoordinate(e) {
        const value = e.target.value

        const foundCoordinate = COORDINATES.find(c => c.name === value)

        setCoordinate(foundCoordinate)
    }

    return (
        <div className="main">
            <div className="sides">
                <div className="leftSide">
                    <select className="select" onChange={handleSetCoordinate}>
                        {COORDINATES.map((city, index) => (
                            <option value={city.name} label={city.name} key={index}>{city.name}</option>
                        ))}
                    </select>
                    <div className="date">
                        <p>{date()}</p>
                    </div>
                    <h2 className='nextTime'>
                        <span>{name}<p className='counter'>{formatTime(diff)}</p>
                            {timings && name === timings.Sunrise ? (
                                <span><span>{time}</span>'te doğuyor. <span>{formatTime(diff)}</span> kaldı.</span>
                            ) : (
                                <span><span>{time}</span>'te okunuyor.</span>
                            )}</span></h2>
                </div>
                {
                    timings ? (
                        <div className='prayer'>
                            <h1 className='currentTime'>{now()}</h1>
                            <h3>Sabah: {timings.Fajr}</h3>
                            <h3>Güneş: {timings.Sunrise}</h3>
                            <h3>Öğle: {timings.Dhuhr}</h3>
                            <h3>İkindi: {timings.Asr}</h3>
                            <h3>Akşam: {timings.Maghrib}</h3>
                            <h3>Yatsı: {timings.Isha}</h3>
                        </div>
                    ) : <p>Yükleniyor...</p>
                }
            </div>
        </div>
    )
}