// Cover.js
import React from "react";
import "../Styles/Cover.css";
import photo from "../image.png";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

export default function Cover() {
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
        style={{ height: "100%", paddingLeft: 50 }}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <div>
            <Typography variant="h3" component="h1">
              I'm Mahmoud
            </Typography>
            <Typography variant="h6" component="h5" style={{ color: "gray" }}>
              I'm a Full Stack Developer
            </Typography>
          </div>
          <CardMedia
            component="img"
            image={photo}
            alt="logo"
            style={{ width: 120, borderRadius: "50%" }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
