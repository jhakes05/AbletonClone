import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, extendTheme, ChakraProvider,CSSReset } from '@chakra-ui/react';
import About from './Tabs/About';
import Jobs from './Tabs/Jobs';
import Apprenticeships from './Tabs/Apprenticeships';
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
      <Tabs colorScheme="brand">
      <CSSReset />
        <TabList>
          <Tab>About</Tab>
          <Tab>Jobs</Tab>
          <Tab>Apprenticeships</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <About/>
          </TabPanel>
          <TabPanel>
            <p>Jobs</p>
            <Jobs/>
          </TabPanel>
          <TabPanel>
            <p>Apprenticeships</p>
            <Apprenticeships/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ChakraProvider>
  );
};

export default Landing;
