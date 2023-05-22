//chakra components
import { Box, Flex, Button, Text, Image, IconButton } from "@chakra-ui/react";

//icons
import { FaPlay } from "react-icons/fa"
import { AiOutlineShareAlt } from "react-icons/ai"

function CourseCard({ thumbnail, title, price }) {
    return (
        <Flex
            direction="column"
            borderRadius="lg"
            overflow="hidden"
            ml="6"
        >

            {/* 1st section */}
            <Box position="relative">
                <Image src={thumbnail} alt={title} />
                <IconButton
                    icon={<FaPlay size="3rem" />}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    colorScheme="white"
                    color="black"
                    size="2xl"
                    borderRadius="rounded"
                    p={8}
                >

                </IconButton>
            </Box>

            {/* 2nd section */}

            <Box p="6">
                <Box
                    display="flex"
                    justifyContent="center"
                    mb="2">

                    <Button
                        bg="black"
                        color="white"
                        size="lg"
                    >
                        Buy now
                    </Button>
                </Box>
                <Box
                    display="flex"
                    justifyContent="center"
                    mb={2}>
                    <Text marginBottom="0" marginTop="0">${price} per month</Text>
                </Box>
                <Box display="Flex" justifyContent="center" mb={4}>
                    <Button
                        bg="black"
                        color="white"
                        leftIcon={<AiOutlineShareAlt />}
                        mr={4}
                    >
                        Share
                    </Button>
                    <Button
                        bg="black"
                        color="white"
                        size="md"
                    >
                        Apply coupon
                    </Button>
                </Box>
                <Box mb={2}>
                    <Text c>
                        This course is designed to teach you the fundamentals of React. You will learn how to create and manage React components, work with state and props, and more.
                    </Text>
                </Box>
                <Box display="flex" justifyContent="center" mb={2}>
                    <Button
                        bg="black"
                        color="white"
                        size="lg"
                    >
                        Start subscription
                    </Button>
                </Box>
            </Box>
        </Flex>
    );
}

export default CourseCard;
