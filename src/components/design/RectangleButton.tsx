import { Button, makeStyles } from "@material-ui/core"
import React, { ReactElement } from "react"

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.button.main,
    borderRadius: "10px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.button.main,
      filter: "brightness(95%)"
    }
  }
}))

const RectangleButton = ({
  className,
  children,
  type,
  onClick
}: {
  className?: string
  children?: ReactElement | string
  type: "button" | "reset" | "submit" | undefined
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}): ReactElement => {
  const classes = useStyles()
  return (
    <>
      <Button
        variant="contained"
        type={type}
        className={`${className} ${classes.button}`}
        onClick={onClick}
      >
        {children}
      </Button>
    </>
  )
}

export default RectangleButton
