import { HashRouter, Routes, Route } from "react-router-dom";

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
import ProductDetails from "./components/Home/ProductDetails";

function App() {
  return (
    <CartProvider>
      <HashRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* Explore */}
          <Route
            path="/explore"
            element={
              <MainLayout>
                <Main />
              </MainLayout>
            }
          />

          {/* Register / Login */}
          <Route path="/register" element={<Register type="signup" />} />
          <Route path="/login" element={<Register type="login" />} />

          {/* Features */}
          <Route
            path="/features"
            element={
              <MainLayout>
                <Features />
              </MainLayout>
            }
          />

          {/* Cart */}
          <Route path="/cart" element={<Cart />} />

          {/* About / Contact / Terms */}
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

          {/* Payment */}
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

          {/* Categories */}
          <Route
            path="/explore-items"
            element={
              <MainLayout>
                <Categories />
              </MainLayout>
            }
          />

          {/* ProductDetails */}
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </HashRouter>
    </CartProvider>
  );
}

export default App;
