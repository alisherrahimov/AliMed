import React, {memo} from 'react';
import {View, Text} from '@components';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {ReadIcon} from '@icons';
import {COLORS} from '@constants';
interface RenderMessageProps {
  item: any;
  index: number;
}
let id = '1';
const RenderMessage: React.FC<RenderMessageProps> = memo(({index, item}) => {
  const {styles} = useStyles(renderMessageStyle);
  return (
    <View
      style={styles.container(item)}
      marginHorizontal={10}
      key={index.toString()}>
      <View style={styles.textView(item)}>
        <Text style={styles.text(item)}>{item.content}</Text>
      </View>
      <View flexDirection="row" alignItems="center">
        <Text
          marginLeft={item.senderId === id ? 0 : 6}
          marginRight={4}
          marginTop={2}
          fontSize={12}>
          22:00
        </Text>
        {item.senderId === id ? (
          <ReadIcon color={COLORS['#25af7c']} width={20} height={20} />
        ) : null}
      </View>
    </View>
  );
});

export default RenderMessage;

const renderMessageStyle = createStyleSheet(() => {
  return {
    container: (item: any) => {
      return {
        alignItems: item.senderId === id ? 'flex-end' : 'flex-start',
        // marginHorizontal: 10,
      };
    },
    text: (item: any) => {
      return {
        fontSize: 14,
        color: item.senderId === id ? COLORS['#ffffff'] : COLORS['#000000'],
      };
    },
    textView: (item: any) => {
      return {
        maxWidth: '85%',
        backgroundColor: item.senderId === id ? COLORS['#25af7c'] : '#fafafa',
        padding: 14,
        borderRadius: 20,
        marginVertical: 5,
      };
    },
  };
});
