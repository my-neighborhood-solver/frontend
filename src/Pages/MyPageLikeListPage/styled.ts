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
  width: 100%;
  display: flex;
  border: 0;
  background-color: #fff;
  cursor: pointer;
`

export const ListBox = styled.div`
  width: 100%;
`

export const LikeCard = styled.div`
  display: flex;
  gap: 4px;
  margin: 8px 0;
  border: 1px solid #b1b1b1;
  border-radius: 12px;
`

export const ImgBox = styled.div`
  max-width: 75px;
  min-width: 75px;
  max-height: 82px;
  min-height: 82px;
  border-radius: 12px 0 0 12px;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0;
  border-radius: 12px 0 0 12px;
`

export const DoscBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4px;
  padding: 18px;
  width: 100%;
`

export const DoscTitle = styled.h4`
  font-weight: 700;
`


export const HashtagMent = styled.span`
  font-size: 10px;
  color: #B1B1B1;
`

export const MoneyMent = styled.span`
  position: relative;
  font-size: 12px;
  font-weight: 700;
`


export const DeleteBtn = styled.span`
  color: red;
  font-family: var(--font-nanumfontB);

  cursor: pointer;
`
export const NoticeBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  padding: 10px;
`

export const Notification = styled.p`
  font-weight: 700;
  font-size: 14px;
`
