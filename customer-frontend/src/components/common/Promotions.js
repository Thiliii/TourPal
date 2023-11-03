
import { Box } from '@mui/material';
import Promotion1 from '../../assets/Images/Promotion1.png';
import Promotion2 from '../../assets/Images/Promotion2.png';
import Promotion3 from '../../assets/Images/Promotion3.png';


const Promotions = () => {
    return (

        <>
        <Box>
            <Box sx={{mt:1}}>
                <img src={Promotion1} />
            </Box>
            <Box sx={{mt:1}}>
                <img src={Promotion2} />
            </Box>
            <Box sx={{mt:1}}>
                <img src={Promotion3} />
            </Box>
        </Box>
        </>
    );

}

export default Promotions;