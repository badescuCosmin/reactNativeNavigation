import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './pages/Home.page';
import {DetailsScreen} from './pages/Details.page';
import {RootStackParamList} from '../types';
import {HelpModal} from './pages/Help.modal';
import {InviteModal} from './pages/Invite.modal';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View} from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Details">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // use params inside the title
          options={({route}) => ({
            title: String(route.params.itemId),
            headerStyle: {backgroundColor: '#f4511e'},
          })}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />

        <Stack.Group screenOptions={{presentation: 'transparentModal'}}>
          <Stack.Screen name="Help" component={HelpModal} />
          <Stack.Screen name="Invite" component={InviteModal} />
        </Stack.Group>
      </Stack.Navigator> */}
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            console.log(color, 'color');
            let iconName = '';

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Details') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return (
              <View>
                <View
                  style={{
                    width: size,
                    height: 2,
                    backgroundColor: focused ? color : 'transparent',
                  }}
                />
                <Ionicons name={iconName} size={size} color={color} />
              </View>
            );
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelPosition: 'below-icon',
        })}>
        <Tab.Screen options={({}) => ({})} name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
