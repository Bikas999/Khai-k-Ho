import Header from './components/header/Header.component';
import Sidebar from './components/sidebar/Sidebar.component';
import Items from './components/items/Items.component';
import EditProduct from './components/editProduct/EditProduct.component';

import {
  Routes,
  Route,
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Items />} />
          <Route path="/edit" element={<EditProduct />} />

        </Routes>


      </div>


    </div>
  );
}

export default App;
