import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer, useColorModeValue, Button, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay } from "@chakra-ui/react";
import { FaHome, FaUser, FaEnvelope, FaPlus } from "react-icons/fa";
import { useState } from "react";
import React from "react";

const Index = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "Blog Post Title 1", content: "This is a summary of the blog post content. It should be engaging and give an idea of what the post is about." },
    { id: 2, title: "Blog Post Title 2", content: "This is a summary of the blog post content. It should be engaging and give an idea of what the post is about." },
    { id: 3, title: "Blog Post Title 3", content: "This is a summary of the blog post content. It should be engaging and give an idea of what the post is about." }
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  const handleDelete = (post) => {
    setSelectedPost(post);
    setIsOpen(true);
  };

  const confirmDelete = () => {
    setPosts(posts.filter(p => p.id !== selectedPost.id));
    setIsOpen(false);
  };

  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg={useColorModeValue("gray.800", "gray.200")} color={useColorModeValue("white", "black")} p={4} borderRadius="md" mb={6}>
        <HStack spacing={8}>
          <Link href="#" fontSize="xl" fontWeight="bold">
            MyBlog
          </Link>
          <HStack spacing={4}>
            <Link href="#"><FaHome /> Home</Link>
            <Link href="#"><FaUser /> About</Link>
            <Link href="#"><FaEnvelope /> Contact</Link>
            <Link href="/add-post"><FaPlus /> Add Post</Link>
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
            {posts.map(post => (
              <Box key={post.id} p={5} shadow="md" borderWidth="1px" bg={useColorModeValue("white", "gray.700")} color={useColorModeValue("black", "white")}>
                <Heading fontSize="xl">{post.title}</Heading>
                <Text mt={4}>{post.content}</Text>
                <Button colorScheme="red" mt={4} onClick={() => handleDelete(post)}>Delete</Button>
              </Box>
            ))}
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

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Post
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to delete this post? This action cannot be undone.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={confirmDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Container>
  );
};

export default Index;