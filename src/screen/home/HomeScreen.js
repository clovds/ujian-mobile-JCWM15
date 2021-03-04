import moment from 'moment';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import CardCovid from '../../components/CardCovid';
import {fetchDataAction} from '../../redux/action/dataAction';

const HomeScreen = ({navigation}) => {
  const {global, date} = useSelector((state) => state.data);
  const dispatch = useDispatch();

  return (
    <View>
      <Header
        leftComponent={{
          icon: 'menu',
          color: 'white',
          onPress: () => navigation.toggleDrawer(),
        }}
        centerComponent={{
          text: 'COVID-19',
          style: {color: 'white', fontWeight: 'bold', fontSize: 18},
        }}
        rightComponent={{
          icon: 'refresh',
          color: 'white',
          onPress: () => dispatch(fetchDataAction()),
        }}
        containerStyle={styles.headerStyle}
        backgroundColor={'orange'}
      />
      <View>
        <Text style={styles.textStyle}>Global Covid-19 Live Update</Text>
        <View style={styles.cardContainer}>
          <CardCovid
            name="Total"
            data={global.TotalConfirmed}
            newData={global.NewConfirmed}
          />
          <CardCovid
            name="Recovered"
            data={global.TotalRecovered}
            newData={global.NewRecovered}
          />
          <CardCovid
            name="Deaths"
            data={global.TotalDeaths}
            newData={global.NewDeaths}
          />
        </View>
        <Text style={styles.textUpdated}>
          {date ? `Last Updated ${date}` : ''}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'orange',
  },
  textStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#ec0101',
    paddingVertical: 3,
    color: 'white',
    opacity: 0.8,
  },
  cardContainer: {
    flexDirection: 'row',
  },
  textUpdated: {
    backgroundColor: '#214151',
    color: 'white',
    paddingLeft: 20,
    paddingVertical: 3,
    fontSize: 12,
  },
});

export default HomeScreen;
