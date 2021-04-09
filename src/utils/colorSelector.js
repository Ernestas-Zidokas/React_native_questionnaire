export const colorSelector = (isSelected, isMultiple) => {
  if (isSelected && isMultiple) {
    return '#FF5C00';
  }

  if (isSelected) {
    return '#027AFF';
  }

  return 'white';
};

export default colorSelector;

export const fontColorSelector = (isSelected, isMultiple) => {
  if (isSelected && isMultiple) {
    return 'white';
  }

  if (!isSelected && isMultiple) {
    return '#222222';
  }

  if (!isSelected) {
    return '#027AFF';
  }

  return 'white';
};
