import React, {useState} from "react";


const Navbar = () => {

 const [navLinkOpen, navLinkToggle] = useState(false)
 
const handleNavLinksToggle = () => {
    navLinkToggle(!navLinkOpen);
};
const renderClasses = () => {
    let classes = "navlinks";

    if (navLinkOpen) {
        classes += " active"
    }
    return classes;
}

    return <nav>
        <div className="logo">
            <h4>George Wise</h4>
        </div>
        <ul className={renderClasses()}>
            <li className="link"><a href="#">About</a></li>
            <li className="link"><a href="#">Portfolio</a></li>
            <li className="link"><a href="#">Contact</a></li>            
        </ul>
        <div onClick={handleNavLinksToggle} className="hamburger-toggle">
            <i className=" fas fa-bars fa-lg"></i>
        </div>
    </nav>

}

export default Navbar;