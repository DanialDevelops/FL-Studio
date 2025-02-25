import React from "react";
import { VStack, HStack, Box, Text, Button, Stack } from "@chakra-ui/react";
import Producer from "../../assets/Producer.jpg";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <VStack
      w="100%"
      minH="100vh"
      spacing={8}
      bgGradient="linear(to-r, teal.500, blue.400)"
      color="white"
    >
      <HStack
        w="100%"
        h="70vh"
        bgImage={`url(${Producer})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <Box
          w="100%"
          h="100%"
          bg="rgba(0, 0, 0, 0.5)"
          position="absolute"
          top="0"
          left="0"
          zIndex="1"
        />
        <VStack spacing={4} zIndex="2" textAlign="center">
          <Text
            fontSize={["4xl", "5xl", "6xl"]}
            fontWeight="bold"
            color="white"
            textShadow="2px 2px 8px rgba(0, 0, 0, 0.8)"
          >
            About Us
          </Text>
          <Text
            fontSize={["md", "lg", "xl"]}
            px={[4, 8, 16]}
            color="white"
            textShadow="1px 1px 5px rgba(0, 0, 0, 0.6)"
          >
            For Musicians Everywhere.
          </Text>
        </VStack>
      </HStack>

      <Box px={[4, 8, 16]} py={[6, 8]} textAlign="center">
        <Text
          fontSize="2xl"
          fontWeight="bold"
          mb={4}
          bgGradient="linear(to-r, teal.300, blue.300)"
          bgClip="text"
        >
          Our Vision
        </Text>
        <Text fontSize="xl" color="whiteAlpha.800" mb={8}>
          At FL Mastery Hub, we aim to empower music enthusiasts by offering
          world-class tutorials, in-depth guidance, and a supportive community.
          Whether you're a beginner or an expert, we’re here to elevate your
          craft.
        </Text>
        <Stack
          spacing={8}
          justifyContent="center"
          direction={["column", "row"]}
        >
          <Box
            w="100%"
            maxW={["100%", "40%"]}
            bgGradient="linear(to-r, teal.600, blue.600)"
            p={[4, 6]}
            borderRadius="lg"
            boxShadow="lg"
            color="white"
          >
            <Text fontSize="lg" fontWeight="bold" color="white">
              Our Mission
            </Text>
            <Text mt={4} color="whiteAlpha.900">
              Helping you compose, produce, and perfect your music with ease
              using state-of-the-art techniques and tools.
            </Text>
          </Box>
          <Box
            w="100%"
            maxW={["100%", "40%"]}
            bgGradient="linear(to-r, teal.600, blue.600)"
            p={[4, 6]}
            borderRadius="lg"
            boxShadow="lg"
            color="white"
          >
            <Text fontSize="lg" fontWeight="bold" color="white">
              Why Choose Us?
            </Text>
            <Text mt={4} color="whiteAlpha.900">
              Trusted by thousands of creators worldwide for our curated content
              and real-world music production experience.
            </Text>
          </Box>
        </Stack>
      </Box>
      <Button
        colorScheme="teal"
        size="lg"
        bg="blue.600"
        m={[6, 10]}
        px={[6, 12]}
        fontSize={["md", "lg"]}
        _hover={{
          bg: "blue.400",
          transform: "scale(1.05)",
        }}
        onClick={() => navigate("/homepage")}
      >
        Learn More
      </Button>
    </VStack>
  );
};

export default AboutUs;
