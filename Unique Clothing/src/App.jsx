import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

/*  Let's break down the code step by step:

Imports: The code begins by importing necessary components and styles for the application. This includes the CSS file for styling, various components like Navbar, Footer, and different pages like Shop, Product, Cart, LoginSignup, etc. These are imported so they can be used in the app.

App Function: The App function is the main function that defines the structure of our React application. This function returns JSX, which describes how the UI should look.

BrowserRouter: This component comes from the React Router library, which is used for managing navigation and routing in a React application. It wraps around the entire application and provides the routing functionality.

Navbar Component: The <Navbar /> component is rendered inside the <BrowserRouter> component. It represents the navigation bar of the application, which typically contains links for different sections or pages.

Routes: Inside the <BrowserRouter> component, the <Routes> component is used to define the routes for different pages of the application. Each <Route> component represents a specific route and specifies the component or page to render when that route is matched.

Route Definitions: The <Route> components define the mapping between URLs and components to render. For example:

The route <Route path="/" element={<Shop />} /> specifies that when the URL is '/' (i.e., the homepage), it should render the <Shop /> component.
Similarly, routes are defined for different categories like men, women, and kids, each rendering a <ShopCategory> component with specific banner and category props.
The route <Route path="/product" element={<Product />}> specifies that when the URL matches '/product', it should render the <Product /> component.
Inside the product route, there's another nested route <Route path=":productId" element={<Product />} /> which specifies that when a product ID is provided in the URL, it should render the <Product /> component with that specific product.
Routes for the cart and login pages are also defined similarly.
Footer Component: The <Footer /> component is rendered outside the <Routes> component, meaning it appears on every page of the application, providing consistent footer content.

Export: Finally, the App function is exported as the default export of the file, making it available for use in other parts of the application.

Overall, this code sets up the structure of a React application with navigation, routing, and rendering different components based on the URL. It creates a basic online shopping application with different pages for shopping, viewing products, managing a cart, and logging in/signing up.



*/




