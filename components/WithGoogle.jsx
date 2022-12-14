import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";

function WithGoogle() {
  return (
    <Button variant="outlined" size="small" sx={{ color: "black" }}>
      <Stack direction="row" gap={2} alignItems="center">
        <Image src="/assets/google.png" height={30} width={30} alt="google" />
        <Typography variant="body2">Continue with google</Typography>
      </Stack>
    </Button>
  );
}
export default WithGoogle;
