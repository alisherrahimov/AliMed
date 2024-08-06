import {COLORS} from '@constants';
import {ChatIcon, HomeIcon, ProfileIcon} from '@icons';
import {BlurView} from '@react-native-community/blur';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  createStyleSheet,
  UnistylesRuntime,
  useStyles,
} from 'react-native-unistyles';

const RenderIcon = React.memo(
  ({isFocused, index}: {isFocused: boolean; index: number}) => {
    switch (index) {
      case 0:
        return (
          <HomeIcon
            width={24}
            height={24}
            color={
              isFocused
                ? COLORS['#199A8E']
                : UnistylesRuntime.colorScheme === 'dark'
                ? COLORS['#ffffff']
                : COLORS['#000000']
            }
          />
        );
      case 1:
        return (
          <ChatIcon
            width={24}
            height={24}
            color={
              isFocused
                ? COLORS['#199A8E']
                : UnistylesRuntime.colorScheme === 'dark'
                ? COLORS['#ffffff']
                : COLORS['#000000']
            }
          />
        );
      case 2:
        return (
          <ProfileIcon
            width={24}
            height={24}
            color={
              isFocused
                ? COLORS['#199A8E']
                : UnistylesRuntime.colorScheme === 'dark'
                ? COLORS['#ffffff']
                : COLORS['#000000']
            }
          />
        );
      default:
        return (
          <HomeIcon
            width={24}
            height={24}
            color={
              isFocused
                ? COLORS['#199A8E']
                : UnistylesRuntime.colorScheme === 'dark'
                ? COLORS['#ffffff']
                : COLORS['#000000']
            }
          />
        );
    }
  },
);

function MyTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const {styles} = useStyles(bottomStyles);

  return (
    <BlurView
      blurType={
        UnistylesRuntime.colorScheme === 'dark' ? 'dark' : 'chromeMaterial'
      }
      style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.btn}>
            <RenderIcon isFocused={isFocused} index={index} />
          </TouchableOpacity>
        );
      })}
    </BlurView>
  );
}

export default MyTabBar;

const bottomStyles = createStyleSheet(theme => {
  return {
    container: {
      flexDirection: 'row',
      padding: 10,
      height: 60,
      position: 'absolute',
      bottom: 20,
      width: '66%',
      borderRadius: 30,
      alignSelf: 'center',
    },
    btn: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: (isFocused: boolean) => ({
      color: isFocused ? theme.colors.typography : '#222',
    }),
  };
});
