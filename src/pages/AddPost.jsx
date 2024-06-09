import React, { useState } from 'react';
import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, VStack, useToast, useColorModeValue } from '@chakra-ui/react';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, content });
    toast({
      title: "Post created.",
      description: "Your blog post has been created successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setTitle('');
    setContent('');
  };

  return (
    <Container maxW="container.md" p={4}>
      <Box as="form" onSubmit={handleSubmit} p={4} borderWidth="1px" borderRadius="md" boxShadow="md" bg={useColorModeValue("white", "gray.700")} color={useColorModeValue("black", "white")}>
        <VStack spacing={4}>
          <FormControl id="title" isRequired>
            <FormLabel>Title</FormLabel>
            <Input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="Enter the title of your post" 
            />
          </FormControl>
          <FormControl id="content" isRequired>
            <FormLabel>Content</FormLabel>
            <Textarea 
              value={content} 
              onChange={(e) => setContent(e.target.value)} 
              placeholder="Enter the content of your post" 
              rows={10} 
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">Add Post</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default AddPost;