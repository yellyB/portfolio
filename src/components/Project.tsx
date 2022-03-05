import React, { useState, useEffect } from "react";
import { Row, Col, Card, Carousel, Image, Menu, Dropdown } from "antd";
import Link from "antd/lib/typography/Link";
import {
  GlobalOutlined,
  GithubOutlined,
  YoutubeFilled,
  DownOutlined,
} from "@ant-design/icons";

const imageWidth = "95%";
const imageHeight = "95%";

const Project = (props: { sideKey: string }) => {
  const { sideKey } = props;

  const [isChanged, setIsChanged] = useState<boolean>(false);

  const newPage = (url: string) => {
    window.open(url, "_blank");
  };

  const menu = (
    <Row style={{ padding: 10, border: "1px solid #48352c" }}>
      <Col span={24}>ㆍ업무 자동화</Col>
      <Col span={22} offset={2}>
        - 팀 내에서 처리하는 반복 작업들을 자동화 메뉴로 제작
      </Col>
      <Col span={24}>ㆍ휴가 시스템 개편</Col>
      <Col span={24} offset={2}>
        - 효율적인 근태 관리를 위해 전체 로직 전면 수정{" "}
      </Col>
      <Col span={24} offset={2}>
        - 기존 DB테이블 재설계
      </Col>
      <Col span={24}>ㆍ매출목표 관리 </Col>
      <Col span={24} offset={2}>
        - 기존의 수기 입력 작업을 엑셀 업로드로 대량 데이터 등록 개발
      </Col>
      <Col span={24}>ㆍ사용자 개인화 </Col>
      <Col span={24} offset={2}>
        - 메뉴 즐겨찾기/테이블 컬럼설정 개인화 등 사용자 편의 기능 개발
      </Col>
    </Row>
  );

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
            <p>React / TypeScript / mobX / Express / Jenkins</p>
            <p>RESTful API를 통한 웹 서비스</p>
            <p>EsLint와 Prettier 사용으로 일관성있는 코드 유지</p>
            <p>페어 코드 리뷰를 통한 코드 품질 관리</p>
            <p>구버전 대비 서버 스펙 50% 낮추는 효과 달성(비용 절감 이슈)</p>
            <Dropdown
              overlay={menu}
              trigger={["click"]}
              placement="bottomCenter"
            >
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                서브 프로젝트 <DownOutlined />
              </a>
            </Dropdown>
          </Col>
        </Row>
      </Card>
      <Card title="Whether" className="project_card_grid">
        <Row>
          <Col span={15}>
            <Image.PreviewGroup>
              <Carousel autoplay>
                {Array.from({ length: 4 }, (v, i) => i).map((i: number) => (
                  <Image
                    width={imageWidth}
                    height={imageHeight}
                    src={
                      process.env.PUBLIC_URL + "/images/whether/" + i + ".png"
                    }
                  />
                ))}
              </Carousel>
            </Image.PreviewGroup>
          </Col>
          <Col span={9}>
            <p style={{ fontFamily: "nexonGothic_Bold" }}>
              날씨 별 옷차림 추천 서비스
            </p>
            <p>React / TypeScript</p>
            <p>공공데이터 API를 이용한 프로젝트</p>
            <p>PC, 모바일, 태블릿 등 반응형 웹 개발</p>
            <p>HTML의 canvas를 이용해 chart 직접 구현</p>
            <p>proxy설정 및 cors에러 해결</p>
            <p>
              - URL:{" "}
              <Link onClick={() => newPage("https://yellyb.github.io/whether")}>
                <GlobalOutlined /> whether
              </Link>
            </p>
            <p>
              - 소스:{" "}
              <Link
                onClick={() => newPage("https://github.com/yellyB/whether")}
              >
                <GithubOutlined /> whether
              </Link>
            </p>
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
              개인 프로젝트: 영화 예매 {"&"} 리뷰 및 커뮤니티 서비스
            </p>
            <p>React / TypeScript / Redux </p>
            <p>프로젝트의 생성부터 배포까지 경험</p>
            <p>redux를 이용한 store관리</p>
            <p>react-router 라이브러리 사용을 제한하고 개발</p>
            <p>
              - URL:{" "}
              <Link onClick={() => newPage("https://yellyb.github.io/cinema")}>
                <GlobalOutlined /> cinema
              </Link>
            </p>
            <p>
              - 소스:{" "}
              <Link onClick={() => newPage("https://github.com/yellyB/cinema")}>
                <GithubOutlined /> cinema
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
                <GlobalOutlined /> portfolio
              </Link>
            </p>
            <p>
              - 소스:{" "}
              <Link
                onClick={() => newPage("https://github.com/yellyB/portfolio")}
              >
                <GithubOutlined /> portfolio
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
              에이콘 아카데이 파이널 프로젝트(3人)
            </p>
            <p>음식 주문-픽업 서비스</p>
            <p>Spring Framework / javascript / JAVA</p>
            <p>회원가입, 로그인, 관리자페이지, 장바구니, 리뷰 기능 등 담당</p>

            <p>
              - 소스:{" "}
              <Link
                onClick={() => newPage("https://github.com/030ii/Forkcook")}
              >
                <GithubOutlined /> Forkcook
              </Link>
            </p>
            <p>- 시연 영상</p>
            <p style={{ marginLeft: 20 }}>
              사용자:{" "}
              <Link onClick={() => newPage("https://youtu.be/Q4Bu8XLQ9DE")}>
                <YoutubeFilled /> user ver
              </Link>
            </p>
            <p style={{ marginLeft: 20 }}>
              관리자:{" "}
              <Link onClick={() => newPage("https://youtu.be/eoVJOaR-1sY")}>
                <YoutubeFilled /> manager ver
              </Link>
            </p>
          </Col>
        </Row>
      </Card>
    </React.Fragment>
  );
};

export default Project;
