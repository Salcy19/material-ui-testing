import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { Typography } from '@material-ui/core';
import NotesList from './NoteTaking'
import GifButton from './giphyGenerator';
import RouterTest from './routerTesting';

export default function RouterSetup(){
    return(
        <Router>
            <Link to="/noteTaking"><Typography>Note Taking App</Typography></Link>
            <Link to="/routerTesting"><Typography>Router Testing</Typography></Link>
            <Switch>
                <Route path = "/noteTaking">
                    <NotesList/>
                    <GifButton/>
                </Route>
                <Route path = "/routerTesting">
                    <RouterTest/>
                </Route>
            </Switch>
        </Router>
        
    );
}