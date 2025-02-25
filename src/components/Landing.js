import React from "react";
import { Box, Center, VStack, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../assets/FLogo.png";

const MotionCenter = motion(Center);
const MotionBox = motion(Box);

const Landing = () => {
  const navigate = useNavigate();

  return (
    <MotionCenter
      w="100vw"
      h="100vh"
      bgGradient="linear(to-br, #2C3E50, #34495E, #1ABC9C)"
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%"],
      }}
      transition={{
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        repeatType: "mirror",
      }}
      overflow="hidden"
    >
      <VStack spacing={12} align="center">
        <MotionBox
          p={6}
          borderRadius="full"
          bg="rgba(255, 255, 255, 0.1)"
          boxShadow="0px 0px 20px rgba(255, 255, 255, 0.3)"
          whileHover={{
            scale: 1.1,
            rotate: 5,
            boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.6)",
          }}
          onClick={() => navigate("/FirstLand")}
          cursor="pointer"
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image src={Logo} alt="FL Studio Logo" boxSize={["150px", "200px"]} />
        </MotionBox>
      </VStack>
    </MotionCenter>
  );
};

export default Landing;
