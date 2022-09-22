import "./app.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/Main";
import About from "./pages/About";
import Footer from "./components/Footer/Footer";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Cartpage from "./pages/Cartpage";
import Blogdetails from "./pages/Blogdetails";
import ScrollToTop from "./components/ScrollToTop";
import Auth from "./pages/Auth";
import Login from "./pages/Login";
import { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import ProductScreen from "./components/ProductScreen";
import AdressScreen from "./pages/AdressScreen";
import Payment from "./pages/Payment";
import PlaceOrder from "./pages/PlaceOrder";
import OrderScreen from "./pages/OrderScreen";
import OrderHistoryScreen from "./pages/OrderHistoryScreen";
import ProfileScreen from "./pages/ProfileScreen";

// import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  if (localStorage.getItem("products") === null) {
    localStorage.setItem("products", JSON.stringify([]));
  }
  let products = JSON.parse(localStorage.getItem("products"));
  const [count, setCount] = useState();
  const [reRender, setReRender] = useState();

  useEffect(() => {
    products.forEach((prod) => {
      setReRender(prod.reRender);
    });
  }, [reRender, products]);

  useEffect(() => {
    products.forEach((prod) => {
      setCount(prod.count);
    });
  }, [count, products]);

  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
  }, [reRender]);
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <ToastContainer position="bottom-center" limit={1} />
        <Header
          count={count}
          setcount={setCount}
          setrerender={setReRender}
          rerender={reRender}
          userinfo={userInfo}
        />
        <Routes>
          <Route
            path="/"
            element={<Main setcount={setCount} setrerender={setReRender} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/shop"
            element={
              <Shop
                setcount={setCount}
                setrerender={setReRender}
                rerender={reRender}
              />
            }
          />
          <Route
            path="/cartpage"
            element={<Cartpage setrerender={setReRender} rerender={reRender} />}
          />
          <Route path="/blog/details" element={<Blogdetails />} />
          <Route
            path="/signin"
            element={<Login setuserinfo={setUserInfo} userinfo={userInfo} />}
          />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route
            path="/signup"
            element={<Auth setuserinfo={setUserInfo} userinfo={userInfo} />}
          />
          {/* <Route path="/logout" element={<Logout />} /> */}
          <Route
            path="/product/:slug"
            element={
              <ProductScreen setcount={setCount} setrerender={setReRender} />
            }
          />
          <Route path="/address" element={<AdressScreen />} />
          <Route path="/payment" element={<Payment />} />

          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/order/:id" element={<OrderScreen />} />
          <Route path="/orderhistory" element={<OrderHistoryScreen />} />

          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
