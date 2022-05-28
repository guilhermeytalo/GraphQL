import { StyleSheet, Text, TextInput, View } from 'react-native';
import Colors from '../styles/Colors';
import Fonts from '../styles/Fonts';

import IconForecast from '../assets/forecast/overcast.svg';

import CardComponent from '../components/Card.component';

const Home = ()  => {
  return (
    <View style={styles.container}>
        <View style={styles.searchBar}>
            <TextInput placeholder='Search Location?'></TextInput>
        </View>

        <View style={styles.forecast}>
            <IconForecast width={135} height={108} />
            <Text style={{fontSize: 30, marginTop: 32}}>Mumbai 📍</Text>
            <Text style={{fontSize: 70, marginTop: 20}}>20˚</Text>
        </View>

        <CardComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 90,
    // justifyContent: 'space-around'
    // justifyContent: 'center',
  },
  searchBar: {
    height: 46,
    backgroundColor: Colors.secondary,
    color:  Colors.primary,
    width: 340,
    justifyContent: 'center',
    padding: 11,
    borderRadius: 15,
    fontFamily: 'Poppins-Regular',
  },
  forecast: {
    marginTop: 80,
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 600,
  }
});


export default Home;