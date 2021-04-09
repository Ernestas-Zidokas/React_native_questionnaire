import React, { useState } from 'react';
import { CheckBox } from 'react-native';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { colorSelector, fontColorSelector } from '../utils/colorSelector';
import { actions } from '../screens/questions/reducer';

const TouchableOpacity = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  width: 80%;
  padding: 5px 10px;
  background: ${(props) => colorSelector(props.isSelected, props.isMultiple)};
  margin-top: 10px;
`;

const Text = styled.Text`
  color: ${(props) => fontColorSelector(props.isSelected, props.isMultiple)};
`;

const Button = ({
  isSelected = false,
  text,
  isMultiple = false,
  page,
  index,
  onPress,
}) => {
  const dispatch = useDispatch();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      dispatch(actions.selectAnswer(page, index, isMultiple));
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      isSelected={isSelected}
      isMultiple={isMultiple}
    >
      {isMultiple && (
        <CheckBox
          value={isSelected}
          disabled
          tintColors={{ true: isSelected ? 'white' : '#D8DDE8' }}
        />
      )}
      <Text isSelected={isSelected} isMultiple={isMultiple}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
