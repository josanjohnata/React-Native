import { StyleSheet } from "react-native"
import { theme } from "../../../App.style"

export const registerStyle = StyleSheet.create({
  content: {
    padding: 17,
    paddingTop: 0
  },
  icon: {
    color: theme.colors.primary
  },
  button: {
    margin: 15,
    marginLeft: 0,
    marginRight: 0
  }
})