import React, { useEffect, useState } from 'react'

export default function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    function formatetime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const second = time.getSeconds();
        const meridiam = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(second)} ${meridiam}`;
    }
    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    return (

        <>
            <div className='clock' >
                <span>{formatetime()}</span>
            </div>
        </>
    )
}
