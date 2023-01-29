import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '../../types';

type HelpModal = NativeStackScreenProps<RootStackParamList, 'Help'>;

export const HelpModal = ({navigation}: HelpModal) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Help Modal</Text>
      <Button
        onPress={() => navigation.navigate('Invite')}
        title="Navigate Invite"
      />
    </View>
  );
};
