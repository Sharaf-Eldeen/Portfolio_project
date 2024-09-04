import React from "react";
import { Card, CardContent, Typography, Divider, Box } from "@mui/material";

export default function Skills() {
  return (
    <Card
      style={{
        maxWidth: 550,
        minWidth: 550,
        height: 300,
        margin: "80px auto",
        backgroundColor: "black",
        color: "white",
        boxShadow:
          "0 4px 8px 0 rgba(255, 255, 255, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <CardContent
        component={Box}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        style={{ height: "100%", paddingLeft: 50, paddingBottom: 20 }}
      >
        <Typography variant="h3" gutterBottom marginTop={3}>
          Skills
        </Typography>
        <Divider style={{ marginBottom: "10px", width: "100%" }} />

        <Typography variant="body1" paragraph>
          <strong>Programming Languages:</strong> C++, Python, Java, C#
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Web Development:</strong> HTML, CSS, JavaScript
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Backend Technologies:</strong> Node.js, Express.js, Django
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Frontend Technologies:</strong> React.js
        </Typography>
        <Typography variant="body1" paragraph paddingBottom={5}>
          <strong>Databases:</strong> SQL, NoSQL (MongoDB)
        </Typography>
      </CardContent>
    </Card>
  );
}
