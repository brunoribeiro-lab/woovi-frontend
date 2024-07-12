import React from 'react';
import { Typography } from '@mui/material';
import './css/SessionID.css';

const SessionID = ({id = '2c1b951f356c4680b13ba1c9fc889c47'}) => {

    return (
        <>
            <Typography variant="body1" className="session-id-label" gutterBottom>
                Identificador:
            </Typography>
            <Typography variant="body1" className="session-id" gutterBottom>
                { id }
            </Typography> 
        </>
    );
};

export default SessionID;
