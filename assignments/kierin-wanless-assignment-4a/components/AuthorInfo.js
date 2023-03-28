import { Typography } from "@mui/material";
import { useEffect } from "react";

const AuthorInfo = (props) => {
  return <>
    <Typography
        component="h1"
        variant="h4"
        align="center"
        color="text.primary"
        gutterBottom
      >
        {props.authorData.name}
      </Typography>
      <Typography  align="center" color="text.primary" paragraph>
        {props.authorData.birth_date} - {(props.authorData.death_date === "") ? props.authorData.death_date : "Present"}
      </Typography>
  </>
}

export { AuthorInfo }