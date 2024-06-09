import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer } from "@chakra-ui/react";
import { FaHome, FaUser, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} borderRadius="md" mb={6}>
        <HStack spacing={8}>
          <Link href="#" fontSize="xl" fontWeight="bold">
            MyBlog
          </Link>
          <HStack spacing={4}>
            <Link href="#"><FaHome /> Home</Link>
            <Link href="#"><FaUser /> About</Link>
            <Link href="#"><FaEnvelope /> Contact</Link>
          </HStack>
        </HStack>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#">Login</Link>
          <Link href="#">Sign Up</Link>
        </HStack>
      </Flex>

      <Flex>
        <Box flex="3" p={4}>
          <VStack spacing={6} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Blog Post Title 1</Heading>
              <Text mt={4}>This is a summary of the blog post content. It should be engaging and give an idea of what the post is about.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Blog Post Title 2</Heading>
              <Text mt={4}>This is a summary of the blog post content. It should be engaging and give an idea of what the post is about.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Blog Post Title 3</Heading>
              <Text mt={4}>This is a summary of the blog post content. It should be engaging and give an idea of what the post is about.</Text>
            </Box>
          </VStack>
        </Box>

        <Box flex="1" p={4} ml={6} bg="gray.50" borderRadius="md" shadow="md">
          <Heading fontSize="lg" mb={4}>About Me</Heading>
          <Text mb={4}>This is a short bio about the blog author. It gives readers a sense of who you are and what you write about.</Text>
          <Heading fontSize="lg" mb={4}>Categories</Heading>
          <VStack align="start">
            <Link href="#">Category 1</Link>
            <Link href="#">Category 2</Link>
            <Link href="#">Category 3</Link>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;