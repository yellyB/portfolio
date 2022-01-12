import React from "react";
import { Row, Col, Slider, Image, Typography, Card } from "antd";

const { Text } = Typography;

const gridStyle = {
  width: "25%",
  textAlign: "center",
};

//TODO: js 빼고 html+css 만 묶기 / c++ c# 합치기
const Skills = () => {
  const skills = [
    {
      title: "major skills",
      list: [
        { name: "react", height: "79%" },
        { name: "typescript", height: "79%" },
        { name: "mobx", height: "53%" },
        { name: "nodejs" },
        { name: "javascript", height: "79%" },
        { name: "htmlcss" },
        { name: "mssql" },
        // { name: "css", height: "50%" },
        // { name: "html", height: "70%" },
        // { name: "jquery", height: "70%" },
      ],
    },
    {
      title: "minor skills",
      list: [
        { name: "python" },
        { name: "csharpcpp" },
        { name: "spring" },
        // { name: "css", height: "50%" },
        // { name: "html", height: "70%" },
        // { name: "jquery", height: "70%" },
        // { name: "mobx", height: "60%" },
      ],
    },
    {
      title: "Tools",
      list: [
        { name: "git" },
        { name: "jenkins" },
        { name: "slack" },
        { name: "jira" },
      ],
    },
  ];

  return (
    <React.Fragment>
      <Row justify="center">
        {skills.map((item: { title: string; list: any[] }) => (
          <Col span={16}>
            <Card
              title={item.title}
              hoverable={true}
              style={{ marginBottom: 10 }}
            >
              {item.list.map((lists: { name: string; height?: string }) => (
                <Card.Grid hoverable={false} style={gridStyle}>
                  <Image
                    width={lists.height ? lists.height : "80%"}
                    preview={false}
                    src={
                      process.env.PUBLIC_URL +
                      "/images/skills/" +
                      lists.name +
                      ".png"
                    }
                  />
                </Card.Grid>
              ))}
            </Card>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default Skills;
