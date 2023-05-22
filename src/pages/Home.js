import React from 'react'
import AllCourses from './AllCourses'
import ImageCarousel from '../components/ImageCarousel'
import { TbFileX } from 'react-icons/tb'
import { Flex } from '@chakra-ui/react'

export default function Home() {
    return (
        <Flex direction="column">
            <ImageCarousel />
            <AllCourses />
        </Flex>
    )
}
