import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { useQuery } from "@apollo/client";

import { INFO_EPISODES } from "../querys/index";

import Card from "../components/Card"

export default function ListaEpisodios(props) {
    const { loading, error, data } = useQuery(INFO_EPISODES, { variables: { pagina: 1 } });

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>an error occurred...</p>;
    }

    return (
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: "column", alignItems: 'center',padding:"15px"}}>
            <Grid container spacing={2}>
                {data.episodes.results.map((ep, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={ep.name}>
                        <Card episodio={ep}/>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{padding:"30px"}}> 
                <Button variant="outlined" size="large" color="primary">
                    Ver mais
                </Button>
            </Box>
        </Box>
    )
}