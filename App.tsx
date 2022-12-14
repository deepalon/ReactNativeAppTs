/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
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
import Lottie from 'lottie-react-native';
import Loading from './src/components/Loading/Loading';
// import {StyleSheet} from 'react-native';

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
  return (
    <NativeBaseProvider>
      <Center
        _dark={{bg: 'blueGray.900'}}
        _light={{bg: 'blueGray.50'}}
        shadow={2}
        px={4}
        flex={1}>
        {/* <Box
          borderTopWidth="5"
          borderColor="amber.400"
          shadow="9"
          bg="primary.500"
          borderRadius="md">
          <ToggleDarkMode />
          <ToggleDarkMode />
          <ToggleDarkMode />
        </Box>
        <ImageExample /> */}
        {/* <Lottie
          style={{display: 'flex'}}
          source={require('./public/images/loading5.json')}
          autoPlay
          loop
        /> */}
        <Text bgColor="yellow.400">123</Text>
        <Loading />
      </Center>
    </NativeBaseProvider>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
