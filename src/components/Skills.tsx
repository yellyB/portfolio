import React from "react";
import { Row, Col, Slider, Image, Typography } from "antd";

const { Text } = Typography;

const Skills = () => {
  const skills = [
    { skill: "react", level: 100 },
    { skill: "nodejs", level: 90 },
    { skill: "typescript", level: 90 },
    { skill: "javascript", level: 100 },
    { skill: "python", level: 60 },
    { skill: "mssql", level: 70 },
  ];

  return (
    <React.Fragment>
      <Row>
        <Col span={24}>
          {skills.map((item: any) => (
            <Image
              width={200}
              // height={200}
              src={
                process.env.PUBLIC_URL + "/images/skills/" + item.skill + ".png"
              }
            />
          ))}
        </Col>
        <Col span={24}>
          {skills.map((item: any) => (
            <>
              <Text>{item.skill}</Text>
              <Slider defaultValue={item.level} disabled={true} />
            </>
          ))}
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Skills;
