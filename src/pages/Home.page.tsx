import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '../../types';

type HomePage = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({route, navigation}: HomePage) => {
  return (
    <View>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Help')}
      />
    </View>
  );
};
