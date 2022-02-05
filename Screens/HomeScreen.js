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
import moment from 'moment';
import Colors from '../Colors';
import { Avatar } from 'react-native-paper';

const { width, height } = Dimensions.get('window');
function HomeScreen(props) {
  const todaydate = moment().subtract(0, 'days').format('DD');
  const today = moment().subtract(0, 'days').format('dddd');
  const CurrentMonth = moment().subtract(0, 'days').format('MMMM');
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
  const Appointmentcalenderdata = [
    {
      id: 1,
      CurrentMonth1: 'APR',
      Currentdate: '16',
      DoctorName: 'Dr.Goldstein',
      time: '12:00 pm',
      avatarimg:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 2,
      CurrentMonth1: 'APR',
      Currentdate: '17',
      DoctorName: 'Dr.John Steve',
      time: '11:00 pm',
      avatarimg:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    },
    {
      id: 3,
      CurrentMonth1: 'APR',
      Currentdate: '18',
      DoctorName: 'Dr.Dean Winchester',
      time: '10:00 pm',
      avatarimg:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 4,
      CurrentMonth1: 'APR',
      Currentdate: '19',
      DoctorName: 'Dr.Sam winchester',
      time: '12:00 pm',
      avatarimg:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    },
  ];
  function getGreetingTime(m) {
    var g = null; //return g

    if (!m || !m.isValid()) {
      return;
    } //if we can't find a valid or filled moment, we return.

    var split_afternoon = 12; //24hr time to split the afternoon
    var split_evening = 17; //24hr time to split the evening
    var currentHour = parseFloat(m.format('HH'));

    if (currentHour >= split_afternoon && currentHour <= split_evening) {
      g = 'Good Afternoon!';
    } else if (currentHour >= split_evening) {
      g = 'Good Evening!';
    } else {
      g = 'Good Morning!';
    }

    return g;
  }
  const WishAndDate = () => {
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
          {getGreetingTime(moment())}
        </Text>
        <Text
          style={{
            left: width / 21,
            top: height / 25,
            color: '#11ACC0',
            fontSize: 18,
          }}
        >
          {today + ',  ' + CurrentMonth + ' ' + todaydate + 'th.'}
        </Text>
      </View>
    );
  };
  const Medicationcard = ({ time, pillname, pillimg, Qty, Fills }) => {
    return (
      <View style={{ left: 30, top: 40, marginRight: 24 }}>
        <View
          style={{
            width: 225,
            height: 330,
            borderRadius: 9,
            backgroundColor: 'white',
          }}
        >
          <View
            style={{
              backgroundColor: '#fbbbb1',
              borderTopLeftRadius: 9,
              borderTopRightRadius: 9,
              height: 70,
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 32,
                fontWeight: 'bold',
                left: 23,
              }}
            >
              {time}
            </Text>
            <Text
              style={{ color: '#F4F5F5', fontSize: 12.7, left: 23, bottom: 4 }}
            >
              Daily
            </Text>
          </View>
          {/* pills image here */}
          <Image
            source={pillimg}
            style={{ width: 20, height: 20, top: 13, left: 23 }}
          />
          <Text style={{ fontWeight: 'bold', fontSize: 18, left: 23, top: 28 }}>
            {pillname}
          </Text>

          <View style={{ flexDirection: 'row', left: 23, top: 38 }}>
            <Text style={{ color: Colors.Secondary_Text, marginRight: 57 }}>
              Qty
            </Text>
            <Text style={{ color: Colors.Secondary_Text }}>Fills</Text>
          </View>

          <View style={{ flexDirection: 'row', left: 23, top: 49 }}>
            <Text
              style={{
                marginRight: 20,
                fontWeight: 'bold',
              }}
            >
              {Qty}
            </Text>
            <Text style={{ fontWeight: 'bold' }}>{Fills}</Text>
          </View>
          <TouchableOpacity
            style={{
              width: 180,
              height: 39,
              borderRadius: 24,
              borderWidth: 1,
              borderColor: Colors.Outline,
              alignItems: 'center',
              left: 20,
              top: 120,
            }}
          >
            <View>
              <Text style={{ color: '#0c707d', top: 8, fontWeight: 'bold' }}>
                Mark as Taken
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const Appointmentcalender = ({
    CurrentMonth1,
    Currentdate,
    DoctorName,
    time,
    avatarimg,
  }) => {
    return (
      <View style={{ left: 23, marginBottom: 10 }}>
        <View
          style={{
            width: 370,
            height: 70,
            backgroundColor: 'white',
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              color: '#0c707d',
              fontSize: 18,
              top: 10,
              left: 37,
            }}
          >
            {CurrentMonth1}
          </Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20, top: 10, left: 42 }}>
            {Currentdate}
          </Text>
          <View
            style={{
              height: 45,
              width: 2,
              borderWidth: 1,
              borderColor: Colors.Outline,
              bottom: 40,
              left: 99,
            }}
          />

          <View style={{ flexDirection: 'row' }}>
            <View style={{ bottom: 88, left: 130 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                {DoctorName}
              </Text>
              <Text style={{ fontWeight: 'bold', marginTop: 2 }}>{time}</Text>
            </View>
            <Avatar.Image
              style={{ position: 'absolute', bottom: 88, left: 316 }}
              size={47}
              source={{
                uri: avatarimg,
              }}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {/* <Text>HomeScreen</Text> */}
      <WishAndDate />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 19,
          top: height / 27,
          left: width / 13,
        }}
      >
        Today's Medication
      </Text>
      <FlatList
        style={{ marginRight: 19 }}
        data={Medicationdata}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Medicationcard
              key={item.id}
              pillname={item.pillname}
              pillimg={item.pillimg}
              time={item.time}
              Fills={item.Fills}
              Qty={item.Qty}
            />
          );
        }}
      />

      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 19,
          left: width / 13,
          bottom: height / 40,
        }}
      >
        Next Appointment
      </Text>
      <FlatList
        style={{
          // marginBottom: 40, marginTop: 90
          bottom: 6,
          maxHeight: 80,
          // marginBottom: 10,
        }}
        data={Appointmentcalenderdata}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <Appointmentcalender
              key={item.id}
              DoctorName={item.DoctorName}
              CurrentMonth1={item.CurrentMonth1}
              Currentdate={item.Currentdate}
              time={item.time}
              avatarimg={item.avatarimg}
            />
          );
        }}
      />
      {/* <Appointmentcalender /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2F3',
  },
});
export default HomeScreen;
