import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../types';

export default function AddScreenScreen({
    navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
    return (
        <View style={styles.container}>

            <View style={styles.form_container}>
                <TextInput
                    style={styles.input}
                />
                <View style={styles.button}>
                    <Button
                        title="Добавить"
                        color={'#111'}

                        onPress={() => navigation.replace('Root')}
                    />

                </View>
            </View>

            {/*  <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
                <Text style={styles.linkText}>Домой</Text>
            </TouchableOpacity> */}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        width: '100%',
        flex: 1,
        backgroundColor: '#eee',
        paddingRight: 10,
        paddingLeft: 10

        /*  alignItems: 'center',
         justifyContent: 'center', */

    },
    form_container: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    linkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
    button: {
        marginLeft: 10,
        backgroundColor: '#87ed9e',
        borderRadius: 10
    },
    input: {
        width: 230,
        height: 40,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        backgroundColor: 'white',
        paddingLeft: 15
    },
});
