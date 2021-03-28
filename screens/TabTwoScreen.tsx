import * as React from 'react';
import { Alert, Button, ScrollView, StyleSheet, View } from 'react-native';
import { ArticleItem } from '../components/ArticleItem';

import EditScreenInfo from '../components/EditScreenInfo';
import { StackScreenProps } from '@react-navigation/stack';
import { Article } from '../models/Article';
import { articleList } from '../mocks/FavouriteArtcleList'
import { RootStackParamList } from '../types';

export default function TabTwoScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <View style={styles.container}>
      <ScrollView >
        {articleList.map((article: Article) => <ArticleItem item={article}></ArticleItem>)}
        {/*     <Text style={styles.title}>Tab One</Text>
    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}

      </ScrollView>
      <View style={styles.button_container}>
        <View style={styles.button}>
          <Button
            title="Добавить"
            color={'#000'}
            onPress={() => navigation.replace('AddArticle')}
          />

        </View>
      </View>
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button_container: {
    height: 60
  },
  button: {

    position: 'absolute',
    bottom: 0,

    width: '100%',
    backgroundColor: '#b4e4fa',
    borderRadius: 10
  }
});
