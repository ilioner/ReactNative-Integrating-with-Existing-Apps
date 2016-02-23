'use strict';

var React = require('react-native');
var {
  Text,
  View
} = React;

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow'
  }
});

class Demo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is a simple application.ReactNative-Integrating-with-Existing-AppsReactNative-Integrating-with-Existing-AppsReactNative-Integrating-with-Existing-AppsReactNative-Integrating-with-Existing-AppsReactNative-Integrating-with-Existing-AppsReactNative-Integrating-with-Existing-AppsReactNative-Integrating-with-Existing-Apps</Text>
      </View>
    )
  }
}

React.AppRegistry.registerComponent('Demo', () => Demo);