import { useContext, useEffect } from "react";
import { WrapperHeader } from "./style";
import { IconButton, useTheme } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ThemeContext } from "../theme";

const Header = () => {
  const { toggleColorMode } = useContext(ThemeContext);
  const theme = useTheme();

  const handleChangeTheme = () => {
    toggleColorMode();
  };

  return (
    <WrapperHeader>
      <IconButton sx={{ ml: 1 }} onClick={handleChangeTheme} color="inherit">
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </WrapperHeader>
  );
};

export default Header;
