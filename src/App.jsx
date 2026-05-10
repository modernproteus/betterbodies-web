import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";
import Home from "./pages/Home";
const routerBaseName = import.meta.env.BASE_URL.replace(/\/$/, "");
function App() {
  return (
    <Router basename={routerBaseName}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
