import React from 'react'
import {Button,LightMode} from '@chakra-ui/react'
import { PrimaryText } from './typography'
const AppButton = ({children, width='100%', ...otherProps}) => {
    return (
        <LightMode>
            <Button width={width} 
            px='19px'
            py='25px'
            fontWeight={400}
            textTransform='capitalize'
            fontSize='16px'
            bg={'#052A24'}
            fontFamily='montserrat'
            color={'white'}
            borderRadius={8}
            {...otherProps} >
                {children}
            </Button>
            </LightMode>
            
    )
}

export default AppButton;