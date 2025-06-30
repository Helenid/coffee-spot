import React, { useRef, useState } from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";


const {width} = Dimensions.get("screen")

const OtpInput = ({ length = 4, onComplete, onChange, secure }) => {
  const inputRefs = useRef([]);
  const [otpValues, setOtpValues] = useState(Array(length).fill(""));

  const updateOTPValues = (index, value) => {
    if (value.length > 1) {
      handlePaste(value);
      return;
    }
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    if (onChange) {
      onChange(newOtpValues.join(""));
    }

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newOtpValues.join("").length === length) {
      onComplete?.(newOtpValues.join(""));
    }
  };

  const handlePaste = (text) => {
    const chars = text.slice(0, length).split("");
    const newOtpValues = Array(length).fill("");
    chars.forEach((char, index) => {
      newOtpValues[index] = char;
    });
    setOtpValues(newOtpValues);
    onChange?.(newOtpValues.join(""));
    onComplete?.(newOtpValues.join(""));

    setTimeout(() => {
      const nextIndex = Math.min(chars.length, length - 1);
      inputRefs.current[nextIndex]?.focus();
    }, 50);
  };

  return (
    <View style={styles.container}>
      {Array.from({ length }).map((_, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref)}
          style={[
            styles.input,
            { color:'#fff', borderColor: '#999' },
            otpValues[index] ? { fontFamily: 'medium' } : null,
            length === 4 && { width: width / 9, flex: 0 },
          ]}
          maxLength={1}
          secureTextEntry={secure}
          keyboardType="numeric"
          value={otpValues[index]}
          onChangeText={(text) => {
            if (text.length > 1) {
              handlePaste(text);
            } else {
              updateOTPValues(index, text);
            }
          }}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === "Backspace" && index > 0) {
              inputRefs.current[index - 1]?.focus();
            }
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: width / 9,
    height: width / 9,
    marginHorizontal: 5,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: "center",
  },
});

export default OtpInput;
