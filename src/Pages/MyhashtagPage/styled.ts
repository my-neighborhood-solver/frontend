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

export const InputBox = styled.div`
  position: relative;
  width: 95%;
  display: flex;
`
export const HashtagInput = styled.input`
  width: 80%;
  margin: 0 auto;
  padding: 6px;
  border:0;
  border-bottom: 1px solid #000;
  font-weight: 600;

  outline: none;
`

export const InputBtn = styled.button`
  position: absolute;
  right: 32px;
  margin-top: 4px;
  border: 0;
  background-color: transparent;
  font-size: 14px;
  font-family: var(--font-nanumfontEB);
  font-weight: 600;

  cursor: pointer;
`

export const HashtagListBox = styled.div`
  margin: 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ListTitle = styled.h4`
  font-size: 15px;
  font-family: var(--font-nanumfontB);
`

export const ListBox = styled.div`
  max-width: 269px;
  min-width: 269px;
  padding: 8px 14px;
  margin: 14px 8px;

  display: flex;
  flex-wrap: wrap;
  border-radius: 12px;
  background-color: #f5f5f5;
`

export const HashtageBox = styled.div`
  padding: 8px;
  margin: 8px;
  border: 0;
  border-radius: 10px;
  background-color: #fff;
`

export const HashtagMent = styled.span`
  font-size: 12px;
  font-weight: 700;
`

export const DeleteButton = styled.span`
  padding: 4px;
  border: 0;
  background-color: transparent;
  color: red;

  font-size: 12px;
  font-weight: 700;

  cursor: pointer;
`