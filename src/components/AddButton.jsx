import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button fullWidth variant="outlined" {...bindTrigger(popupState)}>
            Add to list
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Practice 1</MenuItem>
            <MenuItem onClick={popupState.close}>Flow Combo</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
