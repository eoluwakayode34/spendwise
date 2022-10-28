import React from 'react'
import {Text, useColorModeValue} from '@chakra-ui/react'

const PrimaryHeading = ({children, align='left',  fontSize = ['16px','18px','34px'], color,  ...otherProps}) => {

    const textColor = useColorModeValue('#484848','blackAlpha.800')

    return (
        <Text textAlign={align} 
        lineHeight='140%'
        fontWeight={'light'}
        letterSpacing={.2}
        color={color ? color : textColor}
        fontFamily={'DM Sans'}
        py={3}
        fontSize={fontSize} {...otherProps} >

            {children}  
        </Text>

    )
}


export default PrimaryHeading