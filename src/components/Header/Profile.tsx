import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex aling="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Leonardo Leles</Text>
          <Text color="gray.300" fontSize="small">
            leoleles@email.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Leonardo Leles"
        src="https://github.com/leonleles.png"
      />
    </Flex>
  );
}
