import { StyleSheet, Text, View } from "react-native";
import Colors from "../styles/Colors";

import IconRaining from "../assets/forecast/raining.svg";

const CardComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infos}>
        <Text style={{fontSize: 12, color: '#FFD600'}}>⚠️ WARNING</Text>

        <View style={styles.data}>
          <View style={styles.rain}>
            <Text style={{fontSize: 12, color: '#C4C4C4'}}>% RAIN</Text>
            <Text style={{fontSize: 15, color: '#9A9A9A'}}>58%</Text>
          </View>

          <View style={styles.time}>
            <Text style={{fontSize: 12, color: '#C4C4C4'}}>EXP. TIME</Text>
            <Text style={{fontSize: 15, color: '#9A9A9A'}}>02:00 PM</Text>
          </View>
        </View>

        <Text style={{fontSize: 15, color: '#FFD600'}}>Expecting Rainfall</Text>
      </View>

      <View>
        <IconRaining width={135} height={108} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FDFCFC",
    alignItems: "center",
    width: 327,
    height: 163,
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 15,
  },
  infos: {
    flexDirection: "column",
    fontSize: 20,
  },
  data: {
      padding: 8,
      flexDirection: "row",
  },
  rain: {
      marginRight: 15,
      alignItems: "center"
  },
  time: {
    marginLeft: 15,
    alignItems: "center"
  },
});

export default CardComponent;
