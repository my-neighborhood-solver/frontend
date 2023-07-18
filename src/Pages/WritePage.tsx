import { useState } from 'react';
import styled from 'styled-components';

export default function WritePage(){
    return(
        <>
        <Container>
            <ImgBox>
                <NoImage>사진 첨부</NoImage>
            </ImgBox>
            <Title>제목</Title>
            <TitleBox>
                <TitleInput></TitleInput>
            </TitleBox>
            <Title>가격</Title>
            <PriceBox>
                <PriceDetailBox>
                    <PriceCategory>
                        <option value="건당">건당</option>
                        <option value="시급">시급</option>
                    </PriceCategory>
                    <PriceInput type="number"step="500" ></PriceInput>
                </PriceDetailBox>
            </PriceBox>
            <Title>의뢰 내용</Title>
            <DescriptionBox>
                <Description></Description>
            </DescriptionBox>
            <Title>해시태그</Title>
            <HashtagBox>
                <HashtagInput></HashtagInput>
            </HashtagBox>
            <SubmitBox>
                <SubmitButton>등록하기</SubmitButton>
            </SubmitBox>
        </Container>
        </>
    )
}

const Container = styled.section`
    height: 100vh;
    width: 330px;
    margin: 60px 22px;
`;
    
const ImgBox = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    overflow: hidden;
`;

const NoImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 90px;
    background-color: rgb(241, 241, 241);
    border-radius: 10px;
`
const Title = styled.h3`
    margin-bottom: 5px;
`;
const TitleBox = styled.div`
    display: flex;
    width: 100%;;
    flex-direction: column;
    margin-bottom: 20px;
`;
const TitleInput = styled.input`
    height: 30px;
    border-radius: 10px;
    border: 0.5px solid gray;
    `;
const PriceBox = styled.div`
    width: 100%;
    margin-bottom: 20px;
    `;
const PriceDetailBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const PriceCategory = styled.select`
    width: 20%;
    height: 40px;
    border: none;
    background-color: rgb(241, 241, 241);
    font-size: 15px;
    border-radius: 10px;
`
const PriceInput = styled.input`
    height: 40px;
    width: 90%;
    font-size: 15px;
    border-radius: 10px;
    border: 1px solid gray;
`
const DescriptionBox = styled.div`
    width: 100%;
    height: 30%;
    margin-bottom: 20px;
`

const Description = styled.textarea`
    width: 100%;
    height: 100%;
    resize: none;
    border: 1px solid gray;
    box-sizing: border-box;
    `;
const HashtagBox = styled.div`
    width: 100%;
    height: 5%;
`
const HashtagInput = styled.input`
    width: 100%;
    padding: 8px;
    height: 30px;
    border-radius: 10px;
    border: 0.5px solid gray;
    `;

const SubmitBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10%;
`

const SubmitButton = styled.button`
    width: 50%;
    height: 50%;
    border: none;
    border-radius: 10px;
    background-color: rgb(0, 137, 181);
    color: white;
    font-size: 15px;
`;