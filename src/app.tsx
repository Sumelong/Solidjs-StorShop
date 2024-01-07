// @refresh reload
import { MetaProvider, Title } from "@solidjs/meta";
import {Route, Router} from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense } from "solid-js";
import "./app.css";
import Header from "~/components/Header";
import Home from "~/routes";
import About from "~/routes/about";
import Carts from "~/routes/carts";
import Login from "~/routes/login";
import Help from "~/routes/help";
import ProductDetail from "~/routes/productDetail";
import NotFound from "~/routes/[...404]";
import {CartContextProvider} from "~/Context/CartContext";

export default function App() {
  return (
      <CartContextProvider>
        <Router root={(props) => (
        <MetaProvider>
            <Title>Easy School Assistant - School Management and Administration Assistant</Title>
            <Header/>
            <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}>
            {/*<CartContextProvider>*/}
            {/* <FileRoutes />*/}
            <Route path="/" component={Home}/>
            <Route path="**" component={NotFound}/>
            <Route path="/about" component={About}/>
            <Route path="/help" component={Help}/>
            <Route path="/login" component={Login}/>
            <Route path="/carts" component={Carts}/>
            <Route path="/product/:id" component={ProductDetail}/>
            {/*</CartContextProvider>*/}
        </Router>
      </CartContextProvider>
  );
}
