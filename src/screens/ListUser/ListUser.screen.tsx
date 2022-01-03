/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useDispatch, useSelector} from 'react-redux';
import {fetchGetUser} from '../../actions/useraAction';
import {RootState} from '../../reducers';
import {styles} from './ListUser.styles';

const ListUser = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();
  const {loading, data} = useSelector((state: RootState) => state.userReducer);

  useEffect(() => {
    dispatch(fetchGetUser());
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          {true && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="red" />
            </View>
          )}

          {!loading && data.length > 0 && (
            <View>
              {data.map(item => {
                return <Text key={item.id + item.login}>{item.login}</Text>;
              })}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListUser;
