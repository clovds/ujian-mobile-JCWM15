import React, {useState} from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  Button,
  Text,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import logo from '../../assets/defence.png';
import {loginAction} from '../../redux/action/authAction';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const loginBtn = () => {
    if (username && password) {
      dispatch(loginAction(username));
    }
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <KeyboardAvoidingView behavior="position">
        <Image source={logo} style={styles.imageStyle} />
        <Text style={styles.textStyle}>Login</Text>
        <TextInput
          label="Username"
          onChangeText={(e) => setUsername(e)}
          selectionColor="orange"
          underlineColor="orange"
          style={styles.inputStyle}
        />
        <TextInput
          label="Password"
          onChangeText={(e) => setPassword(e)}
          selectionColor="orange"
          underlineColor="orange"
          style={styles.inputStyle}
        />
        <Button title="Login" color="orange" onPress={loginBtn} />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputStyle: {
    backgroundColor: 'transparent',
  },
  imageStyle: {
    height: 300,
    width: 300,
    alignSelf: 'center',
    marginTop: 50,
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'orange',
  },
});

export default LoginScreen;
