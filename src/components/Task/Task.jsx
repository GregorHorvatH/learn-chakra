import { EditIcon, ViewIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  HStack,
  Heading,
  Text,
} from '@chakra-ui/react';

export const Task = ({ task }) => {
  return (
    <Card bg="white" borderTop="8px" borderColor="purple.400">
      <CardHeader>
        <Flex gap={5}>
          <Avatar bg="purple.400" name={task.author} src={task.img} />
          <Box>
            <Heading as="h3" size="sm">
              {task.title}
            </Heading>
            <Text>by {task.author}</Text>
          </Box>
        </Flex>
      </CardHeader>

      <CardBody color="gray.500">{task.description}</CardBody>

      <Divider borderColor="gray.200" />
      <CardFooter>
        <HStack>
          <Button leftIcon={<ViewIcon />} variant="ghost">
            Watch
          </Button>
          <Button leftIcon={<EditIcon />} variant="ghost">
            Comment
          </Button>
        </HStack>
      </CardFooter>
    </Card>
  );
};
