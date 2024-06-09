import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, VStack, useToast } from "@chakra-ui/react";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Title:", title);
    console.log("Content:", content);
    toast({
      title: "Post submitted.",
      description: "Your blog post has been submitted successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setTitle("");
    setContent("");
  };

  return (
    <Container maxW="container.md" p={4}>
      <Box as="form" onSubmit={handleSubmit} p={4} borderWidth="1px" borderRadius="md" shadow="md">
        <VStack spacing={4}>
          <FormControl id="title" isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the title of your blog post"
            />
          </FormControl>
          <FormControl id="content" isRequired>
            <FormLabel>Content</FormLabel>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter the content of your blog post"
              rows={10}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">
            Submit
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default AddPost;