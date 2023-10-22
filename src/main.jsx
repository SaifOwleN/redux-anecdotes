import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { NotiContextProvider } from "./NotiContext";
const query = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={query}>
    <NotiContextProvider>
      <App />
    </NotiContextProvider>
  </QueryClientProvider>
);
