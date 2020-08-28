import React from "react";
import "./style.css";
// material-ui
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

// images
import landing from "./landing.jpeg";
import square from "./square.png";

// pages
import Home from "./Home.js";
import SignUp from "./SignUp.js";
import Nav from "./Nav.js";
import Contact from "./Contact.js";

function Catalog() {
  return (
    <div className="Catalog">
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
        >
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
        </Grid>
      </Container>
    </div>
  );
}

const MediaCard = () => (
  <Card className="cardStyle">
    <CardActionArea>
      <CardMedia src={square} component="img" title="Image" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Item
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          This is an item description. Just a couple lines of text is ideal.
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small">View</Button>
      <Button size="small">$$$</Button>
    </CardActions>
  </Card>
);

export default Catalog;
