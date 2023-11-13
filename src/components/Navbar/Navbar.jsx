import { UnlockIcon } from '@chakra-ui/icons';
import {
  Avatar,
  AvatarBadge,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  useToast,
} from '@chakra-ui/react';

export const Navbar = () => {
  const toast = useToast();

  const handleLogout = () => {
    toast({
      title: 'Logged out',
      description: 'Successfully logged out',
      duration: 5000,
      isClosable: true,
      status: 'success',
      position: 'top',
      icon: <UnlockIcon />,
    });
  };

  return (
    <Flex alignItems="flex-start" pb="20px">
      <Heading as="h1">Dojo Tasks</Heading>
      <Spacer />

      <HStack gap="20px">
        <Avatar bg="purple.400" name="mario" src="/img/mario.png">
          <AvatarBadge bg="teal.500" width="1.3em">
            <Text fontSize="xs" color="white">
              5
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text>mario@gmail.com</Text>
        <Button colorScheme="purple" onClick={handleLogout}>
          Logout
        </Button>
      </HStack>
    </Flex>
  );
};
