import {Link} from "react-router-dom";


function Home() {
    return (
    <section className="theme-dark page home">
        
        <nav className="nav">
            <div className="user-info">
                <div className="image">
                    <img src="img/1.jpg" height="40" width="40" alt="avatar" />
                </div>
                <span><span className="color-violet-lt">Hi,</span> User</span>
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
            <a href="/" className="notification">
                <ion-icon name="notifications"></ion-icon>
            </a>
        </nav>
        <h1>Good Product <br />Waiting!</h1>
        <div className="search">
            <ion-icon name="search-outline"></ion-icon>
            <input type="search" name="search" id="search" placeholder="search product"/>
        </div>
        <div className="fancy-banner">
            <span>Events <span className="color-violet-lt">and</span> Offer's!</span>
            <div className="slider">
                <div className="item">
                    <a href="/">
                        <img src="img/b2.jpg" alt="Event"/>
                    </a>
                </div>
                <div className="item">
                    <a href="/">
                        <img src="img/b1.jpg" alt="Event"/>
                    </a>
                </div>
                <div className="item">
                    <a href="/">
                        <img src="img/b3.jpg" alt="Event"/>
                    </a>
                </div>
                <div className="item active">
                    <a href="/">
                        <img src="img/b4.jpg" alt="Event"/>
                    </a>
                </div>
            </div>
        </div>
        <div className="store-1 more">
            <span><span className="color-violet-lt">Popular </span> products</span>
            <div className="products-1">
                <div>
                <div className="product">
                    <div className="thumb">
                        <div className="image"><img src="img/pl1.jpg" alt=""/></div>
                        <a href="/" className="box-ico"><ion-icon name="lock-closed"></ion-icon></a>
                    </div>
                    <a className="text-content" href="/">
                        <span>Gaming rgb headphone</span>
                        <div><small>sports and Gaming</small><span>$31</span></div>
                    </a>
                </div>
                </div>
                <div>
                <div className="product">
                    <div className="thumb">
                        <div className="image"><img src="img/pl1.jpg" alt=""/></div>
                        <a href="/" className="box-ico"><ion-icon name="lock-closed"></ion-icon></a>
                    </div>
                    <a className="text-content" href="/">
                        <span>Gaming rgb headphone</span>
                        <div><small>sports and Gaming</small><span>$31</span></div>
                    </a>
                </div>
                </div>
                <div>
                <div className="product">
                    <div className="thumb">
                        <div className="image"><img src="img/pl1.jpg" alt=""/></div>
                        <a href="/" className="box-ico"><ion-icon name="lock-closed"></ion-icon></a>
                    </div>
                    <a className="text-content" href="/">
                        <span>Gaming rgb headphone</span>
                        <div><small>sports and Gaming</small><span>$31</span></div>
                    </a>
                </div>
                </div>
                <div>
                <div className="product">
                    <div className="thumb">
                        <div className="image"><img src="img/pl1.jpg" alt=""/></div>
                        <a href="/" className="box-ico"><ion-icon name="lock-closed"></ion-icon></a>
                    </div>
                    <a className="text-content" href="/">
                        <span>Gaming rgb headphone</span>
                        <div><small>sports and Gaming</small><span>$31</span></div>
                    </a>
                </div>
                </div>
            </div>
        </div>
        <div className="store-1">
            <span><span className="color-violet-lt">Recommended</span></span>
            <div className="products-2">
                <div>
                    <div>
                        
                <div className="product">
                    <div className="thumb">
                        <img src="img/pl1.jpg" alt=""/>
                    </div>
                    <a href="/" className="text-content">
                        <span>Gameing keybord v22 s6</span>
                        <div><small>sports</small><span>$31</span></div>
                    </a>
                    <a href="/" className="box-ico">
                        <ion-icon name="lock-closed"></ion-icon>
                    </a>
                </div>
                    </div>
                    <div>
                        
                <div className="product">
                    <div className="thumb">
                        <img src="img/pl1.jpg" alt=""/>
                    </div>
                    <a href="/" className="text-content">
                        <span>Gameing keybord v22 s6</span>
                        <div><small>sports</small><span>$31</span></div>
                    </a>
                    <a href="/" className="box-ico">
                        <ion-icon name="lock-closed"></ion-icon>
                    </a>
                </div>
                    </div>
                    <div>
                        
                <div className="product">
                    <div className="thumb">
                        <img src="img/pl1.jpg" alt=""/>
                    </div>
                    <a href="/" className="text-content">
                        <span>Gameing keybord v22 s6</span>
                        <div><small>sports</small><span>$31</span></div>
                    </a>
                    <a href="/" className="box-ico">
                        <ion-icon name="lock-closed"></ion-icon>
                    </a>
                </div>
                    </div>
                    <div>
                        
                <div className="product">
                    <div className="thumb">
                        <img src="img/pl1.jpg" alt=""/>
                    </div>
                    <a href="/" className="text-content">
                        <span>Gameing keybord v22 s6</span>
                        <div><small>sports</small><span>$31</span></div>
                    </a>
                    <a href="/" className="box-ico">
                        <ion-icon name="lock-closed"></ion-icon>
                    </a>
                </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="store-1 more more1">
            <span><span className="color-violet-lt">More</span> products</span>
            <div className="products-1">
                <div>
                <div className="product">
                    <div className="thumb">
                        <div className="image"><img src="img/pl1.jpg" alt=""/></div>
                        <a href="/" className="box-ico"><ion-icon name="lock-closed"></ion-icon></a>
                    </div>
                    <a className="text-content" href="/">
                        <span>Gaming rgb headphone</span>
                        <div><small>sports and Gaming</small><span>$31</span></div>
                    </a>
                </div>
                </div>
                <div>
                <div className="product">
                    <div className="thumb">
                        <div className="image"><img src="img/pl1.jpg" alt=""/></div>
                        <a href="/" className="box-ico"><ion-icon name="lock-closed"></ion-icon></a>
                    </div>
                    <a className="text-content" href="/">
                        <span>Gaming rgb headphone</span>
                        <div><small>sports and Gaming</small><span>$31</span></div>
                    </a>
                </div>
                </div>
                <div>
                <div className="product">
                    <div className="thumb">
                        <div className="image"><img src="img/pl1.jpg" alt=""/></div>
                        <a href="/" className="box-ico"><ion-icon name="lock-closed"></ion-icon></a>
                    </div>
                    <a className="text-content" href="/">
                        <span>Gaming rgb headphone</span>
                        <div><small>sports and Gaming</small><span>$31</span></div>
                    </a>
                </div>
                </div>
                <div>
                <div className="product">
                    <div className="thumb">
                        <div className="image"><img src="img/pl1.jpg" alt=""/></div>
                        <a href="/" className="box-ico"><ion-icon name="lock-closed"></ion-icon></a>
                    </div>
                    <a className="text-content" href="/">
                        <span>Gaming rgb headphone</span>
                        <div><small>sports and Gaming</small><span>$31</span></div>
                    </a>
                </div>
                </div>
            </div>
        </div>
    </section>

    )
}

export default Home;