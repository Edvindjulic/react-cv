import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
        borderTop: "1px solid black",
      }}
    >
      <Typography variant="body1" sx={{
        marginTop: "1rem",
      }}>
        Kontaktuppgifter
      </Typography>
      <Typography variant="body2" sx={{
        marginBottom: "1rem"
      }}>
        +46 76 073 25 79 <br />{" "}
        djulicedvin@gmail.com <br />
        <br />
        Margit Halls Gata 55
        <br />
        415 26 Göteborg
      </Typography>
    </Box>
  );
}
