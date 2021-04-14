import React from 'react'
import { Icon } from "@material-ui/core";
import YourLogo from '../images/calclogo.svg';

const Logo = () => (
    <Icon style={{fontSize:'20px'}}>
        <img src={YourLogo} height={25} width={25} />
    </Icon>
)
export default Logo;