import React, { useState, useEffect } from "react";
import { Timeline, Col, Card, Carousel, Image, Typography } from "antd";
import { ClockCircleOutlined, RightOutlined } from "@ant-design/icons";
import Zoom from "react-reveal/Zoom";

const Career = (props: { sideKey: string }) => {
  const { sideKey } = props;
  const color = "#00a2b3";

  const [isChanged, setIsChanged] = useState<boolean>(false);

  useEffect(() => {
    setIsChanged(sideKey === "#CAREER" ? true : false);
  }, [sideKey]);

  return (
    <React.Fragment>
      <Card className="career_card">
        <Timeline mode="left" className="career_card_timeline">
          <Timeline.Item
            label={
              <Zoom right cascade collapse when={isChanged}>
                2019.11 ~ ing
              </Zoom>
            }
            dot={<ClockCircleOutlined style={{ color: "#00a2b3" }} />}
            className="career_card_text"
            // color="blue"
          >
            <Zoom left cascade collapse when={isChanged}>
              패션플러스 / Full Stack Developer
            </Zoom>
          </Timeline.Item>
          <Timeline.Item
            label={
              <Zoom right cascade collapse when={isChanged}>
                2019.03 ~ 2019.08
              </Zoom>
            }
            color={color}
            className="career_card_text"
          >
            <Zoom left cascade collapse when={isChanged}>
              에이콘 아카데미(프론트엔드 개발을 위한 자바 웹 개발자 양성과정)
            </Zoom>
          </Timeline.Item>
          <Timeline.Item
            label={
              <Zoom right cascade collapse when={isChanged}>
                2019.03 ~ 2019.12
              </Zoom>
            }
            color={color}
            className="career_card_text"
          >
            <Zoom left cascade collapse when={isChanged}>
              국가평생교육진흥원 / 컴퓨터 공학 전공
            </Zoom>
          </Timeline.Item>

          <Timeline.Item
            label={
              <Zoom right cascade collapse when={isChanged}>
                2011.03 ~ 2015.12
              </Zoom>
            }
            color={color}
            className="career_card_text"
          >
            <Zoom left cascade collapse when={isChanged}>
              홍익대학교 / 프로덕트 디자인 전공
            </Zoom>
          </Timeline.Item>
        </Timeline>
      </Card>
    </React.Fragment>
  );
};

export default Career;
