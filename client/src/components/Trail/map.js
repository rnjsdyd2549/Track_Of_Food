// components/trail/Map.js 
import React, { useEffect } from 'react';
const { kakao } = window;      // 윈도우 전역객체

const Map = () => {
  
  // 나타내고자하는 산책로의 데이터를 가져온다.
  const s_lat = 37.569169766665524
  const s_lng = 126.97777283669964
  const coord_list = [[37.569169766665524, 126.97777283669964], [37.56910484916733, 126.978155468533], [37.56908602060366, 126.9784839903032]]

  useEffect(() => {

  // 중심좌표에 따라 지도 그리기
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(s_lat, s_lng),        // 지도의 중심좌표
      level: 3                                            // 지도의 확대레벨
    };
    const map = new kakao.maps.Map(container, options);   // 지도 생성

  // 지도에 경로 그리기
    const trailPath = coord_list.map(item => new kakao.maps.LatLng(item[0], item[1]))  // COORD 에서 
    const polyline = new kakao.maps.Polyline({
      path: trailPath,       // 경로를 구성하는 좌표배열 입니다
      strokeWeight: 5,      // 경로두께 
      strokeColor: 'red',   // 경로 색
      strokeOpacity: 0.7,   // 경로 투명도
      strokeStyle: 'solid'  // 경로 스타일
    });
    polyline.setMap(map);  //  경로를 map에 그린다.

  }, []);

  // 지도를 담기위한 영역
  return (
    <div id='map' style={{
      width: '500px', height: '500px'
    }}>
    </div>
  )
}

export default Map; 