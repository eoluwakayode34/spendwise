import React from 'react'
import {Text, useColorModeValue} from '@chakra-ui/react'

const PrimaryHeading = ({children, align='left',  fontSize = ['16px','18px','24px'], color,  ...otherProps}) => {

    const textColor = useColorModeValue('#484848','blackAlpha.800')

    return (
        <Text textAlign={align} 
        lineHeight='140%'
        css={{fontWeight: 400}}
        letterSpacing={.2}
        color={color ? color : textColor}
        fontFamily={'Inter'}
        py={3}
        fontSize={fontSize} {...otherProps} >

            {children}  
        </Text>

    )
}


export default PrimaryHeading