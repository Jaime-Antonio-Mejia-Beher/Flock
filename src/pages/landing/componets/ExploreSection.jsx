import React from 'react';
import { Typography, Button, Container } from '@mui/material';
import '../../../styles/ExploreSection.css'

const ExploreSection = () => {
  return (
    <div className="explore">
      <Container maxWidth="sm">
        <Typography variant="h2" className="exploreContent">
          Discover Your Next Adventure
        </Typography>
        <Typography variant="h5" paragraph>
          Share your travel experiences and connect with fellow explorers.
        </Typography>
        <Button variant="contained" color="primary" className="button">
          Join Now
        </Button>
        <Button variant="outlined" color="secondary" className="button">
          Explore Stories
        </Button>
      </Container>
    </div>
  );
};

export default ExploreSection;
