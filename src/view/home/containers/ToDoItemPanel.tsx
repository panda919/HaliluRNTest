import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { ListItem, Input, Button, Icon } from 'react-native-elements';
import { ToDoItem } from '@models/todoItem';

type Props = {
  item: ToDoItem;
  onUpdateItem: (item: ToDoItem) => void;
  onRemoveItem: (id: string) => void;
};
const ToDoItemPanel = ({ item, onUpdateItem, onRemoveItem }: Props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [content, setContent] = useState(item.content);
  const onToggle = () => {
    onUpdateItem({ ...item, checked: !item.checked });
  };
  const onPressEditBtn = () => {
    if (isEdit) {
      onUpdateItem({ ...item, content });
    } else {
      setContent(item.content);
    }
    setIsEdit(prev => !prev);
  };
  const onRemoveEditBtn = () => {
    if (isEdit) {
      setIsEdit(false);
    } else {
      onRemoveItem(item.id);
    }
  };
  return (
    <ListItem bottomDivider hasTVPreferredFocus={undefined} tvParallaxProperties={undefined}>
      <ListItem.CheckBox checked={item.checked} onPress={onToggle} />

      <ListItem.Content>
        {isEdit ? (
          <Input
            value={content}
            onChangeText={setContent}
            placeholderTextColor={'#999'}
            autoCompleteType={undefined}
          />
        ) : (
          <ListItem.Title>{item.content}</ListItem.Title>
        )}
      </ListItem.Content>

      <Button
        icon={
          isEdit ? (
            <Icon type={'antdesign'} name="save" color="white" tvParallaxProperties={undefined} />
          ) : (
            <Icon type={'antdesign'} name="edit" color="white" tvParallaxProperties={undefined} />
          )
        }
        onPress={onPressEditBtn}
        buttonStyle={styles.editBtn}
        containerStyle={styles.btnContainer}
      />
      <Button
        onPress={onRemoveEditBtn}
        icon={
          isEdit ? (
            <Icon
              type={'antdesign'}
              name="closecircle"
              color="white"
              tvParallaxProperties={undefined}
            />
          ) : (
            <Icon type={'entypo'} name="trash" color="white" tvParallaxProperties={undefined} />
          )
        }
        buttonStyle={styles.removeBtn}
        containerStyle={styles.btnContainer}
      />
    </ListItem>
  );
};

export default React.memo(ToDoItemPanel, (prev, next) => {
  return JSON.stringify(prev.item) === JSON.stringify(next.item) ? true : false;
});

const styles = StyleSheet.create({
  btnContainer: {
    height: 40,
    marginVertical: 10,
  },
  editBtn: {
    backgroundColor: 'rgba(78, 116, 289, 1)',
    borderRadius: 3,
  },
  removeBtn: {
    backgroundColor: 'rgba(214, 61, 57, 1)',
    borderRadius: 3,
  },
});
