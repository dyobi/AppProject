import React from 'react';
import { StyleSheet, Dimensions, View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RFValue } from 'react-native-responsive-fontsize';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Home from '../nav/home';
import Profile from '../nav/profile';
import Chat from '../nav/chat';

const Tab = createMaterialTopTabNavigator();

const iconSize = RFValue(18, 580);
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarPosition={'bottom'}
      initialLayout={{ width: windowWidth, height: windowHeight }}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        showIcon: true,
        labelStyle: {
          fontSize: RFValue(8, 580),
          textTransform: 'none'
        },
        indicatorStyle: {
          backgroundColor: 'black',
          borderRadius: RFValue(10, 580)
        },
        iconStyle: {
          width: iconSize,
          height: iconSize
        },
        style: {
          width: windowWidth,
          height: RFValue(62, 580),
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,

          elevation: 6
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" color={color} size={iconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" color={color} size={iconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" color={color} size={iconSize} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{zIndex: 2, backgroundColor: 'white'}} />
      <View style={styles.header}>
        <Text>Logo</Text>
      </View>
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    height: RFValue(32, 580),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 4,
    zIndex: 1
  },
});

export default App;