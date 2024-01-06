import { NavigationContainer } from "@react-navigation/native";
import Routes from "./routes";
import WrapplerPasswordProvider from "./context/passwordContext";


export default function App() {
  return (
    <NavigationContainer>
      <WrapplerPasswordProvider>
        <Routes />
      </WrapplerPasswordProvider>
    </NavigationContainer>
  );
}


