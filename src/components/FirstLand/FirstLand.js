import React from "react";
import {
  Center,
  VStack,
  Box,
  Image,
  Flex,
  Stack,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import Logo from "../../assets/FLogo.png";

const MotionText = motion(Text);

const FirstLand = () => {
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();

  return (
    <>
      <Flex
        p={4}
        align="center"
        justify="space-between"
        position="fixed"
        top="0"
        left="0"
        w="100%"
        zIndex="10"
        bgGradient="linear(to-r, teal.500, blue.400)"
        boxShadow="lg"
      >
        <IconButton
          icon={<HamburgerIcon w={8} h={8} color="white" />}
          variant="ghost"
          aria-label="Open Menu"
          onClick={onDrawerOpen}
        />

        <Box>
          <img
            src={Logo}
            alt="FL Mastery Hub Logo"
            style={{
              width: "70px",
              height: "70px",
              cursor: "pointer",
              transition: "all 0.2s ease-in-out",
            }}
            onClick={() => (window.location.href = "/")}
          />
        </Box>
      </Flex>

      <Drawer isOpen={isDrawerOpen} placement="left" onClose={onDrawerClose}>
        <DrawerOverlay />
        <DrawerContent bgGradient="linear(to-r, teal.500, blue.400)">
          <DrawerCloseButton color="white" />
          <DrawerHeader
            color="white"
            fontWeight="bold"
            textDecoration="underline"
            fontSize="3xl"
          >
            Menu
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="flex-start">
              <Link
                href="/"
                fontSize="xl"
                color="white"
                fontWeight="Medium"
                _hover={{
                  textDecoration: "none",
                  color: "#FFD27A",
                  fontSize: "2xl",
                }}
                transition="all 0.5s ease-in-out"
              >
                Home
              </Link>
              <Link
                href="/aboutus"
                fontSize="xl"
                color="white"
                fontWeight="Medium"
                _hover={{
                  textDecoration: "none",
                  color: "#FFD27A",
                  fontSize: "2xl",
                }}
                transition="all 0.5s ease-in-out"
              >
                About Us
              </Link>
              <Link
                href="/catalogue"
                fontSize="xl"
                color="white"
                fontWeight="Medium"
                _hover={{
                  textDecoration: "none",
                  color: "#FFD27A",
                  fontSize: "2xl",
                }}
                transition="all 0.5s ease-in-out"
              >
                Catalogue
              </Link>
              <Link
                href="/homepage"
                fontSize="xl"
                color="white"
                fontWeight="Medium"
                _hover={{
                  textDecoration: "none",
                  color: "#FFD27A",
                  fontSize: "2xl",
                }}
                transition="all 0.5s ease-in-out"
              >
                Courses
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Center
        w="100vw"
        h="100vh"
        bgGradient="linear(to-r, teal.500, blue.400)"
        pt={"70px"}
      >
        <Stack
          direction={["column", "column", "row"]}
          spacing={[6, 8, 20]}
          align="center"
          justify="center"
          textAlign="center"
        >
          <MotionText
            fontSize={["3xl", "4xl", "5xl"]}
            fontWeight="extrabold"
            color="white"
            letterSpacing="wider"
            textAlign="center"
            cursor="pointer"
            whileHover={{
              scale: 1.2,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.4 },
            }}
            onClick={() => (window.location.href = "/aboutus")}
          >
            ABOUT US
          </MotionText>

          <MotionText
            fontSize={["3xl", "4xl", "5xl"]}
            fontWeight="extrabold"
            color="white"
            letterSpacing="wider"
            textAlign="center"
            cursor="pointer"
            whileHover={{
              scale: 1.2,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.4 },
            }}
            onClick={() => (window.location.href = "/catalogue")}
          >
            CATALOGUE
          </MotionText>

          <MotionText
            fontSize={["3xl", "4xl", "5xl"]}
            fontWeight="extrabold"
            color="white"
            letterSpacing="wider"
            textAlign="center"
            cursor="pointer"
            whileHover={{
              scale: 1.2,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.4 },
            }}
            onClick={() => (window.location.href = "/homepage")}
          >
            COURSES
          </MotionText>
        </Stack>
      </Center>
    </>
  );
};

export default FirstLand;
