import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import ContactUsPage from "./Pages/ContactUsPage/ContactUsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactUsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
