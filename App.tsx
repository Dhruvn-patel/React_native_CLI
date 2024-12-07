/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {LogBox, SafeAreaView, Text, useColorScheme, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  LogBox.ignoreAllLogs();
  useEffect(() => {
    SplashScreen?.hide();
  }, []);

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    // appBootstrap();
  }, []);
  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
};
export default App;
