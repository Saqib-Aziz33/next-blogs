import { Avatar, Box, Stack, Typography } from "@mui/material";
import { useEffect } from "react";

const avatars = ["av1", "av2", "av3", "av4", "av5", "av6", "av7", "av8"];

function AvatarSelection({ changeAvatar, avatar }) {
  useEffect(() => {
    changeAvatar(avatars[3]);
    // eslint-disable-next-line
  }, []);

  return (
    <Box>
      <Typography sx={{ opacity: 0.9 }}>Choose Avatar:</Typography>
      <Stack direction="row" flexWrap="wrap" gap={1}>
        {avatars.map((item) => (
          <Avatar
            onClick={() => {
              changeAvatar(item);
            }}
            key={item}
            src={`/assets/avatars/${item}.png`}
            sx={{
              height: 60,
              width: 60,
              opacity: `${avatar === item ? 1 : 0.4}`,
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}
export default AvatarSelection;
