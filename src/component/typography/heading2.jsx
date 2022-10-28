
import React from 'react'
import {Heading} from '@chakra-ui/react'

const Heading2 = ({children, fontSize='18px',  ...otherProps}) => {


    return (
        <Heading fontSize={ ['20px','22px','24px','28px','28px']} fontWeight='bold' fontFamily={'spline sans'} color='black' textTransform='capitalize' {...otherProps}>{children}</Heading>


    )
}


export default Heading2