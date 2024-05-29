import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import birds from "../assets/birds.jpg";

export default function OutlinedCard() {
  const [currentDateTime, setCurrentDateTime] = useState(
    new Date().toLocaleString()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Avatar src={birds} />
            <Typography variant="h5" component="div" sx={{ ml: 2 }}>
              Username
            </Typography>
          </Box>
          <Typography variant="body2">
            Body of post goes here
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="thumbs up" sx={{ fontSize: "1.2rem" }}>
            👍
          </IconButton>
          <IconButton aria-label="thumbs down" sx={{ fontSize: "1.2rem" }}>
            👎
          </IconButton>
          <IconButton aria-label="heart" sx={{ fontSize: "1.2rem" }}>
            ❤️
          </IconButton>
          <IconButton aria-label="smile" sx={{ fontSize: "1.2rem" }}>
            😊
          </IconButton>
        </CardActions>
        <CardContent sx={{ pt: 0, pb: 0 }}>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ textAlign: "left", display: "block", padding: 0}}
          >
            {currentDateTime}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
