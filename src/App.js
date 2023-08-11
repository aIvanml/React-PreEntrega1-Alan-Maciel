import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import CartContainer from "./components/CartContainer/CartContainer";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <div className="Container">
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/product/:id" element={<ItemDetailContainer />} />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route path="/cart" element={<CartContainer />}/>
              <Route
                path="/contacto"
                element={<h1>Seccion en mantenimiento</h1>}
              />
              <Route path="*" element={<h1>Page not found: 404</h1>} />
            </Routes>
          </div>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
