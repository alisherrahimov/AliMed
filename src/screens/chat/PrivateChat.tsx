import {ChatHeader, Input, RenderMessage, Touchable, View} from '@components';
import {COLORS} from '@constants';
import FONTS from '@fonts';
import {EmojiIcon, SendIcon, VoiceIcon} from '@icons';
import React, {useMemo} from 'react';
import {FlatList, KeyboardAvoidingView} from 'react-native';

const messages = [
  {
    id: 1,
    content:
      'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    senderId: '1',
    receiverId: '2',
  },
  {
    id: 2,
    content: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
    senderId: '2',
    receiverId: '1',
  },
  {
    id: 3,
    content: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
    senderId: '1',
    receiverId: '2',
  },
  {
    id: 4,
    content: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
    senderId: '2',
    receiverId: '1',
  },
];

const PrivateChat = () => {
  const flatRef = React.useRef<FlatList>(null);

  const [message, setMessage] = React.useState('');

  const renderFooter = useMemo(() => {
    return (
      <View
        height={60}
        width={'100%'}
        backgroundColor={COLORS['#ffffff']}
        // position="absolute"
        justifyContent="center"
        // flex={1}
        bottom={0}>
        <View
          marginHorizontal={10}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center">
          <View flexDirection="row" alignItems="center">
            <Touchable
              borderRadius={20}
              height={40}
              width={40}
              alignItems="center"
              justifyContent="center">
              <EmojiIcon color={COLORS['#25af7c']} />
            </Touchable>
            <Input
              value={message}
              multiline
              onChangeText={setMessage}
              width={'75%'}
              color={COLORS['#000000']}
              font={FONTS.Medium}
              placeholder="Type a message"
              marginLeft={10}
              textAlign="left"
            />
          </View>
          {message.length > 0 ? (
            <Touchable
              onPress={() => {
                setMessage('');
                messages.push({
                  id: messages.length + 1,
                  content: message,
                  senderId: '1',
                  receiverId: '2',
                });
                setTimeout(() => {
                  flatRef.current?.scrollToEnd();
                }, 300);
              }}
              height={40}
              width={40}
              alignItems="center"
              justifyContent="center">
              <SendIcon color={COLORS['#25af7c']} />
            </Touchable>
          ) : (
            <Touchable
              height={40}
              width={40}
              alignItems="center"
              justifyContent="center">
              <VoiceIcon color={COLORS['#25af7c']} />
            </Touchable>
          )}
        </View>
      </View>
    );
  }, [message]);
  return (
    <View flex={1} backgroundColor="#ffffff">
      <ChatHeader />
      <FlatList
        ref={flatRef}
        data={messages}
        keyExtractor={({id}) => id.toString()}
        renderItem={({index, item}) => (
          <RenderMessage key={index.toString()} item={item} index={index} />
        )}
      />
      <KeyboardAvoidingView behavior="padding">
        <View justifyContent="flex-end">{renderFooter}</View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default PrivateChat;
