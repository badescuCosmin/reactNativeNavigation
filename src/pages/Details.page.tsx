import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '../../types';

type DetailsPage = NativeStackScreenProps<RootStackParamList, 'Details'>;

export const DetailsScreen = ({navigation}: DetailsPage) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate('Home', {itemId: 55});
        }}
      />
    </View>
  );
};
