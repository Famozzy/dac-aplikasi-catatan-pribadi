import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./style/tailwind.css"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
