import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomTabs from "./Screens/TabBar";
import { UserContext } from "./utils/AppContext";
import { UsersData } from "./utils/UsersData";
import { useState } from "react";

export default function App() {
  const [users, setUsers] = useState(UsersData);

  return (
    <SafeAreaProvider>
      <UserContext.Provider
        value={{ usersData: users, setUsersData: setUsers }}
      >
        <BottomTabs />
      </UserContext.Provider>
    </SafeAreaProvider>
  );
}
