import { render } from "react-dom";

import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

const rootElement = document.getElementById("root");

const client = new QueryClient();

render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>,
  rootElement
);
