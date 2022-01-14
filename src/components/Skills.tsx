import React, { useState, useEffect } from "react";
import { Row, Col, Slider, Image, Typography, Card } from "antd";
import Fade from "react-reveal/Fade";

const { Text } = Typography;

const gridStyle = {
  width: "25%",
  textAlign: "center",
};

const Skills = (props: { sideKey: string }) => {
  const { sideKey } = props;

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
      list: [{ name: "python" }, { name: "csharpcpp" }, { name: "spring" }],
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

  const [isChanged, setIsChanged] = useState<boolean>(false);

  useEffect(() => {
    setIsChanged(
      sideKey === "#SKILLS_ani" || sideKey === "#SKILLS" ? true : false
    );
  }, [sideKey]);

  return (
    <React.Fragment>
      <Row justify="center">
        {skills.map((item: { title: string; list: any[] }) => (
          <Col span={16}>
            <Card
              title={
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  {item.title}
                </Text>
              }
              hoverable={true}
              style={{ marginBottom: 10 }}
            >
              <Fade right cascade when={isChanged}>
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
              </Fade>
            </Card>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default Skills;
