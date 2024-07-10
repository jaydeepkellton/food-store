import { Button } from "@mui/material";
import { FC } from "react";

interface MUIButtonModel {
  id?: string;
  type: "submit" | "button";
  label: string;
  variant?: "contained" | "outlined";
  disabled?: boolean;
  color?: "primary" | "secondary" | "error" | "warning" | "info";
  loading?: boolean;
  size?: "small" | "medium" | "large";
  width?: number | string;
  onClick?: () => void;
  fullWidth?: boolean;
  className?: string;
  height?: string;
  handleClickCB?: any;
  fontWeight?: string | number;
  fontSize?: string | number;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
  Icon?: any;
}

const MUIButton: FC<MUIButtonModel> = ({
  id,
  type,
  label,
  variant,
  color,
  disabled,
  size = "medium",
  fullWidth = false,
  className = "",
  handleClickCB,
  width = 200,
  height = "fit-content",
  fontWeight = 500,
  fontSize = "16px",
  Icon = <></>,
}) => {
  return (
    <Button
      startIcon={Icon}
      disabled={disabled}
      color={color}
      variant={variant}
      fullWidth={fullWidth}
      type={type}
      size={size}
      data-testid={id ? id : label}
      sx={{
        minWidth: width,
        height: height,
        fontWeight: fontWeight,
        fontSize: fontSize,
      }}
      className={className}
      onClick={handleClickCB}
    >
      <span data-testid='button-test' style={{ textTransform: "none" }}>
        {" "}
        {label}
      </span>
    </Button>
  );
};

export default MUIButton;
