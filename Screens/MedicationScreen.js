import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../Colors';

const { width, height } = Dimensions.get('window');
function MedicationScreen(props) {
  const Medicationdata = [
    {
      id: 1,
      time: '8:00 AM',
      pillname: 'Xanax(1mg)',
      pillimg: require('../assets/normalpill.jpg'),
      Qty: '120 days',
      Fills: '14 left',
      Rx: 23533434,
      Directions: 'Take with food every morning.Prescribed by Dr.Goldstein. ',
    },
    {
      id: 2,
      time: '9:00 AM',
      pillname: 'Desyrel(2mg)',
      pillimg: require('../assets/roundpill.jpg'),
      Qty: '118 days',
      Fills: '11 left',
      Rx: 23533435,
      Directions: 'Take with food every morning.Prescribed by Dr.Goldstein. ',
    },
    {
      id: 3,
      time: '10:00 PM',
      pillname: 'Prozak(1mg)',
      pillimg: require('../assets/normalpill.jpg'),
      Qty: '112 days',
      Fills: '10 left',
      Rx: 23533436,
      Directions: 'Take with food every morning.Prescribed by Dr.Goldstein. ',
    },
    {
      id: 4,
      time: '12:00 AM',
      pillname: 'Xanax(1mg)',
      pillimg: require('../assets/roundpill.jpg'),
      Qty: '103 days',
      Fills: '8 left',
      Rx: 23533437,
      Directions: 'Take with food every morning.Prescribed by Dr.Goldstein. ',
    },
  ];
  const TopScreen = () => {
    return (
      <View
        style={{
          height: height / 4,
          backgroundColor: '#0c707d',
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            left: width / 25,
            top: height / 25,
            color: 'white',
            fontSize: 38,
          }}
        >
          Medication
        </Text>
        <Text
          style={{
            left: width / 21,
            top: height / 25,
            color: '#11ACC0',
            fontSize: 18,
          }}
        >
          Current prescribed medication.
        </Text>
      </View>
    );
  };
  const DetailCard = ({ pillimg, Directions, Qty, Fills, Rx, pillname }) => {
    return (
      <View style={{ margin: 40, bottom: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={pillimg} style={{ width: 30, height: 30 }} />
          <Text style={{ left: 20, fontWeight: 'bold', fontSize: 22 }}>
            {pillname}
          </Text>
          <TouchableOpacity
            style={{
              position: 'absolute',
              left: 320,
              top: 4.5,
            }}
          >
            <Feather name="info" size={24} color="#0c707d" />
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 17.5, left: 50, top: 10, fontWeight: 'bold' }}>
          Directions:{Directions}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            top: 30,
            left: 50,
          }}
        >
          <Text
            style={{
              color: Colors.Secondary_Text,
              marginRight: 80,
              fontSize: 17,
            }}
          >
            Qty
          </Text>
          <Text
            style={{
              color: Colors.Secondary_Text,
              marginRight: 80,
              fontSize: 17,
            }}
          >
            Fills
          </Text>
          <Text style={{ color: Colors.Secondary_Text, fontSize: 17 }}>Rx</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            top: 35,
            left: 50,
          }}
        >
          <Text
            style={{
              marginRight: 35,
              fontSize: 17,
              fontWeight: 'bold',
            }}
          >
            {Qty}
          </Text>
          <Text
            style={{
              marginRight: 65,
              fontSize: 17,
              fontWeight: 'bold',
            }}
          >
            {Fills}
          </Text>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{Rx}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#E3E4E4',
            top: 50,
            left: 50,
            width: 208,
            height: 37,
            borderRadius: 10,
            alignItems: 'center',
          }}
        >
          <MaterialCommunityIcons
            style={{ marginRight: 15, left: 7 }}
            name="clock-time-nine-outline"
            size={24}
            color="black"
          />
          <Text>1 pill daily every morning</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <TopScreen />
      <FlatList
        style={{ marginBottom: 10 }}
        data={Medicationdata}
        keyExtractor={(item) => item.id.toString()}
        // ItemSeparatorComponent={}
        renderItem={({ item }) => {
          return (
            <DetailCard
              key={item.id}
              Directions={item.Directions}
              Fills={item.Fills}
              Qty={item.Qty}
              Rx={item.Rx}
              pillimg={item.pillimg}
              pillname={item.pillname}
            />
          );
        }}
      />

      {/* <Text>MedicationScreen</Text> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2F3',
  },
});
export default MedicationScreen;
