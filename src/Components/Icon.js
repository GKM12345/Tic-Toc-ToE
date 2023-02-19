import React from "react";
import ModeIcon from '@mui/icons-material/Mode';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import CloseIcon from '@mui/icons-material/Close';



const Icon = (props) => {
    switch(props.item)
    {
        case 'Cross':
           return <CloseIcon />
        case 'Circle':
            return <PanoramaFishEyeIcon />
        default:
            return <ModeIcon />
    }
}

export default Icon;