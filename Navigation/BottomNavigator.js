import React from 'react';
import { View, StyleSheet, StatusBar, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import HomeScreen from '../Screens/HomeScreen';
import MedicationScreen from '../Screens/MedicationScreen';
import Colors from '../Colors';

const Tab = createBottomTabNavigator();

function BottomNavigator(props) {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Today"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialCommunityIcons
                name="google-earth"
                size={24}
                color={focused == true ? '#11AB98' : Colors.Secondary_Text}
              />
            </View>
          ),
          tabBarActiveTintColor: '#11AB98',
          tabBarInactiveTintColor: Colors.Secondary_Text,
        }}
      />
      <Tab.Screen
        name="Medication"
        component={MedicationScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome5
                name="briefcase-medical"
                size={24}
                color={focused == true ? '#11AB98' : Colors.Secondary_Text}
              />
            </View>
          ),
          tabBarActiveTintColor: '#11AB98',
          tabBarInactiveTintColor: Colors.Secondary_Text,
        }}
      />
      <Tab.Screen
        name="Appointments"
        component={MedicationScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialCommunityIcons
                name="calendar-clock"
                size={24}
                color={focused == true ? '#11AB98' : Colors.Secondary_Text}
              />
            </View>
          ),
          tabBarActiveTintColor: '#1EB78C',
          tabBarInactiveTintColor: Colors.Secondary_Text,
        }}
      />
      <Tab.Screen
        name="Live Chat"
        component={MedicationScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialCommunityIcons
                name="chat-processing-outline"
                size={24}
                color={focused == true ? '#11AB98' : Colors.Secondary_Text}
              />
            </View>
          ),
          tabBarActiveTintColor: '#11AB98',
          tabBarInactiveTintColor: Colors.Secondary_Text,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={MedicationScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialCommunityIcons
                name="face-profile"
                size={24}
                color={focused == true ? '#11AB98' : Colors.Secondary_Text}
              />
            </View>
          ),
          tabBarActiveTintColor: '#11AB98',
          tabBarInactiveTintColor: Colors.Secondary_Text,
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
export default BottomNavigator;
