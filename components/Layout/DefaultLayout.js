import { Flex } from '@chakra-ui/react'
import React from 'react'
import Header from '../Header/Header'

const DefaultLayout = ({ children }) => {
    return (
        <Flex
            flexDirection={'column'}
            alignItems={'center'}
            m={'0 auto'}
            maxW={{ xl: '1200px' }}>
                <Header/>
            {children}
        </Flex>
    )
}

export default DefaultLayout