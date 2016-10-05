import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  MapView
} from 'react-native';
var Api = require('./src/api');

let Weather = React.createClass({
  getInitialState: function() {
    return {
      pin: {
        latitude: 0,
        longitude: 0
      },
      city: '',
      temperature: '',
      description: ''
    };
  },
  render: function() {
    return (
      <MapView 
        annotations={ [this.state.pin] }
        style={ styles.map }
        onRegionChangeComplete={ this.onRegionChangeComplete }
        >
      </MapView>
    )
  },
  onRegionChangeComplete: function(region) {
    this.setState({
      pin: {
        longitude: region.longitude,
        latitude: region.latitude
      }
    });
    Api(region.latitude, region.longitude).then((data) => {
      console.log(data);
      this.setState(data);
    });
  }
});

let styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent('weather', () => Weather);
