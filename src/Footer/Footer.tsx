import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsPencil } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsMap } from "react-icons/bs";
import { BsChatDots } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";


const StyledFooter = styled.div`
  .modalFooter {
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 10;
    padding: 14px 0 0 0;
    border-radius: 18px 18px 0 0;

    display: flex;
    justify-content: space-around;
    align-items: flex-end;

    color: white;
    background-color: #0089B5;
  }
  
  .iconBox{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .iconBox:hover{
    cursor: pointer;
  }
`;
const Ment = styled.span`
  font-family: var(--font-nanumfontL);
  padding: 8px;
`
const Footer: React.FC = () => {
    return ReactDOM.createPortal(
      <StyledFooter>
        <div className="modalFooter">
        <Link to="/write" style={{ textDecoration: "none", color: "#fff"}}>
            <div className="iconBox">
                <BsPencil size={22}/>
                <Ment>의뢰</Ment>
            </div>
        </Link>
            <div className="iconBox">
                <BsSearch size={22}/>
                <Ment>검색</Ment>
            </div>
            <div className="iconBox">
                <BsMap size={22}/>
                <Ment>지도</Ment>
            </div>
            <div className="iconBox">
                <BsChatDots size={22}/>
                <Ment>채팅</Ment>
            </div>
            <div className="iconBox">
                <BsPersonCircle size={22}/>
                <Ment>마이</Ment>
            </div>
        </div>
      </StyledFooter>,
      document.getElementById('modal-root-footer')!
    );
  };
export default Footer;
