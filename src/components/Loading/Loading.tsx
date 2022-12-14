import React, {Component} from 'react';
import {NativeBaseProvider, Center, Text} from 'native-base';
import Lottie from 'lottie-react-native';

const Loading = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} width="150" height="150">
        <Lottie
          source={require('../../../public/images/loading5.json')}
          autoPlay
          loop
        />
      </Center>
    </NativeBaseProvider>
  );
};

export default Loading;
