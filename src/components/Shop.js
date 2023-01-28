import Product from './Product';
import {useState} from 'react';
import {Link} from "react-router-dom";

function Shop({products,loadProducts}) {
    const [searchQuery,setSearchQuery]=useState('');
    function searchHandler(e){
        if (e.key==='Enter') {
            loadProducts(e.target.value.toLowerCase())
            setSearchQuery(e.target.value)
        }
    }
    return(
        <section className="page theme-dark">
        <nav className="nav">
            <a href="/" className="notification">
                <ion-icon name="grid"></ion-icon>
            </a>
            <div className="user-info">
                <div className="image">
                    <img src="img/1.jpg" height="40" width="40" alt="avatar" />
                </div>
                <span></span>
                <div className="drop-down">
                    <div className="item">
                        <a href="/"><ion-icon name="person-outline"></ion-icon></a>
                    </div>
                    <div className="item">
                        <Link to="/cart"><ion-icon name="cart-outline"></ion-icon></Link>
                    </div>
                    <div className="item">
                        <a href="/"><ion-icon name="settings-outline"></ion-icon></a>
                    </div>
                    <div className="item">
                        <a href="/"><ion-icon name="power-outline"></ion-icon></a>
                    </div>
                </div>
            </div>
        </nav>
        <div className="search rev">
            <ion-icon name="search-outline"></ion-icon>
            <input onKeyUp={searchHandler} type="search" name="search" id="search" placeholder="search product"/>
        </div>
        <div className="filter">
            <h3>Search by{': '+searchQuery}</h3>
            <div className="custom-select">
                <div className="top">
                    <span>Sort by</span>
                    <ion-icon name="caret-down-outline"></ion-icon>
                </div>
                <div className="bottom">
                    <button>A-Z</button>
                    <button>Z-A</button>
                    <button>low - high</button>
                    <button>high - low</button>
                </div>
            </div>
        </div>
        
        <div className="products-m">
            {
                products.length>0?products.map((product,idx)=><Product product={product} key={idx}/>) :"no product found"
            }
        </div>
        <div>
            <br />
            <br />
            <br />
        </div>
    </section>
    );
}

export default Shop;