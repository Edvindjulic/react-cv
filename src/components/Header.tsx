import { Box, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const StyledNavLink = styled(NavLink)({
  textDecoration: "none",
  color: "black", // ändra till theme
  "&:hover": {
    color: "blue", // ändra till theme
  },
});

export default function Header() {
  return (
    <Box
      sx={{
        height: "auto",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: "2rem",
        alignItems: "center",
        padding: "0.5rem",
        backgroundColor: "#F8FAFB"
      }}
    >
      <StyledNavLink to="/">Start</StyledNavLink>
      <StyledNavLink to="/">Projekt</StyledNavLink>
      <StyledNavLink to="/">Om</StyledNavLink>
      <StyledNavLink to="/"><GitHubIcon/></StyledNavLink>
      <StyledNavLink to="/" sx={{ marginRight: "3rem" }}>
        <LinkedInIcon/>
      </StyledNavLink>
    </Box>
  );
}
