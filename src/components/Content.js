import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { StatusBar, View, KeyboardAvoidingView, Platform } from 'react-native';
import {
  KeyboardAwareScrollView,
  KeyboardAwareFlatList,
} from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

class Content extends PureComponent {
  render() {
    const {
      children,
      contentContainerStyle,
      disableKBDismissScroll,
      keyboardShouldPersistTaps,
      padder,
      isStatic,
      isList,
      style,
    } = this.props;
    const contentStyle = [contentContainerStyle];

    if (isStatic) {
      return <View style={[style, contentStyle]}>{children}</View>;
    }
    if (isList) {
      return (
        <KeyboardAwareFlatList
          automaticallyAdjustContentInsets={false}
          resetScrollToCoords={disableKBDismissScroll ? null : { x: 0, y: 0 }}
          keyboardShouldPersistTaps={keyboardShouldPersistTaps || 'handled'}
          ref={c => {
            this._scrollview = c;
            this._root = c;
          }}
          {...this.props}
          contentContainerStyle={contentStyle}>
          {children}
        </KeyboardAwareFlatList>
      );
    }

    return (
      <KeyboardAwareScrollView
        automaticallyAdjustContentInsets={false}
        resetScrollToCoords={disableKBDismissScroll ? null : { x: 0, y: 0 }}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps || 'handled'}
        ref={c => {
          this._scrollview = c;
          this._root = c;
        }}
        innerRef={ref => {
          this._innerRoot = ref;
        }}
        {...this.props}
        contentContainerStyle={contentStyle}>
        {children}
      </KeyboardAwareScrollView>
    );
  }
}

Content.propTypes = {
  disableKBDismissScroll: PropTypes.bool,
  keyboardShouldPersistTaps: PropTypes.string,
  isStatic: PropTypes.bool,
  isList: PropTypes.bool,
};
Content.defaultProps = {
  disableKBDismissScroll: false,
  keyboardShouldPersistTaps: 'handled',
  isStatic: false,
  isList: false,
};
export default Content;
