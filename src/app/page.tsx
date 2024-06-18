import { Box, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Box
        w="100%"
        h="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Heading variant="H1BOLD" className="link">
          HI FVTVRA
        </Heading>
      </Box>
    </div>
  );
}
