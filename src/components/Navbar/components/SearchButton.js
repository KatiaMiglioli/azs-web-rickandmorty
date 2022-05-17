import * as React from 'react';
import Button from '@mui/material/Button';
import { styled} from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const ButtonBase = styled(Button)(({ theme }) => ({
  backgroundColor:theme.palette.common.black,
  margin: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    minWidth: 32,
    paddingLeft: 8,
    paddingRight: 8,
    "& .MuiButton-startIcon": {
      margin: 0
    }
  }
}));

const ButtonText = styled('span')(({theme})=>({
  [theme.breakpoints.down("sm")]: {
    display: "none"
  }
}))

export default function SearchButton(props) {
  return(
    <ButtonBase startIcon={<SearchIcon />} >
      <ButtonText>
      Meus favoritos
      </ButtonText>
    </ButtonBase>
  )
}