import React from "react";
import { Modal, View, Pressable, StyleSheet } from "react-native";


const AppModal = ({
  visible,
  onClose,
  children,
  modalStyles,
  backdropStyle,
  animationType,
}) => {
  return (
    <Modal
      animationType={animationType || "slide"}
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable
        onPress={onClose}
        style={[styles.modalBackdrop, backdropStyle]}
      >
        <Pressable
          onPress={() => {}}
          style={[styles.modalContainer, modalStyles]}
        >
          {children}
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default AppModal;

const styles = StyleSheet.create({
  modalBackdrop: {
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: "#fff",
    width: "100%",
    paddingHorizontal: 20,
  },
});
