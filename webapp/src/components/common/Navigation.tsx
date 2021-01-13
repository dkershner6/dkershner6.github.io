import React, { ReactElement } from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Navigation = (): ReactElement => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">Derek Kershner</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;
