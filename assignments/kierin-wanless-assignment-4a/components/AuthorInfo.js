import { Card } from "@mui/material";
import { useEffect } from "react";

export default function AuthorInfo(props) {
  return <Card>
    <Typography
        component="h1"
        variant="h4"
        align="center"
        color="text.primary"
        gutterBottom
      >
        {props.authorname}
      </Typography>
      <Typography  align="center" color="text.primary" paragraph>
        {props.authorbirthdate} - DEATHDATE OR PRESENT DAY HERE
      </Typography>
  </Card>
}