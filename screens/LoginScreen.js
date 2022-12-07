import React from 'react';
import {TextInput} from 'react-native';
import {View, Image, StyleSheet} from 'react-native';

function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/Instagram_icon.png')}
        style={styles.logoContainer}
      />
      <TextInput
        placeholder="Phone number,username or email"
        style={styles.textInput}
      />
      <TextInput placeholder="Password" style={styles.textInput} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logoContainer: {height: 100, width: 100},
  textInput: {
    width: '80%',
    marginTop: 10,
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
});
export default LoginScreen;
