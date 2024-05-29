import { useState } from "react";
import axios from "axios"
import { TextField, Button, Typography, Container } from '@mui/material';


export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            try {
                const response = await axios.post('/api/users', { username, email, password });
                console.log(response.data);
            } catch (err) {
                console.log(err);
            }
        } else {
            console.log("Passwords do not match");
        }
    };

    return (
        <Container >
        <form onSubmit={handleSubmit} style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '30px', borderRadius: '8px', backgroundColor: 'white' }} >
        <Typography variant="h4" className="exploreContent">Sign-up Form</Typography>
            <TextField
                helperText=""
                id="demo-helper-text-aligned"
                label="Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                fullWidth
                margin="normal"
            />
            <br />
            <TextField
                helperText=""
                id="demo-helper-text-aligned"
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                fullWidth
                required
                margin="normal"
            />
            <br />

            <TextField
                helperText=""
                id="demo-helper-text-aligned"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                fullWidth
                margin="normal"
            />
            <br />

            <TextField
                helperText=""
                id="demo-helper-text-aligned"
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                required
                fullWidth
                margin="normal"
            />
            <br />

            <Button type="submit" variant="contained" color="primary" className="button" fullWidth >Submit</Button>
        </form>
</Container>
    )

}