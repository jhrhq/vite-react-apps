import React, { useEffect, useRef, useState } from "react";
import { Slide } from "react-reveal";

const CountDown = () => {
  const [timerdays, setTimerdays ] = useState('00')
  const [timerhours, setTimerhours ] = useState('00')
  const [timermins, setTimermins ] = useState('00')
  const [timersecs, setTimersecs ] = useState('00')
  
  let interval = useRef;

   const  getTimeUntil =() => {

      const coutnDownDate = new Date('May 30, 2022 00:00:00').getTime()
      interval = setInterval(() => {
        const now  = new Date().getTime();
        const distance = coutnDownDate - now
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)
        if(distance < 0) {
          clearInterval(interval.current)
        }else {
          setTimerdays(days)
          setTimerhours(hours)
          setTimermins(minutes)
          setTimersecs(seconds)
        }
      }, 1000)
   
    }
    useEffect(() => {
      getTimeUntil();

        return () => {
          clearInterval(interval.current)
        }
    },[])
  return (
    <Slide left delay={1000}>
      <div>
        <div className="countdown_wrapper">
          <div className="countdown_top">Timer as Count Down</div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">{timerdays}</div>
              <div className="countdown_tag">Days</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{timerhours}</div>
              <div className="countdown_tag">Hrs</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{timermins}</div>
              <div className="countdown_tag">Mins</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{timersecs}</div>
              <div className="countdown_tag">Secs</div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default CountDown;
