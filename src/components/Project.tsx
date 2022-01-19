import React, { useState, useEffect } from "react";
import { Row, Col, Card, Carousel, Image } from "antd";
import Link from "antd/lib/typography/Link";

const imageWidth = "95%";
const imageHeight = "95%";

const Project = (props: { sideKey: string }) => {
  const { sideKey } = props;

  const [isChanged, setIsChanged] = useState<boolean>(false);

  const newPage = (url: string) => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    setIsChanged(sideKey === "#PROJECT" ? true : false);
  }, [sideKey]);

  return (
    <React.Fragment>
      <Card title="패션플러스 Admin" className="project_card_grid">
        <Row>
          <Col span={15}>
            <Image.PreviewGroup>
              <Carousel autoplay>
                {Array.from({ length: 10 }, (v, i) => i).map((i: number) => (
                  <Image
                    width={imageWidth}
                    height={imageHeight}
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
            <p style={{ fontFamily: "nexonGothic_Bold" }}>
              VB로 개발된 레거시 응용프로그램을 웹서비스로 컨버팅
            </p>
            <p>React /TypeScript / mobX / Express / Jenkins</p>
            <p>RESTful API를 통한 웹 서비스</p>
            <p>mobX를 통해 메뉴 검색, 즐겨찾기, 알림 등 store관리</p>
            {/* <p>
              테이블 내 수정, 전체 데이터 복사 붙여넣기 등 Excel과 비슷한 작업
              환경 제공
            </p> */}
            <p>건 수 별 로딩을 통해 상세 진행 결과 가시적 표시</p>
            <p>
              사용자 개인별 메뉴 즐겨찾기와 테이블 컬럼설정 개인화 기능 개발
            </p>
            {/* <p>엑셀파일 업로드로 대량 데이터 등록 및 수정</p> */}
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
                    width={imageWidth}
                    height={imageHeight}
                    src={
                      process.env.PUBLIC_URL + "/images/cinema/" + i + ".png"
                    }
                  />
                ))}
              </Carousel>
            </Image.PreviewGroup>
          </Col>
          <Col span={9}>
            <p style={{ fontFamily: "nexonGothic_Bold" }}>
              토이 프로젝트: 영화 예매 + 리뷰와 커뮤니티 서비스
            </p>
            <p>React / TypeScript / Redux </p>
            <p>프로젝트의 생성부터 배포까지 경험</p>
            <p>redux를 이용한 store관리</p>
            <p>react-router를 이용하지 않고 페이지 관리</p>
            <p>
              -URL:{" "}
              <Link onClick={() => newPage("https://yellyb.github.io/cinema")}>
                yellyb.github.io/cinema
              </Link>
            </p>
            <p>
              소스코드:{" "}
              <Link onClick={() => newPage("https://github.com/yellyB/cinema")}>
                github.com/yellyB/cinema
              </Link>
            </p>
          </Col>
        </Row>
      </Card>
      <Card title="PORTFOLIO" className="project_card_grid">
        <Row>
          <Col span={15}>
            <Image.PreviewGroup>
              <Carousel autoplay>
                {Array.from({ length: 4 }, (v, i) => i).map((i: number) => (
                  <Image
                    width={imageWidth}
                    height={imageHeight}
                    src={
                      process.env.PUBLIC_URL + "/images/portfolio/" + i + ".png"
                    }
                  />
                ))}
              </Carousel>
            </Image.PreviewGroup>
          </Col>
          <Col span={9}>
            <p style={{ fontFamily: "nexonGothic_Bold" }}>
              포트폴리오 제작용 프로젝트
            </p>
            <p>React / typescript</p>
            <p>
              - URL:{" "}
              <Link
                onClick={() => newPage("https://yellyb.github.io/portfolio")}
              >
                yellyb.github.io/portfolio
              </Link>
            </p>
            <p>
              - 소스코드:{" "}
              <Link
                onClick={() => newPage("https://github.com/yellyB/portfolio")}
              >
                github.com/yellyB/portfolio
              </Link>
            </p>
          </Col>
        </Row>
      </Card>
      <Card title="FORK COOK" className="project_card_grid">
        <Row>
          <Col span={15}>
            <Image.PreviewGroup>
              <Carousel autoplay>
                {Array.from({ length: 15 }, (v, i) => i).map((i: number) => (
                  <Image
                    width={imageWidth}
                    height={imageHeight}
                    src={
                      process.env.PUBLIC_URL + "/images/forkcook/" + i + ".png"
                    }
                  />
                ))}
              </Carousel>
            </Image.PreviewGroup>
          </Col>
          <Col span={9}>
            <p style={{ fontFamily: "nexonGothic_Bold" }}>
              에이콘 아카데이 파이널 프로젝트
            </p>
            <p>음식 주문-픽업 서비스</p>
            <p>Spring Framework / javascript / JAVA</p>
            <p>회원가입, 로그인, 관리자페이지, 장바구니, 리뷰 기능 등 담당</p>

            <p>
              - 소스코드:{" "}
              <Link
                onClick={() => newPage("https://github.com/030ii/Forkcook")}
              >
                github.com/030ii/Forkcook
              </Link>
            </p>
            <p>- 시연 영상</p>
            <p style={{ marginLeft: 20 }}>
              사용자:{" "}
              <Link onClick={() => newPage("https://youtu.be/Q4Bu8XLQ9DE")}>
                youtu.be/Q4Bu8XLQ9DE
              </Link>
            </p>
            <p style={{ marginLeft: 20 }}>
              관리자:{" "}
              <Link onClick={() => newPage("https://youtu.be/eoVJOaR-1sY")}>
                youtu.be/eoVJOaR-1sY
              </Link>
            </p>
          </Col>
        </Row>
      </Card>
    </React.Fragment>
  );
};

export default Project;
