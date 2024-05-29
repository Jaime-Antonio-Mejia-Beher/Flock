// PostCard.jsx

import React, { useState } from 'react';

import {
    Card,
    CardContent,
    Typography,
    CardActions,
    IconButton,
    Avatar,
    Link,
    Box,
} from '@mui/material';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Link as RouterLink } from 'react-router-dom';

const PostCard = ({ post, onLike, onUnlike, currentUser }) => {
    const { _id, text, createdAt, author, likes } = post;

    // Check if the current user has liked the post
    const isLiked = likes.includes(currentUser._id); // Assuming _id is used for user identification

    // Handle like/unlike functionality
    const handleLikeClick = () => {
        if (isLiked) {
            onUnlike(_id);
        } else {
            onLike(_id);
        }
    };

    return (
        <Card variant="outlined" sx={{ marginBottom: 2 }}>
            <CardContent>
                <Box display="flex" alignItems="center">
                    <Avatar
                        src={author.profilePicture || '/default-profile-pic.jpg'}
                        alt={`${author.username}'s profile`}
                        sx={{ width: 40, height: 40, mr: 2 }}
                    />
                    <div>
                        <Link
                            component={RouterLink}
                            to={`/profile/${author.username}`}
                            underline="none"
                            color="inherit"
                        >
                            <Typography variant="subtitle1" fontWeight="bold">
                                {author.username}
                            </Typography>
                        </Link>
                        <Typography variant="caption" color="textSecondary">
                            {new Date(createdAt).toLocaleDateString()}
                        </Typography>
                    </div>
                </Box>
                <Typography variant="body1" mt={1}>
                    {text}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton