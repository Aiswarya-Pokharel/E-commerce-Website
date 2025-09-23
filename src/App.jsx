import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./components/Register";
import Main from "./components/Home/Main";
import HomePage from "./components/Home/HomePage";
import About from "./components/About/About";
import Terms from "./components/About/Terms";
import Features from "./components/Home/Features";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/Cart/CartContext";
import Payment from "./components/payment/Payment";
import Success from "./components/payment/Success";
import Failure from "./components/payment/Failure";
import ContactUs from "./components/About/ContactUs";
import Categories from "./components/Home/Categories";
import MainLayout from "./components/Home/MainLayout";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/explore"
            element={
              <MainLayout>
                <Main />
              </MainLayout>
            }
          />
          <Route
            path="/register"
            element={
              <MainLayout>
                <Register type="signup" />
              </MainLayout>
            }
          />
          <Route
            path="/login"
            element={
              <MainLayout>
                <Register type="login" />
              </MainLayout>
            }
          />

          <Route
            path="/features"
            element={
              <MainLayout>
                <Features />
              </MainLayout>
            }
          />
          <Route path="/cart" element={<Cart />} />

          <Route
            path="/about"
            element={
              <MainLayout>
                <About />
              </MainLayout>
            }
          />
          <Route path="/contact" element={<ContactUs />} />
          <Route
            path="/terms"
            element={
              <MainLayout>
                <Terms />
              </MainLayout>
            }
          />
          <Route
            path="/payment"
            element={
              <MainLayout>
                <Payment />
              </MainLayout>
            }
          />
          <Route
            path="/success"
            element={
              <MainLayout>
                <Success />
              </MainLayout>
            }
          />
          <Route
            path="/failure"
            element={
              <MainLayout>
                <Failure />
              </MainLayout>
            }
          />
          <Route
            path="/explore-items"
            element={
              <MainLayout>
                <Categories />
              </MainLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
