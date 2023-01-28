import {Link} from "react-router-dom";

function Cart() {
    return (
        <section className="theme-light page">
        <div className="navigation">
            <Link to="/"><ion-icon name="arrow-back-outline"></ion-icon></Link>
            <span>My cart</span>
            <button><ion-icon name="cart-outline"></ion-icon></button>
        </div>
        <div>
            <br />
            <br />
            <br />
        </div>
        <div className="products-items">
            <div className="product">
                <button><ion-icon name="trash-outline"></ion-icon></button>
                <a href="/" className="thumb">
                    <img src="img/pl1.jpg" alt="" />
                </a>
                <div className="text-content">
                    <span>product name</span>
                    <span className="price"><small>$</small>100 <span className="bullet">29% off</span></span>
                </div>
                <div className="adjustment">
                    <button className="minus box-ico round"><ion-icon name="remove"></ion-icon></button>
                    <span>1</span>
                    <button className="plus box-ico round"><ion-icon name="add"></ion-icon></button>
                </div>
            </div>
            <div className="product">
                <a href="/" className="thumb">
                    <img src="img/pl1.jpg" alt="" />
                </a>
                <div className="text-content">
                    <span>product name</span>
                    <span className="price"><small>$</small>100 <span className="bullet">29% off</span></span>
                </div>
                <div className="adjustment">
                    <button className="minus box-ico round"><ion-icon name="remove"></ion-icon></button>
                    <span>1</span>
                    <button className="plus box-ico round"><ion-icon name="add"></ion-icon></button>
                </div>
            </div>
            <div className="product">
                <a href="/" className="thumb">
                    <img src="img/pl1.jpg" alt="" />
                </a>
                <div className="text-content">
                    <span>product name</span>
                    <span className="price"><small>$</small>100 <span className="bullet">29% off</span></span>
                </div>
                <div className="adjustment">
                    <button className="minus box-ico round"><ion-icon name="remove"></ion-icon></button>
                    <span>1</span>
                    <button className="plus box-ico round"><ion-icon name="add"></ion-icon></button>
                </div>
            </div>
            <div className="product">
                <a href="/" className="thumb">
                    <img src="img/pl1.jpg" alt="" />
                </a>
                <div className="text-content">
                    <span>product name</span>
                    <span className="price"><small>$</small>100 <span className="bullet">29% off</span></span>
                </div>
                <div className="adjustment">
                    <button className="minus box-ico round"><ion-icon name="remove"></ion-icon></button>
                    <span>1</span>
                    <button className="plus box-ico round"><ion-icon name="add"></ion-icon></button>
                </div>
            </div>
            <div className="product">
                <a href="/" className="thumb">
                    <img src="img/pl1.jpg" alt="" />
                </a>
                <div className="text-content">
                    <span>product name</span>
                    <span className="price"><small>$</small>100 <span className="bullet">29% off</span></span>
                </div>
                <div className="adjustment">
                    <button className="minus box-ico round"><ion-icon name="remove"></ion-icon></button>
                    <span>1</span>
                    <button className="plus box-ico round"><ion-icon name="add"></ion-icon></button>
                </div>
            </div>
        </div>
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
        <div className="transaction">
            <div className="top">
                <span>subtotal: $<span>1300</span></span>
                <span>discount: $<span>100</span></span>
            </div>
            <div className="bottom">
                <span>$<span>1200</span></span>
                <a href="/" className="box-ico">complete order</a>
            </div>
        </div>
    </section>

    )
}

export default Cart;