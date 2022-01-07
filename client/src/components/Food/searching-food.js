import React, { useState, useEffect } from 'react';
import api from '../../utils/api/http_functions';

function Foods() {

  const fetchFoods = (e) => {
    const [foods, setFoods] = useState(null); // api에서 가져올 음식 데이터
    const [query, setQuery] = useState('기'); // api 검색 키워드 (쿼리 스트링)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    // 렌더링이 업데이트 될 때 effect 구문 실행
    useEffect(() => {
      e.preventDefault();
      // query에 대한 검색 결과가 완료 되었는지 검사하는 변수
      let completed = false;

      async function callAPI() {
        // error와 foods 초기화
        setError(null)
        setFoods(null)
        // loading 상태 -> true
        setLoading(true);
        
        const res = await api.get(`/food?food_name=${query}`)
        if(!completed) {
          setFoods(res.data["food_list"])
        }
      }
      callAPI();
      return () => {
        // 다른 비동기 작업이 또 실행되지 않게 하기
        completed = true;
      }
      // query가 바뀌는 시점에 리액트가 렌더링
    }, [query]);

    if (loading) return <div>로딩 중...</div>
    if (error) return <div>에러가 발생했습니다</div>
    if (!foods) return null;

    return (
      // ui 그리기
      <>
        <input value={query} onChange={e => setQuery(e.target.value)} />
        <ul>
          {foods.map(food => (
            <li key={food.id}>
              {foods.name} ({food.kcal})
            </li>
          ))}
        </ul>
        {/* button을 클릭하면 API를 다시 불러와줍니다. */}
			  <button onClick={ fetchFoods }>다시 불러오기</button>
      </>
    )
  }
}

export default Foods;
