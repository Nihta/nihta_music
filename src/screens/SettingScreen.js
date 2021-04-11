import React from 'react';
import {Linking, ScrollView, Switch} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from 'styled-components/native';

// Components
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

  const themeMode = useSelector(selectTheme);

  return (
    <ScrollView style={styles.scroll}>
      <ListItem
        iconProps={icons.darkMode}
        title={'Chế độ tối'}
        subtitle={'Chuyển giao diện tối'}
        rightElement={
          <Switch
            thumbColor={
              themeMode === 'light' ? theme.elevatedBG : theme.foreground
            }
            value={themeMode === 'dark'}
            trackColor={{
              true: `${theme.fgTrans}0.3))`,
              false: `${theme.fgTrans}0.3))`,
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

      <ListItem iconProps={icons.info} title={'Phiên bản'} subtitle={'0.01'} />
    </ScrollView>
  );
}

export default SettingsScreen;

const styles = {
  scroll: {
    flex: 1,
    marginTop: 20,
    marginBottom: 60,
  },
};
