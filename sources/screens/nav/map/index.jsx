import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const Map = () => {
    return (
        <View style={styles.container}>
            <Text>Map</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})

export default Map;