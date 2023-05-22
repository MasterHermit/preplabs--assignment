import { useState } from "react";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, Flex, Icon, Text } from "@chakra-ui/react";
import { GoChevronUp, GoChevronDown } from "react-icons/go";

const LectureAccordion = ({ lectures }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Accordion allowToggle>
            {lectures.map((lecture, index) => (
                <AccordionItem key={index}>
                    <h2>
                        <AccordionButton onClick={() => setIsOpen(!isOpen)}>
                            <Box flex="1" textAlign="left">
                                <Text fontWeight="bold">{lecture.name}</Text>
                            </Box>
                            <Flex alignItems="center">
                                <Text fontSize="sm" mr={2}>{lecture.duration}</Text>
                                <Icon as={isOpen ? GoChevronUp : GoChevronDown} />
                            </Flex>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        {lecture.topics.map((topic, index) => (
                            <Flex justifyContent="space-between" key={index} ml={4}>
                                <Text c>{topic.name}</Text>
                                <Text fontSize="sm">{topic.duration}</Text>
                            </Flex>
                        ))}
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default LectureAccordion;
