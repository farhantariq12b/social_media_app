import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomTabs from "./Screens/TabBar";
import { colors } from "./utils/colors";

export default function App() {
  return (
    <SafeAreaProvider>
      <BottomTabs />
    </SafeAreaProvider>
  );
}
