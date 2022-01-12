/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-native-elements';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Container, Content } from '@components';

import { RootStackParamList, RootStackRoutes } from '@models/navigation';
import { ToDoItem } from '@models/todoItem';
import { StateType } from '@store/store';

import { toDoListSelector } from '@modules/todoList/selectors';
import { addItem, updateItem, removeItem, clearList } from '@modules/todoList/slice';

import _ from 'lodash';
import { ActionPanel, ToDoItemPanel } from './containers';

type Props = NativeStackScreenProps<RootStackParamList, RootStackRoutes.HomeScreen>;

const HomeScreen = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const todoList: ToDoItem[] = useSelector((store: StateType) => toDoListSelector(store));
  const keyExtractor = useCallback(item => item?.id, []);
  const onAddItem = (item: ToDoItem) => {
    dispatch(addItem(item));
  };
  const onUpdateItem = (item: ToDoItem) => {
    dispatch(updateItem(item));
  };
  const onRemoveItem = (id: string) => {
    dispatch(removeItem(id));
  };

  const onClearList = () => {
    dispatch(clearList());
  };
  const renderToDoItem = useCallback(({ item }: { item: ToDoItem }) => {
    return <ToDoItemPanel item={item} onUpdateItem={onUpdateItem} onRemoveItem={onRemoveItem} />;
  }, []);

  return (
    <Container>
      <ActionPanel onAddItem={onAddItem} />
      <Content
        isList={true}
        data={todoList}
        extraData={todoList.length}
        contentContainerStyle={styles.contentView}
        renderItem={renderToDoItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}
        removeClippedSubviews={false}
      />
      {todoList.length > 0 ? <Button title={'Clear'} onPress={onClearList} /> : null}
    </Container>
  );
};

const styles = StyleSheet.create({
  contentView: {
    flexGrow: 1,
  },
});

export default HomeScreen;
