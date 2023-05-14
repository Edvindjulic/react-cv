import { Box, Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

export default function Knowledge() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "1rem"
      }}
    >
      <Typography variant="h4">
        Kunskaper
      </Typography>
      <Box sx={{display: "flex"}}>
        <CheckIcon />
        <Typography variant="body1">HTML & CSS</Typography>
      </Box>
      <Box sx={{display: "flex"}}>
        <CheckIcon />
        <Typography variant="body1">HTML & CSS</Typography>
      </Box>
      <Box sx={{display: "flex"}}>
        <CheckIcon />
        <Typography variant="body1">HTML & CSS</Typography>
      </Box>
      <Box sx={{display: "flex"}}>
        <CheckIcon />
        <Typography variant="body1">HTML & CSS</Typography>
      </Box>
    </Box>
  );
}
