import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    flexDirection: "row",
  },
  nameContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    flexDirection: 'row',
    marginBottom: 10,
    height: 56,
    alignItems: 'center',
    marginRight: 12,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#e23c44',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 7,
  },
});