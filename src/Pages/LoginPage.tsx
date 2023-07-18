import { useState } from 'react';
import styled from 'styled-components';

interface event_type {
  target: HTMLInputElement;
}

export default function LoginPage() {
  const [loginEmail, setLoginEmail] = useState('')

  console.log(loginEmail)

  return (
    <>
    <Container>
      <InputBox>
        <LoginTitle>로그인</LoginTitle>
        <EmailInput placeholder='이메일'
          onChange={(e:event_type) => {
            setLoginEmail(e.target.value)
          }}/>
        <PwInput placeholder='비밀번호'/>
        <LoginBtn>로그인</LoginBtn>
        <KakaoLoginBtn>카카오로 회원가입</KakaoLoginBtn>
      </InputBox>
      <DoscBox>
        <FindIdPw>이메일 찾기 / 비밀번호 찾기</FindIdPw>
        <Singup>회원가입</Singup>
      </DoscBox>
    </Container>
    </>
  )
}

const Container = styled.section`
  heigth: 100vh;
  margin: 60px 22px;
`

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LoginTitle =  styled.h1`
`
const EmailInput = styled.input`
  width: 80%;
  margin: 6px 0;
  padding: 8px;
  border-radius: 12px;
  border: 0;
  
  background-color: #F5F5F5;
`
const PwInput = styled.input`
  width: 80%;
  margin: 6px 0;
  padding: 8px;
  border-radius: 12px;
  border: 0;

  background-color: #F5F5F5;
`
const LoginBtn=  styled.button`
  width: 85%;
  margin: 6px 0;
  padding: 10px;
  border-radius: 6px;
  border: 0;

  background-color: #0089B5;
  color: #fff;

  font-size: 16px;
  font-weight: 700;
`
const KakaoLoginBtn = styled.button`
  width: 85%;
  margin: 6px 0;
  padding: 10px;
  border-radius: 6px;
  border: 0;

  background-color: #FDDC3F;
  color: #2E2121;
  
  font-size: 16px;
  font-weight: 700;
`
const DoscBox = styled.div`
  width: 95%;
  margin: 6px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const FindIdPw = styled.span`
  padding: 4px;
  font-size: 14px;
`
const Singup = styled.span`
  padding: 4px;
  font-size: 14px;
`
