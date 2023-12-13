import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./style/tailwind.css"
import App from "./App"
import Provider from "./Provider"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
