import React, { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
    children: ReactNode;
};
const Container: React.FC<Props> = ({ children }) => {
    const containerStyle = {
        flex: 1,
    };
    return <SafeAreaView style={containerStyle}>{children}</SafeAreaView>;
};
Container.propTypes = {};
Container.defaultProps = {};
export default Container;
