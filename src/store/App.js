import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      {/* Seus componentes aqui */}
    </Provider>
  );
}

export default App;
