import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import useDebounce from './debounce';
import { Chip, TextField } from '@mui/material';



function Foods() {
  const [foods, setFoods] = useState([]); // api에서 가져올 음식 데이터
  const [searchTerm, setSearchTerm] = useState(""); // 검색 키워드
  const debouncedSearchTerm = useDebounce(searchTerm, 800);

  const searchFoods = async (search) => {
    const res = await axios.get(`/api/food?food_name=${search}`);
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

    </>
  )
}

export default Foods;