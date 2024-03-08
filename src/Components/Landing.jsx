import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, extendTheme, ChakraProvider,CSSReset } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    brand: {
      600: "#ff764d", // Set your custom color here
    },
  },
});

const Landing = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Tabs variant="line" colorScheme="brand">
      <CSSReset />
        <TabList>
          <Tab>About</Tab>
          <Tab>Jobs</Tab>
          <Tab>Apprenticeships</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>About</p>
          </TabPanel>
          <TabPanel>
            <p>Jobs</p>
          </TabPanel>
          <TabPanel>
            <p>Apprenticeships</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ChakraProvider>
  );
};

export default Landing;
