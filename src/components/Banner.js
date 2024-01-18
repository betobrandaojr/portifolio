import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const TextAnimator = ({ toRotate, period }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [text, isDeleting, loopNum, toRotate, period]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [tick, delta]);

  return <span className="wrap">{text}</span>;
};

export const Banner = () => {
  const toRotate = ["Desenvolvedor Full Stack", "Analista de sistemas", "DBA", "Gestor de Projetos"];
  const period = 1000;

  return (
    <div className="content">
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Seja bem vinde ao meu portifólio!</span>
                  <h1>
                    Olá, eu sou <span style={{ color: '#8A2BE2' }}>Paulo Brandão</span> e eu trabalho como:
                  </h1>
                  <h1>
                    <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Desenvolvedor Full Stack","Analista de sistemas", "DBA", "Gestor de Projetos" ]'>
                      <TextAnimator toRotate={toRotate} period={period} />
                    </span>
                  </h1>
                    <p>Sou um analista de sistemas e desenvolvedor Full Stack com ampla experiência em uma variedade de tecnologias. No back-end, possuo habilidades aprofundadas em Node.js, Java/Spring Boot e .Net, complementadas por um conhecimento robusto em linguagens de consulta e manipulação de banco de dados, como PL/SQL. Além disso, tenho  grande experiência com  sistemas de gerenciamento de banco de dados como: PostgreSQL, SQL Server, MySQL e MongoDB. No front-end, trabalho com React, Angular e Vue.js. Atualmente, lidero uma equipe de desenvolvedores, onde promovo um ambiente colaborativo de aprendizado e enfrentamento de desafios, desde os mais simples aos mais complexos. Minha paixão pela tecnologia me motiva a contribuir para o crescimento e desenvolvimento do setor.</p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  );
};



