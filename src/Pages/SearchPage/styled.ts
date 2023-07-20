import { styled } from "styled-components";

export const Container = styled.section`
    height: 100vh;
    width: 330px;
    margin: 60px 22px;
    padding-top: 30px;
`;

export const Searchbar = styled.div`
    width: 100%;
    height: 4%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

export const SearchInput = styled.input`
    width: 85%;
    height: 100%;
    border-radius: 10px;
    border: none;
    background-color: lightgray;
    outline: none;
    font-size: 20px;
    padding-left: 10px;
`;

export const SearchList = styled.li`
    width: 100%;
    height: 70%;
    list-style:none;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 0.5em;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: transparent;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
`;

export const SearchItem = styled.ul`
    width: 100%;
    height: 90px;
    border: 1px solid lightgray;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`;

export const SearchSubBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
`;

export const SearchTitle = styled.h2`
    margin: 0;
    font-size: 20px;
    margin-bottom: 10px;
    color: black;
`;

export const SearchHashtag = styled.div`
    font-size: 15px;
    color: gray;
`;

export const SearchPrice = styled.div`
    font-size: 15px;
    font-weight: bold;  
    color: black;
`;

export const SearchImage = styled.img`
    width: 20%;
    height: 100%;
    border-radius: 0 10px 10px 0;
`;