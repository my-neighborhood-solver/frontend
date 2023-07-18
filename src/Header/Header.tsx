import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.div`
  .modalHeader {
    position: absolute;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-around;
    top: 8px;
    gap: 126px;
    z-index: 10;
    font-size: 12px;
    top: 0;
  }

  h2:hover{
    cursor: pointer;
  }
`;

const MentBox =  styled.div`
  display: flex;
`

const Blue = styled.h2`
  padding: 0 4px;
  color: #0089B5;
`

const Header: React.FC = () => {
    return ReactDOM.createPortal(
      <StyledHeader>
        <div className="modalHeader">
          <Link to="/" style={{ textDecoration: "none", color: "#000"}}>
            <MentBox>
              <h2>우리동네</h2><Blue>해결사</Blue>
            </MentBox>
          </Link>
          <Link to="/login" style={{ textDecoration: "none", color: "#000"}}>
            <h2>로그인</h2>
          </Link>
        </div>
      </StyledHeader>,
                
      document.getElementById('modal-root')!
    );
  };
export default Header;
