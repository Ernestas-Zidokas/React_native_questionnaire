import React, { useCallback, useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { actions } from './reducer';
import { getQuestionsData } from './selectors';
import Button from '../../components/Button';

const View = styled.View`
  flex: 1;
  background-color: #f9f9f9;
  align-items: center;
  justify-content: center;
`;

const QuestionsScreen = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(actions.getQuestions());
  }, []);

  const questionsData = useSelector(getQuestionsData);
  const questionLabel = questionsData[page]?.label;
  const questionType = questionsData[page]?.type;

  const onNextPress = useCallback(() => {
    if (page < questionsData.length) {
      setPage(page + 1);
    }
  }, [page, questionsData.length]);

  return (
    <View>
      <Text>{questionLabel}</Text>
      {questionsData[page]?.options?.map((question, index) => {
        return (
          <Button
            text={question.label}
            isMultiple={questionType !== 'multiple'}
            isSelected={question.isSelected}
            page={page}
            index={index}
            key={index}
          />
        );
      })}
      <Button text="Next" isSelected onPress={onNextPress} />
    </View>
  );
};

export default QuestionsScreen;
