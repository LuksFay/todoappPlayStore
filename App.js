import { StatusBar } from "expo-status-bar";

//components
import Home from "./components/Home";

//styled components
import { Container } from "./styles/appStyles";

export default function App() {
  return (
    <Container>
      <Home />
      <StatusBar style="light" />
    </Container>
  );
}
