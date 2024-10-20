import {Modal, StyleSheet, View} from 'react-native';
import React, {
  forwardRef,
  PropsWithChildren,
  useImperativeHandle,
  useState,
} from 'react';

export interface MyModalProps extends PropsWithChildren {
  width?: number;
  height?: number;
}
export interface MyModalRef {
  open: () => void;
  close: () => void;
}

const MyModal = forwardRef((props: MyModalProps, ref) => {
  const [visible, setVisible] = useState(false);

  const open = () => {
    setVisible(true);
  };

  const close = () => {
    setVisible(false);
  };

  useImperativeHandle(ref, () => {
    return {
      open,
      close,
    };
  });

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onDismiss={close}>
      <View style={[styles.container]}>
        <View
          style={[
            {
              height: props.height,
              width: props.width,
            },
          ]}>
          {props.children}
        </View>
      </View>
    </Modal>
  );
});

export default MyModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
