import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { User } from '../models/User';
import { RootStackParamList } from '../types';
import { StackScreenProps } from '@react-navigation/stack';

export default function TabThreeScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  const user = new User();
  user.Name = "Алексей";

  return (
    <View style={styles.container} >

      <Text style={styles.title}>Привет, {user.Name}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#eee'

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'roboto',
    color: '#000'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
