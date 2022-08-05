import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { sortItem } from "./Redux/Actions/ResourcePageAction";
import SortRounded from "@mui/icons-material/SortRounded";

export default function BasicMenu() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (by) => {
    setAnchorEl(null);
    dispatch(sortItem(by));
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SortRounded onClick={handleClick} />
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Sort
        </Button>
      </div>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleClose("Recently")}>
          Recently Adeed
        </MenuItem>
        <MenuItem onClick={() => handleClose("ascending")}>Ascending</MenuItem>
        <MenuItem onClick={() => handleClose("descending")}>
          Descending
        </MenuItem>
      </Menu>
    </div>
  );
}
