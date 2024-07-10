import { ReactComponent as Star } from "../../assets/icon/star.svg";
import style from './style.module.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function MyRating() {
    const [value, setValue] = React.useState(2);
  
    return (
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        {/* <Typography component="legend">Controled</Typography> */}
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        {/* <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
        <Typography component="legend">Disabled</Typography>
        <Rating name="disabled" value={value} disabled />
        <Typography component="legend">No rating given</Typography>
        <Rating name="no-value" value={null} /> */}
      </Box>
    );
  }

// export const MyRating = () => {
//     return (
//         <div className={style.rating}>
//             <Star /><Star /><Star /><Star /><Star />
//         </div>
//     )
// }