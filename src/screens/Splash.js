import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        // Wait for two seconds (2000ms) and then navigate to the main screen
        const timer = setTimeout(() => {
            navigation.replace('MainScreen');
        }, 2000);

        // Clean up the timer to avoid memory leaks
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Splash Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default SplashScreen;
