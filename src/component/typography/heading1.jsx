
import React from 'react'
import {Heading} from '@chakra-ui/react'

const Heading1 = ({children, fontSize,  ...otherProps}) => {


    return (
        <Heading fontSize={fontSize ? fontSize : ['28px','28px','34px','44px','44px']}
         fontWeight='600' color='#464646;'
         lineHeight={1.2}
         py={4}
         fontFamily={'Inter'}
          {...otherProps}>{children}</Heading>


    )
}


export default Heading1