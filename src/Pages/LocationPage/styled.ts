import { styled } from "styled-components"

export const Container = styled.section`
  height: 100vh;
  margin: 60px 22px;

  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.h3`
  font-weight: 700;
  font-size: 22px;
  margin: 22px 0;
`

export const BackBtn = styled.button`
  width: 90%;
  display: flex;
  border: 0;
  background-color: #fff;
  cursor: pointer;
`
export const LocationBox = styled.div`
  position: relative;
  width: 85%;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  background-color: #F5F5F5;
`
export const LocationMent =  styled.span`
  margin: 0 2%;
  font-size: 13px;

  overflow: scroll;
  overflow: auto;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }

`
export const PostBox =  styled.div`
  width: 100%;
  height: 400px;
  position: absolute;
  top: 0;
  z-index: 1;
`

export const UserLastBtn = styled.button`
  width: 85%;
  margin-top: 380px;
  padding: 10px;
  border-radius: 6px;
  border: 0;

  background-color: #0089B5;
  color: #fff;

  font-size: 16px;
  font-weight: 700;

  cursor: pointer;
`

export const LocationBtn = styled.button`
  width: 40%;
  height: 60%;
  margin: 10px;
  padding: 5px 0;
  border: 0;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 700;
  background-color: #fff;

  cursor: pointer;  
`