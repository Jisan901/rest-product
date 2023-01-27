function Product({product}) {
    const {title,price,thumbnail,discountPercentage,rating}=product;
    const rate = Math.round(rating);
    const remain = 5-rate;
    return (
            <div className="product">
                <div className="state">
                    <span className="discount on">{discountPercentage}% off</span>
                    <ion-icon name="heart"></ion-icon>
                </div>
                <div className="thumb">
                    <img src={thumbnail} alt="thumbnail" />
                </div>
                <div className="text-content">
                    <a href="/">{title}</a>
                    <div className="prices">
                        <div className="price">
                            <span className="price-r"><small>$</small>{price}</span>
                            <div className="stars rating-star" datarating="2">
                                {
                                    [...Array(rate).keys()].map(index => <ion-icon name="star" key={index}></ion-icon>)}
                            {
                                    [...Array(remain).keys()].map(index => <ion-icon name="star" key={index} class="off"></ion-icon>)
                                }
                            </div>
                        </div>
                        <a href="/" className="box-ico round"><ion-icon name="add"></ion-icon></a>
                    </div>
                </div>
            </div>
    )
}

export default Product;