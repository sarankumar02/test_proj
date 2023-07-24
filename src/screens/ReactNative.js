import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Button, TouchableOpacity, Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions, fetchQuestionsReset } from '../actions/questionsAction';
import QuestionItem from '../components/QuestionItem';
import { useIsFocused } from '@react-navigation/native';


const ReactNativeScreen = () => {
    const dispatch = useDispatch();
    const { loading, questions, hasMore } = useSelector((state) => state.question);
    const isFocused = useIsFocused();

    const [refreshFlag, setRefreshFlag] = useState(0);


    useEffect(() => {
        if (isFocused) {
            dispatch(fetchQuestionsReset());
            fetchQuestionsData();
        }
    }, [isFocused, refreshFlag]);


    const fetchQuestionsData = () => {
        dispatch(fetchQuestions('react-native'));
    };

    const handleLoadMore = () => {
        if (!loading && hasMore) {
            const nextPage = Math.floor(questions.length / 10) + 1;
            dispatch(fetchQuestions('react-native', nextPage));
        }
    };



    if (loading && questions.length === 0) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="blue" />
            </View>
        );
    }

    return (
        <FlatList
            data={questions}
            renderItem={({ item }) => {
                return <QuestionItem item={item}></QuestionItem>
            }}
            keyExtractor={(item) => item.question_id.toString()}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                loading ? (
                    <ActivityIndicator size="large" color="blue" />
                ) : (
                    <Button title="Load More" onPress={handleLoadMore} />
                )
            }
        />
    );
};

export default ReactNativeScreen;
