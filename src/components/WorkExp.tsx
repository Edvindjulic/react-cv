import { Box, Typography } from "@mui/material";

export default function WorkExp() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        marginTop: "2rem",
      }}
    >
      <Box sx={{
        textAlign: "center",
        marginBottom: "1rem",
        marginLeft: "2rem", // add left margin
        marginRight: "1rem", // add right margin
      }}>
        <Typography variant="h4">
          Arbetslivserfarenheter
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: "2rem", // add left margin
          marginRight: "2rem", // add right margin
          width: "100%", // add width
        }}
      >
        <Box sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
            marginLeft: "1rem",
            height: "100%"
        }}>
          <Typography variant="h5">
            Elevassistent
          </Typography>
          <Typography variant="h6">
            Enebackeskolan | Höör | 2012-2018
          </Typography>
          <Typography variant="body1" sx={{
            maxWidth: "22rem"
          }}>
            Arbete i klass samt förberedelseklass
            för nyanlända elever. Fungerade som
            extra stöd till elever med särskilda
            behov, främst elever med
            NPF-diagnoser.
          </Typography>
        </Box>
        <Box sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
            marginRight: "1rem",
            height: "100%"
        }}>
          <Typography variant="h5">
            Resurspedagog
          </Typography>
          <Typography variant="h6">
            Enebackeskolan | Höör | 2018-2022
          </Typography>
          <Typography variant="body1" sx={{
            maxWidth: "22rem"
          }}>
            Arbete i särskild undervisningsgrupp.
            Hade ett stort ansvar över
            undervisningens upplägg och elevernas
            skolgång.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
