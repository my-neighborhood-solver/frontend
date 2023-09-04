import { styled } from "styled-components";


export const SkeletonItem = styled.div`
    width: 100%;
    height: 30px;
    background-color: #f2f2f2;
    position: relative;
    border-radius: 4px;
    @keyframes skeleton-gradient {
    0% {
        background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
        background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
        background-color: rgba(165, 165, 165, 0.1);
    }
    }
`

export const HashTag = styled.div`
    padding: 10px 8px 6px 8px;
    margin: 2px;
    border-radius: 8px;
    background-color: rgb(241, 241, 241);
    font-weight: 700;
    font-size: 16px;
    display: flex;
`
export const HashTagCancel = styled.div`
    cursor: pointer;
    padding-left: 10px;
`

export const HashTagSubBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 3px 6px;
`

export const HiddenInput = styled.input.attrs({
    type: "file",
    accept: "image/*",
})`
    position: absolute;
    z-index: 1;
    opacity: 0;
    height: 80px;
    width: 90px;
    cursor: pointer;
`

export const DeleteButton = styled.div`
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    top: -10px;
    right: 0;
    font-size: 20px;
    cursor: pointer;
    color: red;
`

export const ImagesBox = styled.div`
    width: 100%;
    display: flex;
    gap: 6%;
    overflow-x: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const CustomButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 82%;
    min-width: 25%;
    background-color: rgb(241, 241, 241);
    border-radius: 10px;
    border: none;
    font-size: 50px;
    margin-right: 12px;
`

export const Container = styled.section`
    height: 90vh;
    width: 330px;
    margin: 60px 22px;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 0.1em;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: transparent;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
`;
    
export const ImgBox = styled.div`
    height: 16%;
    display: flex;
    overflow-x: scroll;
    width: 100%;
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

export const Image = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 82%;
    width: 90px;
    background-color: rgb(241, 241, 241);
    border-radius: 10px;
`
export const Title = styled.h3`
    margin-bottom: 5px;
    font-weight: 700;
`;
export const TitleBox = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-bottom: 15px;
`;
export const TitleInput = styled.input`
    height: 30px;
    border-radius: 10px;
    border: 1px solid gray;
    outline: none;
    padding: 0 2%;
    font-weight: 600;
`;

export const PayBox = styled.div`
    width: 100%;
    margin-bottom: 20px;
`;

export const PaySubBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const PayDivision = styled.select`
    width: 24%;
    height: 40px;
    border: none;
    background-color: rgb(241, 241, 241);
    margin-right: 14px;
    padding: 4px;
    border-radius: 10px;
    outline: none;
    font-size: 14px;
    font-family: var(--font-nanumfont);
    font-weight: 700;
`
export const PayInput = styled.input`
    height: 34px;
    width: 100%;
    border-radius: 10px;
    border: 1px solid gray;
    outline: none;
    padding: 0 2%;
    font-weight: 600;
`
export const ContentBox = styled.div`
    width: 100%;
    height: 30%;
    margin-bottom: 20px;
`

export const Content = styled.textarea`
    width: 100%;
    height: 100%;
    resize: none;
    border: 1px solid gray;
    box-sizing: border-box;
    border-radius: 12px;
    padding: 12px;
    font-family: var(--font-nanumfont);
    font-weight: 600;
    outline: none;
`;
export const HashtagBox = styled.div`
    width: 94%;
    height: 8%;
`
export const HashtagInput = styled.input`
    width: 100%;
    height: 30px;
    border-radius: 10px;
    border: 1px solid gray;
    outline: none;
    padding: 1% 2%;
    margin: 3px 0;
    font-weight: 600;
`;

export const SubmitBox = styled.div`
    display: flex;
    width: 100%;
    height: 20%;
    /* border: 0; */
    justify-content: center;
`

export const SubmitButton = styled.button`
    width: 80%;
    height: 30%;
    border-radius: 10px;
    border: 0;
    background-color: rgb(0, 137, 181);
    color: white;
    font-size: 15px;
    cursor: pointer;
`;
