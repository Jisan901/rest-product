import './App.css';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Main from './layouts/Main';
import Home from './components/Home';
import {useState,useEffect} from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

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

    const routes = createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                path:'/shop',
                element:<Shop products={products} loadProducts={loadProducts}/>
            }
            ]
        },
        {
            path:'/cart',
            element:<Cart />
        }
        ]);

    return (
        <div>
            <RouterProvider router={routes}/>
        </div>
    );
}

export default App;
