import { Box, Flex, Spacer, Link as ChakraLink, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Box bg="gray.200" p={4}>
            <Flex maxW="1200px" mx="auto" alignItems="center">
                <ChakraLink as={Link} to="/" fontSize="xl" fontWeight="bold" color="blue.800">
                    Home
                </ChakraLink>
                <Spacer />
                <Box>
                    <Button as={Link} to="/quiz" colorScheme="blue" mr={4}>
                        Quiz
                    </Button>
                    <Button as={Link} to="/about" colorScheme="blue" mr={4}>
                        About
                    </Button>
                    <Button as={Link} to="/contact" colorScheme="blue">
                        Contact
                    </Button>
                </Box>
            </Flex>
        </Box>
    );
};

export default Navbar;
