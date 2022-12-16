/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Text,
  NativeBaseProvider,
  Box,
  HStack,
  Switch,
  useColorMode,
  Center,
  Image,
} from 'native-base';
import Loading from './src/components/Loading';

// Color Switch Component
function ToggleDarkMode() {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <HStack space={2} m={2} alignItems="center">
      <Text underline>Dark</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
function ImageExample() {
  return (
    <Center>
      <Image
        size={150}
        borderRadius={100}
        source={require('./public/images/loading.webp')}
        alt="Alternate Text"
      />
    </Center>
  );
}
const App = () => {
  const [showLoading, setShowLoading] = useState(true);
  // setTimeout(() => {
  //   setShowLoading(false);
  // }, 2000);
  return (
    <>
      <NativeBaseProvider>
        <Box position="relative" h={500} bg="gray.300">
          <Box h={200} bg="blue.700">
            <Text>123</Text>
          </Box>
          <Loading visiable={showLoading} />
        </Box>
      </NativeBaseProvider>
    </>
  );
};

export default App;
