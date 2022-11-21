//cleatInterval 에 주목
// return () => {} : 다시 렌더링을 하기 이전에 컴포넌트를 지우고 다시 시작

import { useState, useEffect } from "react";

function Time(props) {
  const [today, setToday] = useState(new Date());
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

    console.log("렌더링이 됩니다..?")
  useEffect(() => {
    let time = setInterval(() => {
      const t = new Date();
      setToday(t);
    }, 1000);
    return () => {
      clearInterval(time);
    };
  }, [today]);

  return (
    <div>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}

export default Time;