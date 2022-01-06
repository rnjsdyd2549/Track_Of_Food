import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Foods() {
  const [foods, setFoods] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFoods = async () => {
    try {
      // error 와 foods 를 초기화
      setError(null);
      setFoods(null);
      // loading 상태->true 
      setLoading(true);
      const response = await axios.get(
        'http://127.0.0.1:5000/food?food_name=%%EA%B3%A0'
      );
      setFoods(response.data["food_list"]); //response.data에 데이터 존재
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  if (loading) return <div>로딩중..</div>; 
  if (error) return <div>에러가 발생했습니다</div>;

	// foods가 받아 지지 않았을 때는 아무것도 표시되지 않기
  if (!foods) return null;

	// foods가 받아짐
  return (
    <>
	    <ul>
	      {foods.map(foods => (
	        <li key={foods.id}>
	          {foods.name} ({foods.kcal})
	        </li>
	      ))}
	    </ul>
			{/* button을 클릭하면 API를 다시 불러와줍니다. */}
			<button onClick={ fetchFoods }>다시 불러오기</button>
	</>
  );
}

export default Foods;