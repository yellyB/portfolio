import React from "react";
import { Timeline, Col, Card, Carousel, Image } from "antd";
import { ClockCircleOutlined, RightOutlined } from "@ant-design/icons";

const Career = () => {
  const color = "#00a2b3";
  return (
    <React.Fragment>
      <Card className="career_card">
        <Timeline mode="left" className="career_card_timeline">
          <Timeline.Item
            label={"2019.11 ~ ing"}
            dot={<ClockCircleOutlined style={{ color: "#00a2b3" }} />}
            className="career_card_text"
            // color="blue"
          >
            패션플러스 / Full Stack Developer
          </Timeline.Item>
          <Timeline.Item
            label="2019.03 ~ 2019.08"
            color={color}
            className="career_card_text"
          >
            에이콘 아카데미(프론트엔드 개발을 위한 자바 웹 개발자 양성과정)
          </Timeline.Item>
          <Timeline.Item
            label="2019.03 ~ 2019.12"
            color={color}
            className="career_card_text"
          >
            국가평생교육진흥원 / 컴퓨터 공학 전공
          </Timeline.Item>

          <Timeline.Item
            label="2011.03 ~ 2015.12"
            color={color}
            className="career_card_text"
          >
            홍익대학교 / 프로덕트 디자인 전공
          </Timeline.Item>
        </Timeline>
      </Card>
    </React.Fragment>
  );
};

export default Career;
