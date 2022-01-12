import React from "react";
import { Row, Col, Card, Carousel, Image } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  background: "#364d79",
};

const Project = () => {
  return (
    <React.Fragment>
      <Card title="패션플러스 어드민" className="project_card_grid">
        <Row>
          <Col span={15}>
            <Image.PreviewGroup>
              <Carousel autoplay>
                {Array.from({ length: 10 }, (v, i) => i).map((i: number) => (
                  <Image
                    width={640}
                    height={336}
                    src={
                      process.env.PUBLIC_URL +
                      "/images/fashionplusAdmin/" +
                      i +
                      ".png"
                    }
                  />
                ))}
              </Carousel>
            </Image.PreviewGroup>
          </Col>
          <Col span={9}>
            <p>VB로 개발된 레거시 응용프로그램을 웹서비스로 컨버팅</p>
            <p>React / typescript / Express</p>
            <p>RESTful API</p>
            <p>mobX를 통해 메뉴 검색, 즐겨찾기, 알림 등 store관리</p>
            <p>JWT를 이용한 인증 관리</p>
            <p>
              테이블 내 수정, 전체 데이터 복사 붙여넣기 등 Excel과 비슷한 작업
              환경 제공
            </p>
            <p>건 수 별 로딩을 통해 상세 진행 결과 가시적으로 보여줌</p>
          </Col>
        </Row>
      </Card>
      <Card title="BOM CINEMA" className="project_card_grid">
        <Row>
          <Col span={15}>
            <Image.PreviewGroup>
              <Carousel autoplay>
                {Array.from({ length: 10 }, (v, i) => i).map((i: number) => (
                  <Image
                    width={640}
                    height={336}
                    src={
                      process.env.PUBLIC_URL + "/images/cinema/" + i + ".png"
                    }
                  />
                ))}
              </Carousel>
            </Image.PreviewGroup>
          </Col>
          <Col span={9}>
            <p>redux를 이용한 store관리</p>
            <p>프로젝트의 생성부터 배포까지 경험</p>
            <p>react-router를 이용하지 않고 페이지 관리</p>
          </Col>
        </Row>
      </Card>
      <Card title="PORTFOLIO" className="project_card_grid">
        PORTFOLIO
      </Card>
      <Card title="포크쿡" className="project_card_grid">
        <Row>
          <Col span={15}>
            <Image.PreviewGroup>
              <Carousel autoplay>
                {Array.from({ length: 15 }, (v, i) => i).map((i: number) => (
                  <Image
                    width={640}
                    height={336}
                    src={
                      process.env.PUBLIC_URL + "/images/forkcook/" + i + ".png"
                    }
                  />
                ))}
              </Carousel>
            </Image.PreviewGroup>
          </Col>
          <Col span={9}>
            <p>에이콘 아카데이 파이널 프로젝트</p>
            <p>음식 주문-픽업 서비스</p>
            <p>Spring Framework / javascript / JAVA</p>
            <p>회원가입, 로그인, 관리자페이지, 장바구니, 리뷰 기능 등 담당</p>
          </Col>
        </Row>
      </Card>
    </React.Fragment>
  );
};

export default Project;
