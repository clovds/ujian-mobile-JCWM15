import React from 'react';
import {ActivityIndicator, Dimensions, StyleSheet} from 'react-native';
import {Card, Paragraph, Title} from 'react-native-paper';

const CardCovid = ({name, data, newData}) => {
  return (
    <Card style={styles.cardStyle}>
      <Card.Title
        title={name}
        style={styles.textStyle}
        titleStyle={styles.titleStyle}
      />
      <Card.Content>
        <Title style={styles.cardTitle}>
          {data ? (
            data.toLocaleString()
          ) : (
            <ActivityIndicator size="large" color="white" />
          )}
        </Title>
        <Paragraph style={styles.textStyle}>
          {newData ? `+ ${newData.toLocaleString()}` : ''}
        </Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    width: Dimensions.get('screen').width / 3,
    alignItems: 'center',
    height: Dimensions.get('screen').height / 6,
    backgroundColor: 'orange',
    justifyContent: 'center',
    borderRadius: 0,
  },
  cardTitle: {
    fontSize: 17,
    color: 'white',
    fontWeight: '600',
    paddingRight: 25,
  },
  textStyle: {
    color: 'green',
  },
  titleStyle: {
    color: '#52575d',
    fontWeight: '600',
  },
});

export default CardCovid;
