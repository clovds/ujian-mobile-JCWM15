import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {Header} from 'react-native-elements';
import {DataTable} from 'react-native-paper';
import {useSelector} from 'react-redux';

const LiveUpdateScreen = () => {
  const {countries} = useSelector((state) => state.data);
  const [page, setPage] = useState(0);
  const itemsPerPage = 10;
  const from = page * itemsPerPage;
  const to = (page + 1) * itemsPerPage;

  const data = countries.filter((val, index) => {
    return index >= from && index < to;
  });

  const tableRow = () => {
    return (
      <>
        {data ? (
          data.map((val, index) => {
            return (
              <DataTable.Row key={index}>
                <DataTable.Cell>{val.Country}</DataTable.Cell>
                <DataTable.Cell style={styles.rowStyle}>
                  {val.NewConfirmed}
                </DataTable.Cell>
                <DataTable.Cell style={styles.rowStyle}>
                  {val.TotalConfirmed}
                </DataTable.Cell>
                <DataTable.Cell style={styles.rowStyle}>
                  {val.TotalRecovered}
                </DataTable.Cell>
                <DataTable.Cell style={styles.rowStyle}>
                  {val.TotalDeaths}
                </DataTable.Cell>
              </DataTable.Row>
            );
          })
        ) : (
          <ActivityIndicator size="small" color="black" />
        )}
      </>
    );
  };

  return (
    <View>
      <Header
        centerComponent={{
          text: 'Live Update',
          style: {color: 'white', fontWeight: 'bold', fontSize: 15},
        }}
        containerStyle={styles.headerStyle}
        backgroundColor={'orange'}
      />
      <ScrollView>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Region</DataTable.Title>
            <DataTable.Title numeric>New Cases</DataTable.Title>
            <DataTable.Title numeric>Total Cases</DataTable.Title>
            <DataTable.Title numeric>Recovered</DataTable.Title>
            <DataTable.Title numeric>Deaths</DataTable.Title>
          </DataTable.Header>
          {tableRow()}
          <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(countries.length / itemsPerPage)}
            onPageChange={(page) => setPage(page)}
            label={`${from + 1}-${to} of ${countries.length}`}
          />
        </DataTable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'orange',
    justifyContent: 'space-around',
  },
  rowStyle: {
    justifyContent: 'flex-end',
  },
});

export default LiveUpdateScreen;
