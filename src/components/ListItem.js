import React from 'react';
import {Text, View, StyleSheet, TouchableNativeFeedback} from 'react-native';
import {useTheme} from 'styled-components/native';

// Components
import Icon from './Icon';

// Theme
import {WINDOW_WIDTH} from '../themes/mixins';
import {SCALE_16} from '../themes/spacing';
import {FONT_SIZE_14, FONT_SIZE_16} from '../themes/typography';

/**
 *
 * @param {{style?: import('react-native').StyleProp<import('react-native').ViewStyle>}} props
 * @returns
 */
function ListItem({
  style,
  title,
  onPress,
  subtitle,
  iconProps,
  titleStyle,
  onLongPress,
  rightElement,
  subtitleStyle,
  delayLongPress,
}) {
  const theme = useTheme();

  return (
    <TouchableNativeFeedback
      onPress={onPress}
      onLongPress={onLongPress}
      delayLongPress={delayLongPress}>
      <View style={[styles.wrapper, style]}>
        <Icon style={[styles.icon, {color: theme.contrast}]} {...iconProps} />

        <View style={styles.textWrapper}>
          <Text
            style={[styles.title, {color: theme.textColor}, titleStyle]}
            numberOfLines={1}>
            {title}
          </Text>

          {subtitle && (
            <Text
              style={[
                styles.subTitle,
                {color: theme.textSecondaryColor},
                subtitleStyle,
              ]}>
              {subtitle}
            </Text>
          )}
        </View>

        <View style={styles.rightWrapper}>{rightElement}</View>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    marginVertical: 4,
    paddingHorizontal: SCALE_16,
  },
  icon: {
    padding: 5,
    marginRight: 12,
  },
  textWrapper: {
    flex: 1,
    height: '85%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  rightWrapper: {},
  title: {
    fontSize: FONT_SIZE_16,
    width: WINDOW_WIDTH / 2,
  },
  subTitle: {
    fontSize: FONT_SIZE_14,
  },
});

export default ListItem;
