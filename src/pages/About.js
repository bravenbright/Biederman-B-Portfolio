import { Card, Grid } from "@mui/material";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function About() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <CardMedia
          component="img"
          height="350"
          image="./assets/images/portfolio-pic.jpg"
          alt="green iguana"
          sx={{
            borderRadius: "20%",
          }}
        />
      </Grid>
      <Grid item xs={8}>
        <Card gutterBottom>
          <CardActionArea>
            <CardContent>
              <Typography variant="h5" color="text.secondary">
                The greatest glory in living lies not in never falling, but in
                rising every time we fall. -Nelson Mandela
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                About Me
              </Typography>

              <Typography gutterBottom>
                Meet Brigita, a young artistic mother with a passion for
                technology and a drive for success. Her intelligence, ambition,
                and creativity make her a standout in any room. With a
                certificate in The Fullstack Flex Software Development Bootcamp
                from UT Austin's School of Business, she is breaking into the
                world of software development with a fierce determination.
              </Typography>
              <Typography gutterBottom>
                As a mother, Brigita knows the value of hard work and
                dedication. She brings that same level of commitment to her
                career as a software developer. She has a unique perspective on
                life, having balanced the demands of motherhood with the rigors
                of a challenging course of study. Her ability to balance
                multiple responsibilities has made her a force to be reckoned
                with in the tech industry.
              </Typography>
              <Typography gutterBottom>
                Brigita's artistic background gives her a creative edge in her
                work. She is constantly seeking new ways to solve problems and
                approach challenges. Her ability to think outside the box has
                already set her apart from her peers in the tech industry. With
                a thirst for knowledge and a desire to excel, Brigita is always
                looking for new opportunities to grow and learn. Her experience
                in the Fullstack Flex Software Development Bootcamp has prepared
                her well for the challenges of her new career. She is eager to
                put her skills to work and make a difference in the world of
                software development.
              </Typography>
              <Typography gutterBottom>
                Overall, Brigita is a remarkable young woman with a unique set
                of skills, intelligence, and creativity. Her determination to
                succeed in the tech industry is inspiring, and her story is a
                testament to the power of hard work and dedication.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}
