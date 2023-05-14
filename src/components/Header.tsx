import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  Box,
  Tooltip,
  styled,
} from "@mui/material";
import { NavLink } from "react-router-dom";

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
        backgroundColor: "#F8FAFB",
      }}
    >
      <StyledNavLink to="/">Start</StyledNavLink>
      <StyledNavLink to="/">
        Projekt
      </StyledNavLink>
      <StyledNavLink to="/">Om</StyledNavLink>
      <Tooltip title="GitHub">
        <StyledNavLink to="https://github.com/Edvindjulic">
          <GitHubIcon />
        </StyledNavLink>
      </Tooltip>
      <Tooltip title="LinkedIn">
        <StyledNavLink to="https://www.linkedin.com/in/edvin-djulic-aaaa19251?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bvc5KGWVASSC7nMuQvl9cHQ%3D%3D">
          <LinkedInIcon />
        </StyledNavLink>
      </Tooltip>
      <Tooltip title="mail">
        <StyledNavLink to="mailto:djulicedvin@gmail.com" sx={{
          marginRight: "3rem"
        }}>
          <EmailIcon />
        </StyledNavLink>
      </Tooltip>
    </Box>
  );
}
