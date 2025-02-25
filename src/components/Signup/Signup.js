import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Radio,
  RadioGroup,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState({ month: "", day: "", year: "" });
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        email,
        birthday,
        gender,
        createdAt: new Date(),
      });

      console.log("User registered and additional data saved.");
      navigate("/homepage"); // Redirect to Homepage after signup
    } catch (error) {
      console.error("Error signing up:", error);
      setError(error.message);
    }
  };

  const handleSignin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in successfully");
      navigate("/homepage"); // Redirect to Homepage after sign-in
    } catch (error) {
      console.error("Error signing in:", error);
      setError(error.message);
    }
  };

  // Define toggleAuthMode function
  const toggleAuthMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    setError("");
  };

  const months = [
    { label: "Jan", value: "01" },
    { label: "Feb", value: "02" },
    { label: "Mar", value: "03" },
    { label: "Apr", value: "04" },
    { label: "May", value: "05" },
    { label: "Jun", value: "06" },
    { label: "Jul", value: "07" },
    { label: "Aug", value: "08" },
    { label: "Sep", value: "09" },
    { label: "Oct", value: "10" },
    { label: "Nov", value: "11" },
    { label: "Dec", value: "12" },
  ];

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const years = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i
  );

  return (
    <Center w="100vw" h="100vh" bgGradient="linear(to-r, teal.500, blue.400)">
      <Container
        maxW={["95%", "90%", "2xl"]}
        bg="rgba(255, 255, 255, 0.8)"
        p={[4, 6, 8]}
        m={[4, 8, 10]}
        borderRadius="lg"
        boxShadow="2xl"
        backdropFilter="blur(10px)"
      >
        <VStack spacing={2} textAlign="center">
          <Text fontSize={["lg", "xl", "2xl"]} fontWeight="bold" color="teal.700">
            {isSignUp ? "Create a new account" : "Sign In to Your Account"}
          </Text>
        </VStack>
        <Divider borderColor="gray.300" my={4} />
        <VStack spacing={4}>
          {isSignUp && (
            <>
              <Box display="flex" w="full" gap={2}>
                <FormControl>
                  <Input
                    placeholder="First name"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    focusBorderColor="teal.500"
                  />
                </FormControl>
                <FormControl>
                  <Input
                    placeholder="Last name"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    focusBorderColor="teal.500"
                  />
                </FormControl>
              </Box>

              <FormControl>
                <FormLabel>Birthday</FormLabel>
                <HStack spacing={2}>
                  <Select
                    placeholder="Month"
                    onChange={(e) =>
                      setBirthday({ ...birthday, month: e.target.value })
                    }
                    focusBorderColor="teal.500"
                  >
                    {months.map((month) => (
                      <option key={month.value} value={month.label}>
                        {month.label}
                      </option>
                    ))}
                  </Select>
                  <Select
                    placeholder="Day"
                    onChange={(e) =>
                      setBirthday({ ...birthday, day: e.target.value })
                    }
                    focusBorderColor="teal.500"
                  >
                    {days.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </Select>
                  <Select
                    placeholder="Year"
                    onChange={(e) =>
                      setBirthday({ ...birthday, year: e.target.value })
                    }
                    focusBorderColor="teal.500"
                  >
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </Select>
                </HStack>
              </FormControl>

              <FormControl as="fieldset">
                <FormLabel as="legend">Gender</FormLabel>
                <RadioGroup onChange={setGender} value={gender}>
                  <HStack spacing="24px">
                    <Radio value="Male" colorScheme="teal">Male</Radio>
                    <Radio value="Female" colorScheme="teal">Female</Radio>
                    <Radio value="Other" colorScheme="teal">Other</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
            </>
          )}

          <FormControl>
            <Input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              focusBorderColor="teal.500"
            />
            {isSignUp && (
              <FormHelperText color="teal.600">We'll never share your email.</FormHelperText>
            )}
          </FormControl>

          <FormControl>
            <InputGroup>
              <Input
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                focusBorderColor="teal.500"
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={handlePasswordVisibility}
                  colorScheme="teal"
                  variant="ghost"
                >
                  {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Button
            bg="#F97127"
            color="white"
            width="full"
            mt={4}
            _hover={{
              bg: "#FFD27A",
            }}
            onClick={isSignUp ? handleSignup : handleSignin}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          {error && <Text color="red.500">{error}</Text>}
          <Button variant="link" colorScheme="teal" onClick={toggleAuthMode}>
            {isSignUp
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </Button>
        </VStack>
      </Container>
    </Center>
  );
};

export default Auth;
