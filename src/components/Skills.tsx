import React from "react";
import { Row, Col, Slider, Image, Typography, Card } from "antd";

const { Text } = Typography;

const gridStyle = {
  width: "100%",
  textAlign: "center",
};

const Skills = () => {
  const skills = [
    {
      title: "Front-End",
      list: [
        { name: "react" },
        { name: "nodejs" },
        { name: "typescript", height: "60%" },
        { name: "htmlcssjs" },
        // { name: "javascript", height: "60%" },
        // { name: "css", height: "50%" },
        // { name: "html", height: "70%" },
        // { name: "jquery", height: "70%" },
        // { name: "mobx", height: "60%" },
      ],
    },
    {
      title: "Back-End",
      list: [
        { name: "python" },
        { name: "csharp", height: "50%" },
        { name: "cpp", height: "50%" },
      ],
    },
    {
      title: "Database",
      list: [{ name: "mssql" }],
    },
    {
      title: "Tools",
      list: [
        { name: "git" },
        { name: "slack" },
        { name: "jira" },
        { name: "jenkins" },
      ],
    },
  ];

  const levels = [
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
        {skills.map((item: { title: string; list: any[] }) => (
          <Col span={4} offset={1}>
            <Card title={item.title} hoverable={true}>
              {item.list.map((lists: { name: string; height?: string }) => (
                <Card.Grid hoverable={false} style={gridStyle}>
                  <Image
                    width={lists.height ? lists.height : "100%"}
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
        {/* <Col span={7} offset={1}>
          <Card title="Card Title">
            {skills.map((item: any) => (
              <Card.Grid hoverable={false} style={gridStyle}>
                <Image
                  width={100}
                  // height={200}
                  preview={false}
                  src={
                    process.env.PUBLIC_URL +
                    "/images/skills/" +
                    item.skill +
                    ".png"
                  }
                />
              </Card.Grid>
            ))}
          </Card>
        </Col>
        <Col span={7} offset={1}>
          <Card title="Card Title">
            {skills.map((item: any) => (
              <Card.Grid hoverable={false} style={gridStyle}>
                <Image
                  width={100}
                  // height={200}
                  preview={false}
                  src={
                    process.env.PUBLIC_URL +
                    "/images/skills/" +
                    item.skill +
                    ".png"
                  }
                />
              </Card.Grid>
            ))}
          </Card>
        </Col> */}
      </Row>
      <Row style={{ width: "100%" }} justify="center">
        <Col span={20}>
          <Card>
            {levels.map((item: any) => (
              <>
                {item.skill !== 0 && (
                  <>
                    <Text>{item.skill}</Text>
                    <Slider defaultValue={item.level} disabled={true} />
                  </>
                )}
              </>
            ))}
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Skills;
