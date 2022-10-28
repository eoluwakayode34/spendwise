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
            fontSize='8px'
            bg={'#052A24'}
            fontFamily='Dm Sans'
            color={'white'}
            borderRadius={6}
            {...otherProps} >
                {children}
            </Button>
            </LightMode>
            
    )
}

export default AppButton;