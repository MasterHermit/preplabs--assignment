import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Image,
  Text,
  Flex,
  Badge,
  Avatar,
  Stack,
  Icon,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const CourseCard = ({ thumbnail, title, instructor, rating, price }) => {

  return (
    <Link to="/course/details" >
      <Box maxW="sm" mx="6" my="4" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={thumbnail} alt={title} />

        <Box p="4">
          <Text fontSize="xl" fontWeight="semibold">
            {title}
          </Text>
          <Text mt="2" color="gray.600">
            Instructor: {instructor}
          </Text>

          <Flex justifyContent="space-between" align="center" mt="2">
            <Stack direction="row" spacing={1} align="center">
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <Icon
                    key={i}
                    as={StarIcon}
                    color={i < rating ? 'teal.500' : 'gray.300'}
                  />
                ))}
              <Text ml="2" fontSize="sm" color="gray.600">
                ({rating})
              </Text>
            </Stack>
            <Flex align="center" mt="2">
              <Text fontSize="lg" fontWeight="semibold" color="teal.500">
                {price}
              </Text>
              <Badge ml="2" colorScheme="teal">
                New
              </Badge>
            </Flex>
          </Flex>

        </Box>
      </Box>
    </Link>
  );
};

export default CourseCard;
