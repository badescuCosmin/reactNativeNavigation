import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParamList} from '../../types';

type InviteModal = NativeStackScreenProps<RootStackParamList, 'Invite'>;

export const InviteModal = ({navigation}: InviteModal) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Invite Modal</Text>
    </View>
  );
};
