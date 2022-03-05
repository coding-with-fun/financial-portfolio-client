import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import IndexRouter from "./routes/IndexRouter";

const App = () => {
    return (
        <Box>
            <Router>
                <Navbar />

                <Box
                    sx={{
                        p: "4.2rem 0 3rem",
                    }}
                >
                    <IndexRouter />
                </Box>
            </Router>
        </Box>
    );
};

export default App;
