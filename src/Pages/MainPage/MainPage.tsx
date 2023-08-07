import { useEffect, useState } from 'react'
import MapComponent from './MapComponent';
import { SC } from './styled';
import { instanceHeader, instance } from '../API/axiosAPI';
import { useRecoilState } from 'recoil';
import { nicknameState } from '../../recoil/atoms';
import { AxiosResponse } from 'axios';


const MainPage: React.FC = () => {
  const [mapCenter, setMapCenter] = useState<{lat: number, lon: number} | null>(null);
  const [nickname, setNickname] = useRecoilState<any>(nicknameState)
  const code = new URL(window.location.href).searchParams.get("code")


  useEffect(() => {
    if(code) {
      try {
        instance({
          url: `auth/kakao/callback?code=${code}`,
          method: 'get',
        })
        .then((res: any) => {
          setNickname(res.nickname)
        })
      } catch (error: any) {
        console.log(error)
      }
    }
  }, [code])

  const logintoken = sessionStorage.getItem('user')
  const getUser = () => {
    if(logintoken) {
      try {
        instanceHeader({
          url: 'users/',
          method: 'get',
        }).then((res: any) => {
        setNickname(res.nickname)}
        )
      } catch (error: any) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    getUser()
  }, [])
  
  useEffect(() => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (postion) => {
          const lat = postion.coords.latitude;
          const lon = postion.coords.longitude
          setMapCenter({lat, lon})
        }
        )
      }else{
        alert('위치 정보를 불러올 수 없습니다.')
      }
    }, [])

    console.log(nickname);
    if(mapCenter){
      return (
        <SC.MapBox>
          <MapComponent mapCenter={ mapCenter } />
        </SC.MapBox>
      );
    }
};

export default MainPage;
