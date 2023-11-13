import { SimpleGrid } from '@chakra-ui/react';
import { useLoaderData } from 'react-router-dom';

import { Task } from '../Task';

export const tasksLoader = async () => {
  const resp = await fetch('http://localhost:8080/tasks');

  return resp.json();
};

export const Dashboard = () => {
  const tasks = useLoaderData();

  return (
    <SimpleGrid gap={10} minChildWidth={300}>
      {tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
    </SimpleGrid>
  );
};
