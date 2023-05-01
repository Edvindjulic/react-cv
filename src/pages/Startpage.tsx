import { Box } from "@mui/material";
import Hero from "../components/Hero";

export default function Startpage() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#F8FAFB",
      }}
    >
      <Hero />
    </Box>
  );
}
