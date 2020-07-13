import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    padding: 2,
  },
  text: {
    color: "#A4B0BD",
    fontSize: 30,
  },
  sidebar_text: {
    color: "#47535E",
    fontSize: 40,
  },
  userInput: {
    fontSize: 60,
  },
  button: {
    flexGrow: 1,
    backgroundColor: "#777E8B",

    justifyContent: "center",
    alignItems: "center",

    padding: 20,
    borderRadius: 4,
    margin: 8,
  },
  sidebar: {
    flexGrow: 1,
    backgroundColor: "#F0DF87",
    width: "80%",
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    margin: 11,
    borderRadius: 4,
  },
  wrraper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  calculationArea: {
    flex: 4,
    backgroundColor: "#2B2B52",
  },
  problems: {
    flex: 7,
    backgroundColor: "#EAF0F1",
    marginTop: StatusBar.currentHeight,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  solutions: {
    flex: 3,
    backgroundColor: "#DAE0E2",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  buttonArea: {
    flex: 6,
    flexDirection: "row",
    backgroundColor: "blue",
  },
  numbers: {
    flex: 7,
    backgroundColor: "#7B8788",
  },
  operations: {
    flex: 3,
    backgroundColor: "#F3CC79",
  },
  appOutput: {
    fontSize: 30,
  },
});

export default styles;
