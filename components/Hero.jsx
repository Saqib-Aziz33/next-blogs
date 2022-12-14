import { Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";

function Hero() {
  return (
    <Container className="hero" sx={{ mt: 2 }}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          className="content"
          sx={{
            clipPath: {
              xs: "unset",
              md: "polygon(0 0, 100% 0, 82% 100%, 0% 100%)",
            },
          }}
        >
          <Typography
            variant="h2"
            mb={1}
            className="text-primary-grad"
            fontWeight="400"
          >
            NEXT Blogs
          </Typography>
          <Typography mb={2}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
            illo, corporis molestias necessitatibus aliquid suscipit dolores
            nihil. Accusantium, eveniet eaque.
          </Typography>
          <Link href="/blogs">
            <Button variant="contained">Blogs</Button>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </Container>
  );
}
export default Hero;
