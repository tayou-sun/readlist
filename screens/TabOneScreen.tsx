import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ArticleItem } from '../components/ArticleItem';

import { Article } from '../models/Article';
import { articleList } from '../mocks/ArtcleList'

export default function TabOneScreen() {
  return (
    <ScrollView style={styles.container} >
      {articleList.map((article: Article) => <ArticleItem item={article}></ArticleItem>)}
      {/*     <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#eee'

    /* alignItems: 'center',
    justifyContent: 'center', */
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
});
