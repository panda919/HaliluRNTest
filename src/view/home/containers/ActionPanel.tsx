import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { ToDoItem } from '@models/todoItem';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components/native';
import { Input, Button } from 'react-native-elements';

type Props = {
  todoItem?: ToDoItem;
  onAddItem: (val: ToDoItem) => void;
};
const ActionPanel = ({ onAddItem }: Props) => {
  const [newTodoItem, setNewTodoItem] = useState<string>('');
  const todoInputHandler = (newTodo: string) => {
    setNewTodoItem(newTodo);
  };
  const addTodoHandler = () => {
    const newItem: ToDoItem = {
      id: uuidv4(),
      content: newTodoItem,
      checked: false,
    };
    onAddItem(newItem);
    setNewTodoItem('');
  };

  return (
    <Container>
      <Input
        placeholder="Add an item!"
        value={newTodoItem}
        onChangeText={todoInputHandler}
        placeholderTextColor={'#999'}
        autoCorrect={false}
        autoCompleteType={undefined}
        containerStyle={styles.input}
      />
      <Button disabled={newTodoItem === ''} title={'ADD'} onPress={addTodoHandler} />
    </Container>
  );
};

export default ActionPanel;
const Container = styled.View`
  margin-top: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
`;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    marginLeft: 20,
  },
  button: {
    marginRight: 10,
  },
});
