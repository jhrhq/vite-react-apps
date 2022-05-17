import { BookOnline } from '@mui/icons-material';
import Button from '@mui/material/Button';
import React from 'react';
const MyButton = ({href, color, size, text}) => {
    return (
            <Button
            variant='contained'
                href={href ? href : 'https://mui.com/material-ui/api/typography/' }
                size={size ? size : 'medium' }
                color={color ? color : 'warning' }
            >
                <BookOnline />
                {text ? text : 'Purchase Tickets' }
            </Button>
    );
};

export default MyButton;