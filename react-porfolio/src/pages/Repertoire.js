import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  card: {
    maxWidth: 345,
    marginBottom: 20,
  },
  media: {
    height: 140,
  },
});

const projects = [
  {
    title: "Track My Pack",
    description:
      "This is a backend admin team management application.",
    imageUrl: "./assets/images/Track-My-Pack-SCRNSHT.jpg",
    githubUrl: "https://github.com/bravenbright/track-my-pack",
  },
  {
    title: "Weather Me",
    description:
      "This is a weather forecasting application that is broken.",
    imageUrl: "./assets/images/WeatherMe-pic.jpg",
    githubUrl: "https://github.com/bravenbright/WeatherMe",
  },
  {
    title: "React Portfolio",
    description:
      "This is my react portfolio",
    imageUrl: "https://via.placeholder.com/200x200",
    githubUrl: "https://github.com/bravenbright/Biederman-B-Portfolio",
  },
];

export default function Repertoire() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Typography variant="h5" component="h2" gutterBottom>
          Github Projects
        </Typography>
        <Grid container spacing={2}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={theme.card}>
                <CardActionArea>
                  <CardMedia
                    sx={theme.media}
                    image={project.imageUrl}
                    title={project.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href={project.githubUrl}
                    target="_blank"
                  >
                    Github
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </ThemeProvider>
  );
}
