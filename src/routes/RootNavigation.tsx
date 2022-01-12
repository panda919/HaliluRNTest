import { createNavigationContainerRef, StackActions } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: never, params: never) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
export function push(name: never, ...args: any[]) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, ...args));
  }
}
