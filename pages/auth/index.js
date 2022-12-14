import { Box, Button, Divider, Grid } from "@mui/material";
import Link from "next/link";
import Head from "next/head";
import AuthTabs from "../../components/AuthTabs";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import WithGoogle from "../../components/WithGoogle";

export default function Page() {
  return (
    <>
      <Head>
        <title>NEXT Blogs - Authentication</title>
      </Head>

      <div className="auth">
        <Grid container sx={{ height: "100%" }}>
          <Grid
            item
            className="bg"
            xs={12}
            md={6}
            sx={{ display: { xs: "none", md: "block" } }}
          ></Grid>
          {/* forms */}
          <Grid item xs={12} md={6} sx={{ p: 2, my: 2 }}>
            <Link href="/">
              <Button sx={{ color: "black", mb: 4 }}>
                <ArrowBackIcon />
              </Button>
            </Link>
            {/* continue with google */}
            <Box sx={{ my: 2, display: "flex", justifyContent: "center" }}>
              <WithGoogle />
            </Box>
            <Divider>OR</Divider>
            {/* signup and sign in tabs */}
            <AuthTabs />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
