import * as React from 'react';
import { Linking, StyleSheet, ImageBackground, View } from 'react-native';
import { ArticleProps, Text, TextProps } from './Themed';

export function ArticleItem(props: ArticleProps) {
    const image = { uri: "https://reactjs.org/logo-og.png" };
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image} imageStyle={styles.image_content} >

                <Text {...props} style={styles.link}>{props.item.Link}</Text>

                <Text {...props} style={styles.title} onPress={() => Linking.openURL('http://google.com')}>{props.item.Name}</Text>

            </ImageBackground>
        </View>);
}



const styles = StyleSheet.create({
    container: {

        flex: 1,
        marginBottom: 10,
        height: 170
    },
    image: {
        flex: 1,
        padding: 10,
        resizeMode: "cover",
        justifyContent: "center",
        opacity: .6

    },
    title: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'roboto'

    },
    link: {
        height: 30,
        fontSize: 14,
        fontFamily: 'roboto'
    },

    image_content: {
        borderRadius: 10

    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
