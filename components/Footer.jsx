import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <Box component="footer" sx={{ p: 2 }} className="footer">
      <Container>
        <Grid container justifyContent="space-between" spacing={4}>
          <Grid item xs={12} md={6}>
            <Stack direction="row" alignItems="center">
              <Image src="/assets/logo.png" height={100} width={100} alt="" />
              <Box>
                <Typography variant="h4">NEXT Blogs</Typography>
                <Typography variant="caption">
                  A firebase powered blogging app.
                </Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack
              direction="row"
              gap={2}
              justifyContent={{ xs: "center", md: "flex-end" }}
              className="icons"
            >
              <a href="https://google.com" target="_blank" rel="noreferrer">
                <FacebookIcon />
              </a>
              <a href="https://google.com" target="_blank" rel="noreferrer">
                <GitHubIcon />
              </a>
              <a href="https://google.com" target="_blank" rel="noreferrer">
                <InstagramIcon />
              </a>
              <a href="https://google.com" target="_blank" rel="noreferrer">
                <EmailIcon />
              </a>
              <a href="https://google.com" target="_blank" rel="noreferrer">
                <LinkedInIcon />
              </a>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
export default Footer;
