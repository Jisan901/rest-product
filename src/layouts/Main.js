import {Outlet,Link} from "react-router-dom";

function Main() {
    return (
        <div>
            <div className="home-manu">
            <div className="iocn">
                <Link to="/"><ion-icon className="active" name="home"></ion-icon></Link>
            </div>
            <div className="iocn">
                <Link to="/shop"><ion-icon name="grid"></ion-icon></Link>
            </div>
            <div className="iocn">
                <Link to="/"><ion-icon name="person"></ion-icon></Link>
            </div>
        </div>

            <Outlet/>
        </div>
    );
}

export default Main;
