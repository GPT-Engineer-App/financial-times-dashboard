import { Box, Container, Heading, VStack, Text, SimpleGrid, GridItem, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box bg="brand.700" color="white" p={4} borderRadius="md">
          <Heading as="h1" size="xl">Financial News</Heading>
          <Text fontSize="lg">Stay updated with the latest financial news and market data</Text>
        </Box>

        <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={8}>
          <GridItem colSpan={{ sm: 1, md: 2 }}>
            <Box bg="gray.100" p={4} borderRadius="md">
              <Heading as="h2" size="lg" mb={4}>Headlines</Heading>
              <VStack spacing={4} align="stretch">
                <Box bg="white" p={4} borderRadius="md" boxShadow="md">
                  <Heading as="h3" size="md">Headline 1</Heading>
                  <Text>Summary of the headline news goes here...</Text>
                </Box>
                <Box bg="white" p={4} borderRadius="md" boxShadow="md">
                  <Heading as="h3" size="md">Headline 2</Heading>
                  <Text>Summary of the headline news goes here...</Text>
                </Box>
              </VStack>
            </Box>
          </GridItem>
          <GridItem colSpan={{ sm: 1, md: 1 }}>
            <Box bg="gray.100" p={4} borderRadius="md">
              <Heading as="h2" size="lg" mb={4}>Market Data</Heading>
              <VStack spacing={4} align="stretch">
                <Box bg="white" p={4} borderRadius="md" boxShadow="md">
                  <Heading as="h3" size="md">Market Data 1</Heading>
                  <Text>Details about market data...</Text>
                </Box>
                <Box bg="white" p={4} borderRadius="md" boxShadow="md">
                  <Heading as="h3" size="md">Market Data 2</Heading>
                  <Text>Details about market data...</Text>
                </Box>
              </VStack>
            </Box>
          </GridItem>
        </SimpleGrid>

        <Box bg="gray.100" p={4} borderRadius="md">
          <Heading as="h2" size="lg" mb={4}>Featured Articles</Heading>
          <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={8}>
            <Box bg="white" p={4} borderRadius="md" boxShadow="md">
              <Image src="https://via.placeholder.com/150" alt="Article 1" mb={4} />
              <Heading as="h3" size="md">Article 1</Heading>
              <Text>Summary of the featured article...</Text>
            </Box>
            <Box bg="white" p={4} borderRadius="md" boxShadow="md">
              <Image src="https://via.placeholder.com/150" alt="Article 2" mb={4} />
              <Heading as="h3" size="md">Article 2</Heading>
              <Text>Summary of the featured article...</Text>
            </Box>
            <Box bg="white" p={4} borderRadius="md" boxShadow="md">
              <Image src="https://via.placeholder.com/150" alt="Article 3" mb={4} />
              <Heading as="h3" size="md">Article 3</Heading>
              <Text>Summary of the featured article...</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;