//chakra ui components
import { Box, Flex, Heading, Text, Button, HStack, Grid, Avatar } from "@chakra-ui/react";

//icons
import { TbSettings2 } from "react-icons/tb"
import { AiOutlineVideoCamera, AiOutlineTrophy, AiOutlineStar } from "react-icons/ai"
import { FaFileDownload } from "react-icons/fa"
import { BiNote, BiDoughnutChart } from "react-icons/bi"
import { MdOutlineLanguage } from "react-icons/md"
import { SlBadge } from "react-icons/sl"
import { BsFillPlayFill } from "react-icons/bs"

//components
import CourseCard from "./CourseCard";
import LectureAccordion from "./LectureAccordion";

function CourseDetails() {
    const description = [
        "Have a intermediate skill level of python programming",
        "Use the jupyter Notebook Enviroment",
        "Use the numpy library to create and manipulate arrays",
        "Use the pandas module with pythob to create and structure data",

    ];
    const lectures = [
        {
            name: "Introduction to React",
            duration: "1 hour",
            topics: [
                { name: "What is React?", duration: "10 minutes" },
                { name: "Setting up a React project", duration: "15 minutes" },
                { name: "Components and props", duration: "20 minutes" },
                { name: "State and lifecycle methods", duration: "15 minutes" },
                { name: "Handling user events", duration: "10 minutes" }
            ]
        },
        {
            name: "React Hooks",
            duration: "1.5 hours",
            topics: [
                { name: "Introduction to Hooks", duration: "15 minutes" },
                { name: "useState Hook", duration: "20 minutes" },
                { name: "useEffect Hook", duration: "30 minutes" },
                { name: "useContext Hook", duration: "30 minutes" },
                { name: "Custom Hooks", duration: "15 minutes" }
            ]
        },
        {
            name: "React Router",
            duration: "30 minutes",
            topics: [
                { name: "Routing basics", duration: "10 minutes" },
                { name: "Route parameters", duration: "10 minutes" },
                { name: "Nested routes", duration: "10 minutes" }
            ]
        },
        {
            name: "React Native",
            duration: "1 hour 30 minutes",
            topics: [
                { name: "Introduction to React Native", duration: "10 minutes" },
                { name: "Creating a new project", duration: "15 minutes" },
                { name: "Components and styling", duration: "30 minutes" },
                { name: "Navigation in React Native", duration: "20 minutes" },
                { name: "Using APIs in React Native", duration: "15 minutes" }
            ]
        },
        {
            name: "Server-side rendering with React",
            duration: "45 minutes",
            topics: [
                { name: "Introduction to server-side rendering", duration: "10 minutes" },
                { name: "Setting up a server-side rendering project", duration: "15 minutes" },
                { name: "Server-side rendering with React", duration: "20 minutes" }
            ]
        },
        {
            name: "React Performance",
            duration: "1 hour",
            topics: [
                { name: "Optimizing React components", duration: "20 minutes" },
                { name: "Using shouldComponentUpdate", duration: "15 minutes" },
                { name: "React memoization", duration: "15 minutes" },
                { name: "Using React DevTools to improve performance", duration: "10 minutes" }
            ]
        }
        // add more lectures here
    ];
    const course = {
        thumbnail: "https://images.unsplash.com/photo-1613677135043-a2512fbf49fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHl0aG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "Introduction to React",
        price: 49.99,
    };

    return (
        //tasks to-do
        //make mobile resonsive
        //if you already have a parent div to put the component then remmove the first box
        <Box
        >
            <Box mx="8" py="8">
                <Flex justify="space-between">
                    <Box w="75%">
                        <Heading as="h1" size="xl" mb="4">Learning Python for Data Analysis And Visualization</Heading>
                        <Heading as="h2" size="l" mb="4" >Learn Python and how to use it to analyze your data  and present your results and datas</Heading>
                        <Flex m="4">
                            <Button bg="black" color="white" borderRadius="2xl" mr="8">
                                Bestseller
                            </Button>
                            <Text>Rating Sytem</Text>
                        </Flex>
                        <Text >Created by Saistupa</Text>
                        <Flex mb="12">
                            <HStack mr="12">
                                <TbSettings2 size="1.5rem" />
                                <Text >
                                    Last updated 9/2019
                                </Text>
                            </HStack>
                            <HStack>
                                <MdOutlineLanguage size="1.5rem" />
                                <Text>English</Text>
                            </HStack>
                        </Flex>
                        <Grid mb="12" templateColumns='repeat(2, 1fr)' spacing={4}>
                            {description.map((item) => (
                                <Text key={item}>{item}</Text>
                            ))}
                        </Grid>
                        <Grid templateColumns='repeat(2, 1fr)' spacing={4}>
                            <Box m="4">
                                <HStack mr="12">
                                    <AiOutlineVideoCamera size="1.5rem" />
                                    <Text >
                                        21 hours on-demand video
                                    </Text>
                                </HStack>
                            </Box>
                            <Box m="4">
                                <HStack mr="12">
                                    <AiOutlineTrophy size="1.5rem" />
                                    <Text >
                                        certificate of completion
                                    </Text>
                                </HStack>
                            </Box>
                            <Box m="4">
                                <HStack mr="12">
                                    <BiNote size="1.5rem" />
                                    <Text >
                                        3 articles
                                    </Text>
                                </HStack>
                            </Box>
                            <Box m="4">
                                <HStack mr="12">
                                    <FaFileDownload size="1.5rem" />
                                    <Text >
                                        4 downloadable resources
                                    </Text>
                                </HStack>
                            </Box>
                        </Grid>
                    </Box>
                    <Box
                        borderWidth="2px"
                        borderColor="black"
                        borderRadius="lg"
                        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)"
                        w="25%">
                        <CourseCard thumbnail={course.thumbnail} title={course.title} price={course.price} />
                    </Box>
                </Flex>
                <Box mt="8" mb="4">
                    {/* yes we could have created a global accordion component and use it anywhere we required
                but as we are using a css lib so we can always look for this accordion structure and change as your need */}
                    <LectureAccordion lectures={lectures} />
                </Box>
                <Box>
                    <Heading as="h2">Requirments</Heading>
                    <Grid mb="4" templateColumns='repeat(2, 1fr)' spacing={4}>
                        {description.map((item) => (
                            <Text key={item}>{item}</Text>
                        ))}
                    </Grid>
                </Box>
                <Box mb="4">
                    <Heading as="h2">
                        Description
                    </Heading>
                    <Text >
                        Python is a high-level programming language that is widely used in various fields, including data science, machine learning, web development, and automation. This course is designed to introduce students to the fundamental concepts and syntax of Python programming.

                        The course will cover topics such as variables, data types, control structures, functions, object-oriented programming, and file I/O. Students will learn how to write Python scripts to automate tasks, manipulate data, and build applications.
                    </Text>
                </Box>
                <Box mb="2">
                    <Heading as="h2" marginBottom="0">
                        Instructor
                    </Heading>
                    <Text marginTop="0" marginBottom="0" fontWeight="bold" fontSize="2xl">SaiStupa Mohanty</Text>
                </Box>
                <Box >
                    <Heading marginTop="0" as="h3">Head of the Data science at Trainings</Heading>
                    <Flex>
                        <Box>
                            <Avatar
                                size='lg'
                                name='Prosper Otemuyiwa'
                                src='https://bit.ly/prosper-baba'
                            />{' '}</Box>
                        <Box ml="8">
                            <HStack mb="2">
                                <AiOutlineStar size="1.5rem" />
                                <Text fontWeight="bold" frontSize="xl">4.6 Instructor Rating</Text>
                            </HStack>
                            <HStack mb='2'>
                                <SlBadge size="1.5rem" />
                                <Text fontWeight="bold" frontSize="xl">1,017,652 Reviews</Text>
                            </HStack>
                            <HStack mb="2">
                                <BiDoughnutChart size="1.5rem" />
                                <Text fontWeight="bold" frontSize="xl">3,276,215 Students</Text>
                            </HStack>
                            <HStack mb="2">
                                <BsFillPlayFill c size="1.5rem" />
                                <Text fontWeight="bold" frontSize="xl">60 Courses</Text>
                            </HStack>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
}

export default CourseDetails;
