import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsPencil ,BsSearch, BsMap, BsChatDots, BsPersonCircle} from "react-icons/bs";


const StyledFooter = styled.div`
  .modalFooter {
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 10;
    padding: 14px 0 0 0;
    border-radius: 18px 18px 0 0;

    display: flex;
    justify-content: space-evenly;
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
    const NowUser = sessionStorage.getItem('user')

    return ReactDOM.createPortal(
      <StyledFooter>
        <div className="modalFooter">
          {
            NowUser
            ?
            <Link to="/write" style={{ textDecoration: "none", color: "#fff"}}>
              <div className="iconBox">
                  <BsPencil size={22}/>
                  <Ment>의뢰</Ment>
              </div>
            </Link>
            :
            <div className="iconBox" onClick={() => {alert('로그인을 해주세요')}}>
              <BsPencil size={22}/>
              <Ment>의뢰</Ment>
            </div>
          }

            <Link to="/search" style={{ textDecoration: "none", color: "#fff"}}>
              <div className="iconBox">
                  <BsSearch size={22}/>
                  <Ment>검색</Ment>
              </div>
            </Link>

            <Link to="/" style={{ textDecoration: "none", color: "#fff"}}>
              <div className="iconBox">
                  <BsMap size={22}/>
                  <Ment>지도</Ment>
              </div>
            </Link>

            {/* {
              NowUser
              ?
              // <Link to="/chatting/list" style={{ textDecoration: "none", color: "#fff"}}>
                <div className="iconBox">
                  <BsChatDots size={22}/>
                  <Ment>채팅</Ment>
                </div>
              // </Link>     
              :
              <div className="iconBox" onClick={() => {alert('로그인을 해주세요')}}>
                <BsChatDots size={22}/>
                <Ment>채팅</Ment>
              </div>        
            } */}

            {
              NowUser
              ?
              <Link to="/mypage" style={{ textDecoration: "none", color: "#fff"}}>
                <div className="iconBox">
                    <BsPersonCircle size={22}/>
                    <Ment>마이</Ment>
                </div>
              </Link>
              :
              <div className="iconBox" onClick={() => {alert('로그인을 해주세요')}}>
                  <BsPersonCircle size={22}/>
                  <Ment>마이</Ment>
              </div>
            }
        </div>
      </StyledFooter>,
      document.getElementById('modal-root-footer')!
    );
  };
export default Footer;
