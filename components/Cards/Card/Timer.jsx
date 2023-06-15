import React, {useState , useEffect} from 'react'

const Timer = ({countDown}) => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;

  const startTimer = () => {
    const futureDate = new Date(countDown).getTime();

    interval = setInterval(() => {
      const currentDate = new Date().getTime();
      const diff = futureDate - currentDate;
      const day = Math.floor(diff / (24 * 60 * 60 * 1000));
      let hour = Math.floor((diff % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
      hour.toString().length < 2 ? (hour = "0" + hour) : (hour = hour);
      let min = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
      min.toString().length < 2 ? (min = "0" + min) : (min = min);
      let sec = Math.floor((diff % (60 * 1000)) / 1000);
      sec.toString().length < 2 ? (sec = "0" + sec) : (sec = sec);
      if (diff < 0) {
        clearInterval(interval.current);
      } else {
        setDays(day);
        setHours(hour);
        setMinutes(min);
        setSeconds(sec);
      }
      // setDays(days)
    }, 100);
  };
  startTimer();
//   console.log(seconds);

    useEffect(() => {
      startTimer()
    })
  return (
    <div className='flex justify-around text-center uppercase font-thin p-2'>
      <div>
        <h2 className='text-[2.5rem] tracking-[2px]'>{days}</h2>
        <p className='text-[8px] tracking-[2px]'>Days</p>
      </div>
      <div>
        <h2 className='text-[2.5rem] tracking-[2px]'>{hours}</h2>
        <p className='text-[8px] tracking-[2px]'>Hours</p>
      </div>
      <div>
        <h2 className='text-[2.5rem] tracking-[2px]'>{minutes}</h2>
        <p className='text-[8px] tracking-[2px]'>Minutes</p>
      </div>
      <div>
        <h2 className='text-[2.5rem] tracking-[2px]'>{seconds}</h2>
        <p className='text-[8px] tracking-[2px]'>Seconds</p>
      </div>
    </div>
  )
}

export default Timer