import React, { useState } from 'react'
import CourseCard from '../components/CourseCard'
import { Box, Text, Flex, Input } from '@chakra-ui/react'

export default function AllCourses() {
  const [searchTerm, setSearchTerm] = useState("");

  const coursesData = [
    {
      thumbnail: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8amF2YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Introduction to React",
      instructor: "John Doe",
      rating: 4.5,
      price: "$49.99"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8amF2YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "JavaScript Fundamentals",
      instructor: "Jane Smith",
      rating: 4.2,
      price: "$39.99"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8amF2YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Learning HTML5",
      instructor: "David Johnson",
      rating: 4.7,
      price: "$29.99"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8amF2YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Mastering CSS3",
      instructor: "Sarah Thompson",
      rating: 4.8,
      price: "$34.99"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8amF2YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Project Management Basics",
      instructor: "Michael Johnson",
      rating: 4.4,
      price: "$24.99"
    },
    // Add more objects here...
  ];
  const filteredCourses = coursesData.filter((course) => {
    return course.title.toLowerCase().includes(searchTerm.toLowerCase());
  })

  const toBeRendered = filteredCourses.map((course) => (
    <CourseCard
      key={course.title}
      title={course.title}
      thumbnail={course.thumbnail}
      instructor={course.instructor}
      rating={course.rating}
      price={course.price}
    />
  ))
  return (
    <Box>
      <Box>
        <Text fontSize="2xl" fontWeight="bold">All Courses</Text>
      </Box>
      <Box>
        <Input
          borderWidth="2px"
          borderColor="green"
          width="60%"
          placeholder="search courses"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>
      <Flex wrap="wrap">
        {toBeRendered}
      </Flex>
    </Box>
  )
}
