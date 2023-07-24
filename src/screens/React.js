import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Button, TouchableOpacity, Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions, fetchQuestionsReset } from '../actions/questionsAction';
import QuestionItem from '../components/QuestionItem';
import { useIsFocused } from '@react-navigation/native';

const ReactScreen = () => {
    const dispatch = useDispatch();
    const isFocused = useIsFocused();

    const [refreshFlag, setRefreshFlag] = useState(0);
    const { loading, questions, hasMore } = useSelector((state) => state.question);


    useEffect(() => {
        if (isFocused) {
            dispatch(fetchQuestionsReset());
            fetchQuestionsData();
        }
    }, [isFocused, refreshFlag]);




    const fetchQuestionsData = () => {
        dispatch(fetchQuestions('reactjs'));
    };

    const handleLoadMore = () => {
        if (!loading && hasMore) {
            const nextPage = Math.floor(questions.length / 10) + 1;
            dispatch(fetchQuestions('reactjs', nextPage));
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
}

export default ReactScreen