import React from 'react';
import './App.css';
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import FeedView from "./view/feed/FeedContainer"

function App() {
  return (
    <div className="App">
        <AppBar>
            <Toolbar>
                <Typography variant="h6">
                    Code Challenge
                </Typography>
            </Toolbar>
        </AppBar>
      <FeedView/>
    </div>
  );
}

export default App;
