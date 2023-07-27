import React, { useEffect } from 'react';
import { SC } from './styled'

declare global {
  interface Window {
    kakao: any;
  }
}

interface MapProps {
  mapCenter: { lat: number; lon: number };
}


const MapComponent: React.FC<MapProps> = ({ mapCenter }) => {
  useEffect(() => {
    const mapContainer = document.getElementById('map'); // 지도를 표시할 div
    const mapOption = {
      center: new window.kakao.maps.LatLng(mapCenter.lat, mapCenter.lon), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };

    const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude; // 위도
        const lon = position.coords.longitude; // 경도

        const locPosition = new window.kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
        const message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다

        const locPosition2 = new window.kakao.maps.LatLng(lat + 0.001, lon + 0.01)
        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);
        displayMarker(locPosition2 ,message);
        console.log(lat, lon)
      });
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을 때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      const locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
      const message = 'geolocation을 사용할 수 없어요..';

      // 마커와 인포윈도우를 표시합니다
      displayMarker(locPosition, message);
    }

    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    function displayMarker(locPosition: any, message: string) {
      // 마커를 생성합니다
      const marker = new window.kakao.maps.Marker({
        map: map,
        position: locPosition,
      });

      const iwContent = message; // 인포윈도우에 표시할 내용
      const iwRemoveable = true;

      // 인포윈도우를 생성합니다
      const infowindow = new window.kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
      });

      // 인포윈도우를 마커위에 표시합니다
      infowindow.open(map, marker);

      // 지도 중심좌표를 접속위치로 변경합니다
      map.setCenter(locPosition);
    }
  }, [mapCenter]);

  return <SC.MapContainer id="map" />;
};

export default MapComponent;
