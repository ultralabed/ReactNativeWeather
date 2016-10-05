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
    let pins = [{
      latitude: 25.057975, 
      longitude: 121.544356
    }];

    return (
      <MapView 
        annotations={ pins }
        style={ styles.map }
        onRegionChangeComplete={ this.onRegionChangeComplete }
        >
      </MapView>
    )
  },
  onRegionChangeComplete: function(region) {
    console.log(region);
  }
});

let styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent('weather', () => Weather);
