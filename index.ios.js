import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  MapView
} from 'react-native';
let Weather = React.createClass({
  render: function() {
    return <MapView style={ styles.map }></MapView>
  }
});

let styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent('weather', () => Weather);
