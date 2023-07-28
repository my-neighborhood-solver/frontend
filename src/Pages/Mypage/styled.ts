import { styled } from "styled-components"

const Container = styled.section`
  height: 100vh;
  margin: 60px 22px;

  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h3`
  font-weight: 700;
  font-size: 22px;
  margin: 22px 0;
`

const ImgNameBox = styled.div`
  display: flex;
`

const ProBox = styled.div`
  width: 90%;
  padding: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ImgBox = styled.div`
  width: 55px;
  height: 55px;
  background-color: #b1b1b1;
  
  border-radius: 50%;
`
const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  margin: 0 8px;
`
const NameMent = styled.span`
  font-weight: 800;
  font-size: 18px;
`
const LocationMent = styled.span`
  font-size: 12px;
`
const ProEditBtn = styled.button`
  padding: 8px;
  border: 0;
  border-radius: 12px;
  background-color: #F5F5F5;
  font-weight: 700;
  cursor: pointer;
`

const UserDosBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 6%;
  margin: 4px 2px;
  border: 0;
  border-radius: 12px;
  background-color: #E4E4E4;
`

const MannerBox = styled.div`
  display: flex;
  justify-content: space-between;
`
const MannerTitle = styled.span`
  font-size: 18px;
  font-family: var(--font-nanumfontB);
`

const MannerNumberBox = styled.div`
  display: flex; 
  align-items: baseline;
`

const BigMent = styled.span`
  font-size: 22px;
  font-family: var(--font-nanumfontB);
  padding: 0 2px;
`

const SmMent = styled.span`
  font-size: 14px;
`

const HashtagBox = styled.div`
`

const LikeTitle = styled.span`
  font-size: 18px;
  font-family: var(--font-nanumfontB);
`
const MentBox = styled.div`
  display: flex; 
  justify-content: space-between; 
  align-items: center;
`
const LikeEditBtn = styled.button`
  padding: 4px;
  border: 0;
  border-bottom: 1px dashed #000;
  background-color: #E4E4E4;  
  font-weight: 700;
  cursor: pointer;
`

const HashtagList = styled.div`
  max-width: 269px;
  padding: 8px 0;

  display: flex;
  flex-wrap: wrap;
`

const Tagment = styled.span`
  padding: 8px;
  margin: 4px;
  border: 0;
  border-radius: 6px;
  background-color: #fff;
  font-size: 12px;
  font-weight: 700;
`

const ListBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ListTitle = styled.span`
  font-size: 18px;
  font-family: var(--font-nanumfontB);
`

const ListBtn = styled.button`
  border: 0;
  background-color: #E4E4E4;  
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`
const LogoutBox = styled.div`
  width: 95%;
  display: flex;
  justify-content: flex-end;
`
const LogoutButton = styled.button`
  padding: 3px 0;
  background-color: #fff;
  border: 0;
  border-bottom: 1px solid #000;
  cursor: pointer;
`
const BtnBox = styled.div`
  width: 95%;
  margin-top: 18%;
  display: flex;
  justify-content: flex-end;
`

const UserleaveButton = styled.button`
  padding: 6px 12px;
  border: 0;
  border-radius: 6px;
  background-color: #000;
  color: #fff;

  cursor: pointer;
`

const LocationBtnBox = styled.div`
  width: 85%;
`

const LocationSetingBtn = styled.button`
  width: 100%;
  margin: 8px 0;
  padding: 10px;
  border-radius: 6px;
  border: 0;

  background-color: #0089B5;
  color: #fff;

  font-size: 16px;
  font-weight: 700;

  cursor: pointer;
`

export const SC = { Container, Title, ProBox, ImgNameBox, ImgBox, NameBox, NameMent, LocationMent, ProEditBtn, UserDosBox, MannerBox, MannerTitle,MannerNumberBox, BigMent, SmMent,HashtagBox, MentBox, LikeTitle, LikeEditBtn,HashtagList,Tagment, ListBox, ListTitle, ListBtn, BtnBox, UserleaveButton, LogoutBox, LogoutButton, LocationSetingBtn, LocationBtnBox}
