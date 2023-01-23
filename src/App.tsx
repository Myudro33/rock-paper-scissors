import React from "react";
import "animate.css";
import "./App.css";
import {
  Container,
  Header,
  Img,
  Score,
  ScoreTitle,
  ScoreNumber,
  Wrapper,
  TriangleImg,
  ChooseImg,
  ImgWrapper,
  Image,
  Rules,
  ModalContainer,
  ModalTop,
  ModalTitleMobile,
  ModalCloseMobile,
  GetWinnerWrapper,
  EmptyCircles,
  Result,
  EmptyCircleWrapper,
  Button,
  EmptyCircleTitle,
  EmptyCircleTitleMobile,
  ResultMobile,
  SimpleWrapper,
} from "./Components/Container";
import logo from "./images/logo.svg";
import triangle from "./images/bg-triangle.svg";
import paper from "./images/icon-paper.svg";
import rock from "./images/icon-rock.svg";
import scissors from "./images/icon-scissors.svg";
import close from "./images/icon-close.svg";
import rules from "./images/image-rules.svg";
import { useState } from "react";

const App = () => {
  const [score, setscore] = useState<number>(0);
  const [choice, setchoice] = useState<number>(0);
  const [rulesModal, setrulesModal] = useState<boolean>(false);
  const [chooseTime, setchooseTime] = useState(true);
  const [randomNumber, setrandomNumber] = useState<number>(0);
  const [result, setresult] = useState("");
  const data = [
    {
      theme: "#1d4ed8",
      top: "230px",
      left: "500px",
      border: "10px solid #0a33a4",
      src: paper,
      mobileLeft: "30px",
    },
    {
      theme: "#ffa72b",
      top: "230px",
      left: "780px",
      border: "10px solid #834e05",
      src: scissors,
      mobileLeft: "240px",
    },
    {
      theme: "#b91c1c",
      top: "460px",
      left: "640px",
      border: "10px solid #870707",
      src: rock,
      mobileLeft: "140px",
    },
  ];
  const selectChoice = (index: number) => {
    setresult("");
    setchoice(0);
    setrandomNumber(0);
    setchoice(index);
    setchooseTime(false);
    const random = Number(Math.random() * 2);
    setrandomNumber(Number(random.toFixed(0)));
    if (index === Number(random.toFixed(0))) {
      setresult("DRAW");
    } else if (index === 0 && Number(random.toFixed(0)) === 1) {
      setresult("YOU LOSE");
      setTimeout(() => {
        setscore((score) => score - 1);
      }, 2000);
    } else if (index === 0 && Number(random.toFixed(0)) === 2) {
      setresult("YOU WIN");
      setTimeout(() => {
        setscore((score) => score + 1);
      }, 2000);
    } else if (index === 1 && Number(random.toFixed(0)) === 0) {
      setresult("YOU WIN");
      setTimeout(() => {
        setscore((score) => score + 1);
      }, 2000);
    } else if (index === 1 && Number(random.toFixed(0)) === 2) {
      setresult("YOU LOSE");
      setTimeout(() => {
        setscore((score) => score - 1);
      }, 2000);
    } else if (index === 2 && Number(random.toFixed(0)) === 0) {
      setresult("YOU LOSE");
      setTimeout(() => {
        setscore((score) => score - 1);
      }, 2000);
    } else if (index === 2 && Number(random.toFixed(0)) === 1) {
      setresult("YOU WIN");
      setTimeout(() => {
        setscore((score) => score + 1);
      }, 2000);
    }
  };
  console.log("random", randomNumber);

  return (
    <Container>
      <Header>
        <Img src={logo} alt="logo" />
        <Score>
          <ScoreTitle>SCORE</ScoreTitle>
          <ScoreNumber>{score}</ScoreNumber>
        </Score>
      </Header>
      {chooseTime ? (
        <Wrapper>
          <TriangleImg src={triangle} alt="" />
          {data.map((item, index) => (
            <ChooseImg
              onClick={() => selectChoice(index)}
              key={index}
              theme={item.theme}
              top={item.top}
              left={item.left}
              border={item.border}
              mobileLeft={item.mobileLeft}
            >
              <ImgWrapper>
                <Image src={item.src} />
              </ImgWrapper>
            </ChooseImg>
          ))}
        </Wrapper>
      ) : (
        <GetWinnerWrapper>
          <SimpleWrapper>
            <EmptyCircleWrapper>
              <EmptyCircleTitle>You Picked</EmptyCircleTitle>
              <EmptyCircles
                animation={result === "YOU WIN" && "pulse 3s infinite"}
              >
                <ChooseImg
                  className="animate__animated animate__fadeIn"
                  theme={data[choice].theme}
                >
                  <ImgWrapper>
                    <Image src={data[choice].src} />
                  </ImgWrapper>
                </ChooseImg>
              </EmptyCircles>
              <EmptyCircleTitleMobile>You Picked</EmptyCircleTitleMobile>
            </EmptyCircleWrapper>

            <Result
              className="animate__animated animate__fadeIn"
              style={{ animationDelay: "1.5s" }}
            >
              <h1 style={{ fontSize: "50px", color: "white" }}>{result}</h1>
              <Button onClick={() => setchooseTime(true)}>PLAY AGAIN</Button>
            </Result>
            <EmptyCircleWrapper>
              <EmptyCircleTitle>House Picked</EmptyCircleTitle>
              <EmptyCircles
                animation={result === "YOU LOSE" && "pulse 3s infinite"}
              >
                <ChooseImg
                  style={{ animationDelay: "1s" }}
                  className="animate__animated animate__fadeIn"
                  theme={data[randomNumber].theme}
                >
                  <ImgWrapper>
                    <Image src={data[randomNumber].src} />
                  </ImgWrapper>
                </ChooseImg>
              </EmptyCircles>
              <EmptyCircleTitleMobile>House Picked</EmptyCircleTitleMobile>
            </EmptyCircleWrapper>
          </SimpleWrapper>
          <ResultMobile
            className="animate__animated animate__fadeIn"
            style={{ animationDelay: "1.5s" }}
          >
            <h1 style={{ color: "white",fontSize:'60px' }}>{result}</h1>
            <Button onClick={() => setchooseTime(true)}>PLAY AGAIN</Button>
          </ResultMobile>
        </GetWinnerWrapper>
      )}
      <Rules onClick={() => setrulesModal(true)}>RULES</Rules>
      {rulesModal && (
        <ModalContainer>
          <ModalTitleMobile>RULES</ModalTitleMobile>
          <ModalTop>
            <h2>RULES</h2>
            <img src={close} onClick={() => setrulesModal(false)} alt="close" />
          </ModalTop>
          <img style={{ width: "90%" }} src={rules} alt="" />
          <ModalCloseMobile src={close} onClick={() => setrulesModal(false)} />
        </ModalContainer>
      )}
    </Container>
  );
};

export default App;
