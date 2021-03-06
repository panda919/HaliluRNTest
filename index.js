/**
 * @format
 */
import 'react-native-gesture-handler';
import 'react-native-get-random-values';

import { AppRegistry, LogBox } from 'react-native';
import { enableScreens } from 'react-native-screens';

import App from './App';
import { name as appName } from './app.json';
enableScreens();
AppRegistry.registerComponent(appName, () => App);
LogBox.ignoreLogs(['Require cycle:']);
