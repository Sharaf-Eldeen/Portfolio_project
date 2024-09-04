import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Button,
} from "@mui/material";

const projects = [
  {
    title: "Cairo Metro Route Finder",
    description:
      "Developed a web application to help users find the route between stations in the Cairo Metro system.",
    githubLink: "https://github.com/Sharaf-Eldeen/Metro-Egypt",
    stack: "MERN",
  },
  {
    title: "Find Your Stadium in city",
    description:
      "Developed a web application that allows users to easily find stadiums and view their locations on Google Maps.",
    githubLink: "https://github.com/Sharaf-Eldeen/Field_Finder",
    stack: "MERN",
  },
  {
    title: "Faculty Management System",
    description:
      "Developed a comprehensive web application tailored for faculty management and student engagement.",
    githubLink: "#",
    stack: "MERN",
  },
  {
    title: "Task Management App",
    description:
      "Developed a task management application enabling users to add, edit, and delete tasks efficiently.",
    githubLink: "https://github.com/Sharaf-Eldeen/Todo-App",
    stack: "MERN",
  },
  {
    title: "Blogging Platform",
    description:
      "Created a blogging platform enabling users to add, edit, delete, and update blog posts.",
    githubLink: "https://github.com/Sharaf-Eldeen/Blog",
    stack: "Node.js and EJS",
  },
  {
    title: "WhatsApp Bot",
    description:
      "Created a WhatsApp bot using Node.js that handles user requests for quotes and jokes.",
    githubLink: "https://github.com/Sharaf-Eldeen/Whatsap-Bot",
    stack: "Node.js",
  },
  {
    title: "Tic-Tac-Toe Game",
    description:
      "Creating a simple 'X-O' (Tic-Tac-Toe) game involves managing the game state, handling user interactions, and rendering the board.",
    githubLink: "https://github.com/Sharaf-Eldeen/Tic-Tac-Toe",
    stack: "React",
  },
  {
    title: "Car Landing Page",
    description:
      "Developed a car landing page, featuring a gallery, video, and call-to-action elements to enhance user experience.",
    githubLink: "https://github.com/Sharaf-Eldeen/Car_Landing_Page",
    stack: "React",
  },
  {
    title: "Job Listing App",
    description:
      "Built a web app allowing users to list, search for, and apply for jobs in addition to allowing admins to manage the listed jobs.",
    githubLink: "#",
    stack: "Django",
  },
  {
    title: "Image Processing Program",
    description:
      "Implemented an image processing program performing different operations such as blur, merge, invert, rotate, enlarge, crop, etc.",
    githubLink: "#",
    stack: "C++",
  },
  {
    title: "Web Scraping with selenium",
    description:
      "Scraped different web pages to extract required information from different various sources using selenium.",
    githubLink: "#",
    stack: "Python",
  },
  {
    title: "Machine Language Simulator",
    description:
      "Implemented a program to simulate and visualize the effects of machine language instructions on memory and registers.",
    githubLink: "#",
    stack: "C++",
  },
];

export default function Projects() {
  return (
    <Box id="portfolio" sx={{ padding: 3 }}>
      <Typography variant="h1" align="center" gutterBottom color={"yellow"}>
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              style={{
                height: "100%",
                backgroundColor: "black",
                color: "white",
                boxShadow:
                  "0 4px 8px 0 rgba(255, 255, 255, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" paragraph>
                  {project.description}
                </Typography>
                <Typography variant="subtitle2" color="secondary">
                  <strong>Stack:</strong> {project.stack}
                </Typography>
                <Button
                  variant="contained"
                  color="success"
                  href={project.githubLink}
                  target="_blank"
                  sx={{ mt: 2 }}
                >
                  View on GitHub
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
