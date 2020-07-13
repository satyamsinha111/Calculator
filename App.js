// import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ToastAndroid } from "react-native";

import styles from "./Styles/style";

function App() {
  let [result, setResult] = useState("");
  let [display, setDisplay] = useState("");
  let [error, setError] = useState("");
  const showToast = (message) => {
    ToastAndroid.show("Some error occured", ToastAndroid.SHORT);
    setError("");
    setDisplay("");
    setResult("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.calculationArea}>
        <View style={styles.problems}>
          <Text style={styles.userInput}>{display}</Text>
        </View>
        <View style={styles.solutions}>
          <Text style={styles.appOutput}>{result}</Text>
        </View>
      </View>
      <View style={styles.buttonArea}>
        <View style={styles.numbers}>
          <View style={styles.wrraper}>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  try {
                    setResult(eval(display));
                  } catch (error) {
                    setError(error);
                    // alert(error);
                    showToast(error);
                  }
                }}
              >
                <Text style={styles.text}>=</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setDisplay(display + "0");
                }}
              >
                <Text style={styles.text}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setDisplay("");
                  setResult("");
                }}
              >
                <Text style={styles.text}>C</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setDisplay(display + "7");
                }}
              >
                <Text style={styles.text}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setDisplay(display + "8");
                }}
              >
                <Text style={styles.text}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setDisplay(display + "9");
                }}
              >
                <Text style={styles.text}>9</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setDisplay(display + "4");
                }}
              >
                <Text style={styles.text}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setDisplay(display + "5");
                }}
              >
                <Text style={styles.text}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setDisplay(display + "6");
                }}
              >
                <Text style={styles.text}>6</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setDisplay(display + "1");
                }}
              >
                <Text style={styles.text}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setDisplay(display + "2");
                }}
              >
                <Text style={styles.text}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setDisplay(display + "3");
                }}
              >
                <Text style={styles.text}>3</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.operations}>
          <View style={styles.wrraper}>
            <TouchableOpacity
              style={styles.sidebar}
              onPress={() => {
                setDisplay(display + "*");
              }}
            >
              <Text style={styles.sidebar_text}>X</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sidebar}
              onPress={() => {
                setDisplay(display + "/");
              }}
            >
              <Text style={styles.sidebar_text}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sidebar}
              onPress={() => {
                setDisplay(display + "+");
              }}
            >
              <Text style={styles.sidebar_text}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sidebar}
              onPress={() => {
                setDisplay(display + "-");
              }}
            >
              <Text style={styles.sidebar_text}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
export default App;
