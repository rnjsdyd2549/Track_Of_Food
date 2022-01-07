import React, { useState, useEffect } from 'react';
import api from '../../utils/api/http_functions';

function Foods() {
  const [foods, setFoods] = useState([]); // api에서 가져올 음식 데이터
  const [query, setQuery] = useState(''); // api 검색 키워드 (쿼리 스트링)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function callAPI() {
      setError(null)
      setFoods(null)
      setLoading(true);

      const res = await api.get(`api/food?food_name=${query}`)
      setFoods(res.data["food_list"])
    }
    callAPI();
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const handleClick = () => { // button click 시 food-cart의 음식 카드들을 다시 그려주는 함수

  }

  if (loading) return <div>로딩 중...</div>
  if (error) return <div>에러가 발생했습니다</div>
  if (!foods) return null;



  return (
    // ui 그리기
    <>
      <input value={query} onChange={handleChange} />
      <ul>
        {foods.map(food => (
          <li key={food.id}>
            {foods.name} ({food.kcal})
          </li>
        ))}
      </ul>

      <button onclick={handleClick}>다시 불러오기</button>
    </>
  )
}

export default Foods;