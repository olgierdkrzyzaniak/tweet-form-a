import { useToast, Button, Box, HStack, VStack, Text } from "@chakra-ui/react";
import React from "react";

type ToastProps = {
  handleNextStep: (num: number) => void;
  setSkipStep: (bool: boolean) => void;
};

function DeleteToast({ handleNextStep, setSkipStep }: ToastProps) {
  const toast = useToast();

  return (
    <Button
      aria-label="bad"
      colorScheme="red"
      variant="solid"
      w="20"
      onClick={() => {
        handleNextStep(2);
        toast({
          isClosable: true,
          status: "success",
          render: () => (
            <Box color="black" p={3} bg="blue.200" borderRadius={10}>
              <VStack>
                <Text>Opinion skipped. Do you want do add instead?</Text>
                <HStack>
                  <Button
                    colorScheme="blue"
                    onClick={() => {
                      handleNextStep(1);
                      setSkipStep(false);
                    }}
                  >
                    Add opinion
                  </Button>
                </HStack>
              </VStack>
            </Box>
          ),
          duration: 3000
        });
      }}
    >
      Bad
    </Button>
  );
}

export default DeleteToast;
