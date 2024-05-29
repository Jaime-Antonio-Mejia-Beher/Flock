// ProfilePage.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
   Avatar,
   Container,
   Typography,
   Grid,
   CircularProgress,
   Box,
   Button,
   Tabs,
   Tab,
   Card,
   CardContent,
   CardActions,
   IconButton,
   Link,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Link as RouterLink } from 'react-router-dom';

// Sample Data
const sampleProfile = {
   username: 'testuser',
   bio: 'Test bio',
   profilePicture: 'https://example.com/profile-pic.jpg', // Use a valid URL
   _id: '1' // Add an _id to the profile data
};

const samplePosts = [
   // ... array of post objects with structure from PostCard.jsx ...
   // For example:
   {
       _id: 1,
       text: "This is a sample post.",
       createdAt: new Date(),
       author: sampleProfile, // Reference the sampleProfile 
       likes: [/* Array of user IDs who liked this post */]
   },
   {
       _id: 2,
       text: "This is another sample post!",
       createdAt: new Date(),
       author: sampleProfile, // Reference the sampleProfile 
       likes: [/* Array of user IDs who liked this post */]
   }
];

const ProfilePage = () => {
   const { username } = useParams();
   const [profile, setProfile] = useState(null);
   const [userPosts, setUserPosts] = useState([]);
   const [likedPosts, setLikedPosts] = useState([]);
   const [loading, setLoading] = useState(true);
   const [activeTab, setActiveTab] = useState(0);

   const handleChangeTab = (event, newValue) => {
       setActiveTab(newValue);
   };

   useEffect(() => {
       // Simulate API call with setTimeout
       setTimeout(() => {
           // Find the profile based on the username parameter
           const foundProfile = sampleProfile.username === username 
               ? sampleProfile 
               : null;

           setProfile(foundProfile);

           // Filter posts by the found profile's ID
           const filteredPosts = foundProfile 
               ? samplePosts.filter(post => post.author._id === foundProfile._id) 
               : [];
           
           setUserPosts(filteredPosts);
           setLikedPosts(filteredPosts); 
           setLoading(false);
       }, 1000); // Simulate 1 second delay
   }, [username]);

   // Functions for like/unlike - will be replaced with actual API calls
   const handleLike = (postId) => {
       console.log("Liked post:", postId);

       // Update liked posts in UI (optimistic update)
       setLikedPosts(prevLikedPosts => {
           const postToLike = samplePosts.find(post => post._id === postId);
           if (postToLike && !prevLikedPosts.includes(postToLike)) {
               return [...prevLikedPosts, postToLike];
           }
           return prevLikedPosts; 
       });

       // Here you would make the API call to like the post
   };

   const handleUnlike = (postId) => {
       console.log("Unliked post:", postId);

       // Update liked posts in UI (optimistic update)
       setLikedPosts(prevLikedPosts => 
           prevLikedPosts.filter(post => post._id !== postId)
       );

       // Here you would make the API call to unlike the post
   };

   return (
       <Container maxWidth="md">
           {loading ? (
               <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                   <CircularProgress />
               </Box>
           ) : !profile ? (
               <Typography variant="h6" align="center" mt={4}>
                   Profile not found
               </Typography>
           ) : (
               <Grid container spacing={3} mt={2}>
                   <Grid item xs={12} md={4}>
                       <Avatar
                           src={profile.profilePicture}
                           alt={`${profile.username}'s profile`}
                           sx={{ width: 150, height: 150, margin: 'auto' }}
                       />
                       <Typography variant="h5" align="center" mt={2}>
                           {profile.username}
                       </Typography>
                       {profile.bio && (
                           <Typography variant="body1" align="center" mt={1}>
                               {profile.bio}
                           </Typography>
                       )}
                       {/* ... Other profile details ... */}
                   </Grid>
                   <Grid item xs={12} md={8}>
                       <Tabs value={activeTab} onChange={handleChangeTab}>
                           <Tab label="Posts" />
                           <Tab label="Likes" />
                       </Tabs>

                       {activeTab === 0 && (
                           <div>
                               <Typography variant="h6" gutterBottom>
                                   Posts
                               </Typography>
                               {userPosts.map(post => (
                                   <PostCard
                                       key={post._id}
                                       post={post}
                                       onLike={handleLike}
                                       onUnlike={handleUnlike}
                                       currentUser={sampleProfile} // Pass the current user data
                                   />
                               ))}
                           </div>
                       )}

                       {activeTab === 1 && (
                           <div>
                               <Typography variant="h6" gutterBottom>
                                   Liked Posts
                               </Typography>
                               {likedPosts.map(post => (
                                   <PostCard 
                                       key={post._id}
                                       post={post}
                                       onLike={handleLike}
                                       onUnlike={handleUnlike}
                                       currentUser={sampleProfile} // Pass the current user data
                                   />
                               ))}
                           </div>
                       )}
                   </Grid>
               </Grid>
           )}
       </Container>
   );
};

export default ProfilePage;
