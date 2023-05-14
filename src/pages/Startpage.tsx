import Box from "@mui/material/Box";
import Hero from "../components/Hero";
import Knowledge from "../components/Knowledge";
import WorkExp from "../components/WorkExp";

export default function Startpage() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Hero />
      <WorkExp />
      <Knowledge />
    </Box>
  );
}
