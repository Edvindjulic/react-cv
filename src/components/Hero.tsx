import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import edvinImage from "../assets/Edvin.png";

export default function Hero() {
  return (
    <>
      <Box
        sx={{
          height: "auto",
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginRight: "5rem",
        }}
      >
        <img
          src={edvinImage}
          alt="Edvin"
          style={{
            height: "20rem",
            /* backgroundColor: "orange", */
            justifyContent: "center",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "50%",
          /* backgroundColor: "lightblue", */
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "5rem",
        }}
      >
        <Typography variant="h2">
          Edvin Djulic
        </Typography>
        <Typography variant="h4">
          Frontend Developer
        </Typography>
        <Button
          variant="contained"
          sx={{
            marginTop: "1rem",
          }}
        >
          Läs mer om mig
        </Button>
      </Box>
    </>
  );
}
