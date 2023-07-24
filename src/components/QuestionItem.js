
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';

const QuestionItem = ({ item }) => {
    const handleItemClick = (url) => {
        // Check if the item has a valid URL
        if (url) {
            // Open the URL in the device's default browser
            Linking.openURL(url).catch((err) => console.error('An error occurred', err));
        } else {
            console.warn('No valid URL for this item.');
        }
    };
    return (
        <View style={{

            padding: 10, marginHorizontal: 15,
            paddingVertical: 20, elevation: 10,
            backgroundColor: "white",
            marginVertical: 10
        }}
        >
            <TouchableOpacity onPress={() => {
                console.log("item url--0", item.link)
                handleItemClick(item.link)
            }}>
                <Text
                    numberOfLines={2}
                    style={{
                        color: 'black',
                        fontSize: 18,
                    }}>{item.title}</Text>
            </TouchableOpacity>
        </View>)
};

export default QuestionItem