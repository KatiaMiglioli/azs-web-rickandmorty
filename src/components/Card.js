import * as React from 'react';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import { Box } from '@mui/system';
import Stack from '@mui/material/Stack';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import StarIcon from '@mui/icons-material/Star';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

import './style-components.css'

const converterData_estreia = (data_) => {
    const data = new Date(data_);
    return data.toLocaleDateString("pt-BR");
}



export default function CardBase({ episodio }) {
    return (
        <Card className="card">
            <CardContent>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <span className='card-titulo'>{episodio.name}</span>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{
                            display:"flex",
                            alignItems: "center",
                        justifyContent: "end"
                        }}>
                            <Chip variant="outlined" label={episodio.episode} />
                            <span className='icon'>
                                <FavoriteBorderOutlinedIcon color='error' />
                            </span>
                            <span className='icon'>
                                <BookmarkBorderOutlinedIcon />
                            </span>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack direction="row" spacing={1}>
                            <Chip icon={<StarIcon />} label={converterData_estreia(episodio.air_date)} />
                            <Chip icon={<PeopleAltOutlinedIcon />} label={episodio.characters.length} />
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}