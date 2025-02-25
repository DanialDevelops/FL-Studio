import React, { useEffect, useRef, useState } from "react";
import {
  Center,
  VStack,
  Box,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Flex,
  HStack,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import * as pdfjsLib from "pdfjs-dist/webpack";
import BookIcon from "../../assets/Book.png";
import Logo from "../../assets/FLogo.png";

const MotionBox = motion(Box);

const Homepage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  const [numPages, setNumPages] = useState(0);
  const pdfRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const loadPDF = async () => {
        const pdf = await pdfjsLib.getDocument("/FL 21 Web Dev Dummy.pdf")
          .promise;
        pdfRef.current = pdf;
        setNumPages(pdf.numPages);
      };
      loadPDF();
    }
  }, [isOpen]);

  const renderPage = async (pageNumber) => {
    const pdf = pdfRef.current;
    if (!pdf) return null;

    const page = await pdf.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1.5 });

    const canvas = document.getElementById(`pdf-canvas-${pageNumber}`);
    const context = canvas.getContext("2d");

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({ canvasContext: context, viewport }).promise;
  };

  useEffect(() => {
    if (isOpen && numPages > 0) {
      for (let i = 1; i <= numPages; i++) {
        renderPage(i);
      }
    }
  }, [isOpen, numPages]);

  return (
    <>
      {/* Navigation Bar */}
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
        {/* Hamburger Menu Icon */}
        <IconButton
          icon={<HamburgerIcon w={8} h={8} color="white" />}
          variant="ghost"
          aria-label="Open Menu"
          onClick={onDrawerOpen}
        />

        {/* Logo */}
        <Image
          src={Logo}
          alt="FL Mastery Hub Logo"
          boxSize={"70px"}
          _hover={{
            transform: "scale(1.1)",
            transition: "all 0.2s ease-in-out",
          }}
        />
      </Flex>

      {/* Drawer Menu */}
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
              <Link
                href="/FirstLand"
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
                Landing
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Main Content */}
      <Center
        w="100vw"
        h="100vh"
        bgGradient="linear(to-r, teal.500, blue.400)"
        pt={"70px"}
      >
        <VStack spacing={6} align="center">
          <MotionBox
            cursor="pointer"
            whileHover={{ scale: 1.15, rotate: 5, zIndex: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={onOpen}
          >
            <Image
              src={BookIcon}
              alt="Book Icon"
              objectFit="contain"
              w={["200px", "250px", "300px", "300px"]} 
              maxW="90vw" 
              maxH="80vh" 
            />
          </MotionBox>
        </VStack>
        <Modal isOpen={isOpen} onClose={onClose} size="full">
          <ModalOverlay bg="blackAlpha.800" />
          <ModalContent
            bgGradient="linear(to-br, #2C3E50, #34495E, #1ABC9C)"
            borderRadius="lg"
            boxShadow="2xl"
          >
            <ModalCloseButton
              color="#FFBE3C"
              size="2xl"
              _hover={{
                transform: "scale(1.2)",
                transition: "all 0.2s ease-in-out",
              }}
            />
            <ModalBody>
              <Center>
                <Box
                  w={"85%"}
                  h="95vh"
                  overflowY="scroll"
                  borderRadius="lg"
                  boxShadow="lg"
                  bg="white"
                  p={4}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  transition="all 0.3s"
                >
                  {Array.from({ length: numPages }, (_, i) => (
                    <Box key={i + 1} mb={4}>
                      <canvas
                        id={`pdf-canvas-${i + 1}`}
                        style={{
                          width: "100%",
                          borderRadius: "10px",
                          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Center>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Center>
    </>
  );
};

export default Homepage;
