import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {logoutAction} from '../../redux/action/authAction';

const LogoutScreen = () => {
  const dispatch = useDispatch();

  const logoutBtn = () => {
    dispatch(logoutAction());
  };
  return (
    <View style={styles.mainContainer}>
      <Button title="Logout" onPress={logoutBtn} color="orange" />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
    marginHorizontal: 30,
  },
  btnStyle: {
    backgroundColor: 'orange',
  },
});

export default LogoutScreen;
