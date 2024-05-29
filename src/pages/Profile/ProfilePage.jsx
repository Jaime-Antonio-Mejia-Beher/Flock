// ProfilePage.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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

// Consider moving sample data to a separate mock data file
// for better organization, especially as the application grows.
const sampleProfile = {
   username: 'testuser',
   bio: 'Test bio',
   profilePicture: 'https://example.com/profile-pic.jpg', // Use a valid URL
};

const samplePosts = [
   // ... array of post objects with structure from PostCard.jsx ...
   // For example:
   {
       _id: 1,
       text: "This is a sample post.",
       createdAt: new Date(),
       author: { username: "testuser" },
       likes: [/* Array of user IDs who liked this post */]
   },
];

const ProfilePage = () => {
   const { username } = useParams();
   const [profile, setProfile] = useState(null);
   const [userPosts, setUserPosts] = useState([]);
   const [likedPosts, setLikedPosts] = useState([]);
   const [loading, setLoading] = useState(true);
   const [activeTab, setActiveTab] = useState(0);
   const [error, setError] = useState(null); // Add error state

   const handleChangeTab = (event, newValue) => {
       setActiveTab(newValue);
   };

   useEffect(() => {
       const fetchProfileData = async () => {
           try {
               setLoading(true);
               setError(null); // Reset error state

               // Fetch actual data from API endpoints
               const userResponse = await axios.get(`/api/users/${username}`);
               setProfile(userResponse.data);

               const postsResponse = await axios.get(`/api/posts/user/${username}`);
               setUserPosts(postsResponse.data);

               const likesResponse = await axios.get(`/api/users/${username}/likes`);
               setLikedPosts(likesResponse.data);

               // Using sample data for now
               // setProfile(sampleProfile);
               // setUserPosts(samplePosts);
               // setLikedPosts(samplePosts); // Using samplePosts for liked posts as well
           } catch (error) {
               console.error("Error fetching profile data:", error);
               setError('Failed to fetch profile data.'); // Set error message
           } finally {
               setLoading(false);
           }
       };

       fetchProfileData();
   }, [username]);

   // Functions for like/unlike - replace with actual API calls
   const handleLike = (postId) => {
       console.log("Liked post:", postId);
       // API call to like the post with ID `postId`
   };

   const handleUnlike = (postId) => {
       console.log("Unliked post:", postId);
       // API call to unlike the post with ID `postId`
   };

   // Consider separating data fetching logic into a custom hook or utility function
   // for better separation of concerns

   return (
       <Container maxWidth="md">
           {loading ? (
               <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                   <CircularProgress />
               </Box>
           ) : !profile ? (
               <Typography variant="h6" align="center" mt={4}>
                   {error || 'Profile not found'} {/* Display error message if available */}
               </Typography>
           ) : (
               <Grid container spacing={3} mt={2}>
                   {/* ... (Rest of the profile structure remains the same) ... */}
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
                               {/* Implement techniques like pagination, infinite scrolling, or lazy loading */}
                               {/* for better performance, especially with large sets of posts */}
                               {userPosts.map(post => (
                                   <PostCard
                                       key={post._id}
                                       post={post}
                                       onLike={handleLike}
                                       onUnlike={handleUnlike}
                                       currentUser={/* pass current user data */}
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
                                       currentUser={/* pass current user data */}
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