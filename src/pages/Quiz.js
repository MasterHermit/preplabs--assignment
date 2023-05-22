import React, { useState } from 'react';
import { Box, Button, Text, VStack, Heading, Center } from '@chakra-ui/react';

const quizData = [
  {
    "question": "What is the result of the following expression: 2 + 2 * 3?",
    "options": ["4", "8", "10", "16"],
    "answerIndex": 2
  },
  {
    "question": "Which keyword is used to declare a constant variable in JavaScript?",
    "options": ["var", "let", "const", "final"],
    "answerIndex": 2
  },
  {
    "question": "What is the correct way to check if a variable x is not equal to 5?",
    "options": ["x === 5", "x !== 5", "x != 5", "x =! 5"],
    "answerIndex": 1
  },
  {
    "question": "Which method is used to add an element at the end of an array?",
    "options": ["push()", "pop()", "shift()", "unshift()"],
    "answerIndex": 0
  },
  {
    "question": "What is the purpose of the 'this' keyword in JavaScript?",
    "options": ["To refer to the current function", "To refer to the parent function", "To refer to the global object", "To refer to the calling object"],
    "answerIndex": 3
  },
  {
    "question": "Which function is used to convert a string to an integer in JavaScript?",
    "options": ["parseInt()", "parseFloat()", "toFixed()", "toString()"],
    "answerIndex": 0
  },
  {
    "question": "What is the result of the following expression: '5' + 2?",
    "options": ["52", "7", "NaN", "22"],
    "answerIndex": 0
  },
  {
    "question": "Which operator is used to concatenate strings in JavaScript?",
    "options": ["+", "*", "/", "&"],
    "answerIndex": 0
  },
]



const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);

  const handleOptionSelect = (optionIndex) => {
    setSelectedOptionIndex(optionIndex);
  };

  const handleNextQuestion = () => {
    if (selectedOptionIndex !== null) {
      if (quizData[currentQuestionIndex].answerIndex === selectedOptionIndex) {
        setScore(score + 1);
      }

      setSelectedOptionIndex(null);

      if (currentQuestionIndex + 1 < quizData.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setShowScore(true);
      }
    }
  };

  const handleShowCorrectAnswers = () => {
    setShowCorrectAnswers(true);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setScore(0);
    setShowScore(false);
    setShowCorrectAnswers(false);
  };

  const renderOptions = () => {
    const options = quizData[currentQuestionIndex].options.map((option, index) => {
      const bgColor = index === selectedOptionIndex ? 'yellow' : 'gray.200';

      return (
        <Button
          key={index}
          onClick={() => handleOptionSelect(index)}
          variant="outline"
          colorScheme={bgColor}
        >
          {option}
        </Button>
      );
    });

    return <VStack spacing={4}>{options}</VStack>;
  };

  if (showScore) {
    return (
      <Center>
        <Box p={8} borderWidth={1} borderRadius="lg" boxShadow="lg">
          <Heading as="h2" size="lg" mb={4}>
            Quiz Score
          </Heading>
          <Text mb={4}>Total Questions: {quizData.length}</Text>
          <Text mb={4}>Correct Answers: {score}</Text>
          <Text mb={4}>Incorrect Answers: {quizData.length - score}</Text>
          <Button onClick={resetQuiz} colorScheme="teal">
            Restart Quiz
          </Button>
          {!showCorrectAnswers && (
            <Button mt={4} onClick={handleShowCorrectAnswers} colorScheme="teal">
              Show Correct Answers
            </Button>
          )}
          {showCorrectAnswers && (
            <VStack mt={4} alignItems="start">
              {quizData.map((quiz, index) => (
                <Text key={index} mb={2}>
                  {index + 1}. {quiz.options[quiz.answerIndex]}
                </Text>
              ))}
            </VStack>
          )}
        </Box>
      </Center>
    );
  }

  return (
    <Center>
      <Box p={8} borderWidth={1} borderRadius="lg" boxShadow="lg">
        <Heading as="h2" size="lg" mb={4}>
          Quiz
        </Heading>
        <Text mb={4}>{quizData[currentQuestionIndex].question}</Text>
        {renderOptions()}
        <Button
          mt={4}
          onClick={handleNextQuestion}
          isDisabled={selectedOptionIndex === null}
          colorScheme="teal"
        >
          Next
        </Button>
      </Box>
    </Center>
  );
};

export default Quiz;
