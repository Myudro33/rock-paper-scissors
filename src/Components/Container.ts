import styled from "styled-components";









export const SimpleWrapper = styled.div`
display: flex;
@media screen and (max-width: 400px) {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
`

export const Button = styled.button`
  width: 150px;
  height: 50px;
  background-color: white;
  border-radius: 8px;
  border: none;
  color: red;
  font-size: 20px;
  margin-top: 20px;
`;


export const ResultMobile =styled.div`
 display: none;
 @media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`


export const Result = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 400px) {
    display: none;
  }
`;

export const EmptyCircleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EmptyCircleTitleMobile = styled.h1`
  display: none;
  @media screen and (max-width: 400px) {
    display: flex;
    margin: 20px 0px;
    color: white;
    font-size: 18px;
  }
`;

export const EmptyCircleTitle = styled.h1`
  margin: 20px 0px;
  color: white;
  @media screen and (max-width: 400px) {
    display: none;
  }
`;

export const EmptyCircles = styled.div<any>`
  background-color: #15183c;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  border-top: 5px solid #0e1133;
  animation: ${(props) => props.animation};
  animation-delay: 2s;
  @-webkit-keyframes pulse {
    0% {
      -webkit-box-shadow: 120 0 0 90 rgba(204, 169, 44, 1);
    }
    70% {
      -webkit-box-shadow: 320 40 0 10px rgba(204, 169, 44, 1);
    }
    100% {
      -webkit-box-shadow: 0 20 0 320 rgba(204, 169, 44, 1);
    }
  }
  @keyframes pulse {
    0% {
      -moz-box-shadow: 0 0 210 2 rgba(103, 242, 209, 0.1);
      box-shadow: 0 0 0 0 rgba(103, 242, 209, 0.1);
    }
    70% {
      -moz-box-shadow: 0 84 0 30px rgba(103, 242, 209, 0.1);
      box-shadow: 0 0 0 50px rgba(103, 242, 209, 0.1);
    }
    100% {
      -moz-box-shadow: 0 23 0 0 rgba(103, 242, 209, 0.1);
      box-shadow: 0 0 77 0 rgba(103, 242, 209, 0.1);
    }
  }
  @media screen and (max-width: 400px) {
    width: 120px;
    height: 120px;
  }
`;

export const GetWinnerWrapper = styled.div`
  width: 60%;
  height: 450px;
  margin-top: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 400px) {
    width: 90%;
    flex-direction: column;
  }
`;

export const ModalCloseMobile = styled.img`
  display: none;
  @media screen and (max-width: 400px) {
    display: flex;
    margin-top: 100px;
  }
`;

export const ModalTitleMobile = styled.h1`
  display: none;
  @media screen and (max-width: 400px) {
    display: flex;
    margin: 50px 0px;
  }
`;

export const ModalTop = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 400px) {
    display: none;
  }
`;

export const ModalContainer = styled.div`
  width: 460px;
  height: 450px;
  background-color: #f3f4f6;
  border-radius: 10px;
  padding: 15px;
  position: absolute;
  margin: 150px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 400px) {
    width: 100vw;
    height: 100vh;
    margin: 0;
  }
`;

export const Rules = styled.div`
  align-self: flex-end;
  width: 130px;
  height: 50px;
  border: 1px solid white;
  border-radius: 10px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  &:hover {
    border: 1px solid gray;
    cursor: pointer;
  }
  @media screen and (max-width: 400px) {
    align-self: center;
    margin-top: 30px;
  }
`;

export const Image = styled.img`
  width: 40%;
  height: 50%;
`;
export const ImgWrapper = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
  border-top: 5px solid #a7b7c2;
`;

export const ChooseImg = styled.div<any>`
  background-color: ${(props) => props.theme};
  width: 170px;
  height: 170px;
  border-radius: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${(props) => props.border};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  &:hover {
    cursor: pointer;
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  }
  @media screen and (max-width: 400px) {
    width: 120px;
    height: 120px;
    left: ${(props) => props.mobileLeft};
  }
`;

export const TriangleImg = styled.img`
  width: 290px;
  height: 260px;
  @media screen and (max-width: 400px) {
    width: 230px;
    height: 220px;
  }
`;

export const Wrapper = styled.div`
  width: 60%;
  height: 450px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;

export const ScoreNumber = styled.h1`
  font-size: 50px;
  color: #64748b;
  @media screen and (max-width: 400px) {
    font-size: 30px;
  }
`;

export const ScoreTitle = styled.p`
  color: #1d4ed8;
  letter-spacing: 2px;
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;

export const Score = styled.div`
  width: 120px;
  height: 100%;
  padding: 5px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 400px) {
    width: 80px;
  }
`;

export const Img = styled.img`
  @media screen and (max-width: 400px) {
    width: 40%;
    height: 90%;
  }
`;

export const Container = styled.div`
  background-image: radial-gradient(
    circle at center top,
    hsl(214, 47%, 23%),
    hsl(237, 49%, 15%)
  );
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  width: 50%;
  height: 130px;
  margin-top: 20px;
  border-radius: 20px;
  border: 2px solid white;
  display: flex;
  padding: 15px;
  justify-content: space-between;
  @media screen and (max-width: 400px) {
    width: 80%;
    height: 100px;
  }
`;
