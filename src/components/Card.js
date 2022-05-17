import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FaceIcon from '@mui/icons-material/Face';
import Chip from '@mui/material/Chip';

export default function CardBase(props) {
    return (
        <Card>
            <CardContent>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <span>Pilot</span>
                        <span>#S01E01</span>
                    </Grid>
                    <Grid item xs={6}>
                        <IconButton aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={12}>
                        <Chip icon={<FaceIcon />} label="With Icon" />
                        <Chip icon={<FaceIcon />} label="With Icon" />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}