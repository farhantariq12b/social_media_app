import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../utils/colors";

const GeneraicCount = ({ count, name, addLine }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.count}>{count}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      {addLine && (
        <View
          style={{
            height: 50,
            width: 1,
            backgroundColor: `${colors.darkGrey2}`,
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    // padding: 10,
    gap: 30,
  },
  container: {
    alignItems: "center",
    padding: 10,
  },
  count: {
    fontSize: 16,
    fontWeight: "bold",
    color: `${colors.secondary}`,
  },
  name: {
    fontSize: 12,
    color: `${colors.darkGrey2}`,
  },
});

export default GeneraicCount;
