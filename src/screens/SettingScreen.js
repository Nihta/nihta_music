import React from 'react';
import {Linking, ScrollView, Switch} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

// Components
import Container from '../components/Container';
import ListItem from '../components/ListItem';

// Redux
import {setTheme, selectTheme} from '../reducers/settingReducer';

const icons = {
  darkMode: {
    name: 'moon-outline',
    type: 'ionicon',
    size: 28,
  },
  info: {
    name: 'alert-circle-outline',
    type: 'ionicon',
    size: 28,
  },
  flag: {
    name: 'flag-outline',
    type: 'ionicon',
    size: 28,
  },
  mail: {
    name: 'mail-outline',
    type: 'ionicon',
    size: 28,
  },
};

const onPressReport = () => {
  Linking.openURL(
    'mailto:trvathin@gmail.com?subject=Góp ý, báo cáo&body=Ý kiến của bạn: %20',
  );
};

function SettingsScreen() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const themeMode = useSelector(selectTheme);

  return (
    <Container>
      <ScrollView style={styles.scroll}>
        <ListItem
          iconProps={icons.darkMode}
          title={'Chế độ tối'}
          subtitle={'Chuyển giao diện tối'}
          rightElement={
            <Switch
              value={themeMode === 'dark'}
              thumbColor={
                themeMode === 'light' ? theme.elevatedBG : theme.foreground
              }
              trackColor={{
                true: '#555',
                false: '#ccc',
              }}
              disabled
            />
          }
          onPress={() =>
            dispatch(setTheme(themeMode === 'light' ? 'dark' : 'light'))
          }
        />

        <ListItem
          iconProps={icons.mail}
          title={'Góp ý, báo lỗi'}
          subtitle={'Gửi email cho chúng tôi'}
          onPress={() => onPressReport()}
        />

        <ListItem
          iconProps={icons.info}
          title={'Giới thiệu'}
          onPress={() => navigation.navigate('about')}
        />
      </ScrollView>
    </Container>
  );
}

const styles = {
  scroll: {
    flex: 1,
  },
};

export default SettingsScreen;
