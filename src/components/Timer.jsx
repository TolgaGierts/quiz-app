import { useEffect } from 'react';

const Timer = ({ dispatch, secondsRemaining }) => {
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }
  useEffect(() => {
    const interval = setInterval(function () {
      dispatch({ type: 'tick' });
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return <div className='timer'>{formatTime(secondsRemaining)}</div>;
};

export default Timer;
