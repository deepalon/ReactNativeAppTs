import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {NativeBaseProvider, Center, Box} from 'native-base';
import Lottie from 'lottie-react-native';

const {width, height} = Dimensions.get('window');

const Loading = (props: any) => {
  const {visiable} = props;

  return visiable ? (
    <NativeBaseProvider>
      <Center flex={1} style={styles.LoadingPage}>
        <Box w={200} h={200}>
          <Lottie
            source={require('../../../public/images/loading5.json')}
            autoPlay
            loop
          />
        </Box>
      </Center>
    </NativeBaseProvider>
  ) : (
    <Box />
  );
};

const styles = StyleSheet.create({
  LoadingPage: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'black',
    zIndex: 9,
    width: width,
    height: height,
  },
});

export default Loading;
