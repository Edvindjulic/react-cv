import { Box, Button, Typography } from "@mui/material";
import edvinImage from "../assets/Edvin.png";

export default function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F8FAFB",
      }}
    >
      <Box
        sx={{
          flex: "0 0 50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <img
          src={edvinImage}
          alt="Edvin"
          style={{
            height: "20rem",
            justifyContent: "center",
            marginRight: "2rem"
          }}
        />
      </Box>
      <Box
        sx={{
          flex: "0 0 50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2">Edvin Djulic</Typography>
        <Typography variant="h4">Frontend Developer</Typography>
        <Button variant="contained" sx={{ marginTop: "1rem" }}>
          Läs mer om mig
        </Button>
      </Box>
    </Box>
  );
}
