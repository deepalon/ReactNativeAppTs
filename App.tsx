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
import {Box, Text, Button, NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text>Home Screen</Text>
      <Button shadow={2} onPress={() => navigation.navigate('Details')}>
        Click me
      </Button>
    </Box>
  );
}

function DetailsScreen({navigation}) {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text>Details Screen</Text>
      <Button shadow={2} mt={10} onPress={() => navigation.push('Details')}>
        Click me
      </Button>
      <Button shadow={2} mt={10} onPress={() => navigation.goBack()}>
        go back
      </Button>
      <Button shadow={2} mt={10} onPress={() => navigation.popToTop()}>
        go to Top Stack
      </Button>
      <Button shadow={2} mt={10} onPress={() => navigation.navigate('Home')}>
        go to Home
      </Button>
    </Box>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Overview'}}
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
