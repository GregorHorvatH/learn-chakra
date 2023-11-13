import {
  ChatIcon,
  CheckCircleIcon,
  EmailIcon,
  StarIcon,
  WarningIcon,
} from '@chakra-ui/icons';
import {
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';

export const Profile = () => {
  const selected = {
    color: 'white',
    bg: 'purple.400',
  };

  return (
    <Tabs colorScheme="purple" variant="enclosed">
      <TabList>
        <Tab _selected={selected}>Account Info</Tab>
        <Tab _selected={selected}>Task History</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: mario@gmail.com
            </ListItem>

            <ListItem>
              <ListIcon as={ChatIcon} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              eligendi voluptas veniam corporis accusamus earum voluptatibus
              nostrum repellendus, ex soluta excepturi vero dolore tempore nam
              libero voluptate laboriosam, nesciunt alias?
            </ListItem>

            <ListItem>
              <ListIcon as={StarIcon} />* * * * *
            </ListItem>
          </List>
        </TabPanel>

        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur
            </ListItem>

            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur
            </ListItem>

            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum dolor sit amet consectetur
            </ListItem>

            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur
            </ListItem>

            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum dolor sit amet consectetur
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
