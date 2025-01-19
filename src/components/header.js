export const Header = () => {
    return(
        <div className = "header">
            <div className="header__title-container">
                <h2 className="header__title">Be Bold</h2>
                <span className="header__text">BEAUTY STORE</span>
            </div>
            <Navbar/>
            <div className="header__icon-box">
                <i className="fa-solid fa-user"></i>
                <i className="fa-solid fa-bag-shopping"></i>
            </div>
        </div>
    )
}


const Navbar = () => {
    return (
        <div className="navbar">
            <a className="navbar__link" href="#">SHOP ALL</a>
            <a className="navbar__link" href="#">MAKEUP</a>
            <a className="navbar__link" href="#">SKIN CARE</a>
            <a className="navbar__link" href="#">HAIR CARE</a>
            <a className="navbar__link" href="#">ABOUT</a>
            <a className="navbar__link" href="#">CONTACT</a>
        </div>
    )
}