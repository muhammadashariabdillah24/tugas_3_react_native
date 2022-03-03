/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Barang } from './Component/Barang';
import { Headers } from './Component/Headers';

class App extends Component {

  render(){

    return(
      <View style={styles.container}>
        <Headers judul="SELAMAT DATANG"/>
        <Barang />
      </View>
    )

  }
}

const styles = StyleSheet.create({

  container : {
    flex : 1,
    backgroundColor : 'green'
  }

})

export default App;
