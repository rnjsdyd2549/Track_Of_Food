import React, { useState, useEffect } from 'react';
import api from '../../utils/api/http_functions';
import useDebounce from './debounce';

function Foods() {
  const [foods, setFoods] = useState([]); // api에서 가져올 음식 데이터
  const [searchTerm, setSearchTerm] = useState(""); // 검색 키워드
  const debouncedSearchTerm = useDebounce(searchTerm, 800);

  const searchFoods = async (search) => {
    const res = await api.get(`/api/food?food_name=${search}`);
    setFoods(res.data['food_list']);
  };

  useEffect(() => {
    searchFoods(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const handleClick = () => { // button click 시 food-cart의 음식 카드들을 다시 그려주는 함수

  }

  return (
    <>
      <br />
      <input value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} />
      <ul>

        {
          foods.map(food => (
            <li key={food.id}>
              {food.name} ({food.kcal})
            </li>
          ))
        }

      </ul>

      <button onClick={handleClick}>다시 불러오기</button>
    </>
  )
}

export default Foods;