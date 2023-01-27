import './App.css';
import Shop from './components/Shop';
import {useState,useEffect} from 'react';

function App() {
    const [products,setProducts] = useState([]);
    const loadProducts=(query)=>{
        fetch('https://dummyjson.com/products/search?q='+query)
            .then(res=>res.json())
            .then(data=>{setProducts(data.products)})
    }
    useEffect(()=>{
        loadProducts('')
    },[]);

    return (
        <div>
            <Shop products={products} loadProducts={loadProducts}/>
        </div>
    );
}

export default App;
