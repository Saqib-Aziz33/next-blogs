import {
  AppBar,
  Button,
  Typography,
  Container,
  Stack,
  Avatar,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{ color: "#000", py: "0.5rem" }}
      elevation={0}
      className="navbar"
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href="/">
          <Stack direction="row" alignItems="center">
            <Image src="/assets/logo.png" alt="" height={50} width={50} />
            <Typography variant="h6">NEXT Blogs</Typography>
          </Stack>
        </Link>

        <Stack direction="row" gap={2} alignItems="center">
          <Link href="/blogs">
            <Button>Blogs</Button>
          </Link>
          <Link href="/auth">
            <Button variant="contained">Sign In</Button>
          </Link>
          <Link href="/user">
            <Avatar src="/assets/avatars/av1.png" />
          </Link>
        </Stack>
      </Container>
    </AppBar>
  );
}
export default Navbar;
