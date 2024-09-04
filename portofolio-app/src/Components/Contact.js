import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";

export default function Contact() {
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
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          height="100%"
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Contact Me
          </Typography>

          <Box display="flex" alignItems="center">
            <Email style={{ marginRight: 10 }} />
            <Typography variant="body1">mahmoudsharaf796@gmail.com</Typography>
          </Box>

          <Box display="flex" alignItems="center">
            <Phone style={{ marginRight: 10 }} />
            <Typography variant="body1">+201016212186</Typography>
          </Box>

          <Box display="flex" alignItems="center" mb={2}>
            <LocationOn style={{ marginRight: 10 }} />
            <Typography variant="body1">Cairo, Egypt</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
