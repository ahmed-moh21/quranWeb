import "./navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../Assert/logo.png";
import DarkMode from "../Darkbutton/dark";

function NavBar() {

    const handilClick = () => {
        let myNav = document.getElementById("mynav");
        myNav.classList.toggle("navbar-nav-scroll-play")
    }
    return (
        <Navbar className='page-nav' expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img className="logo" src={Logo} alt="" />
                  {/*   <DarkMode /> */}
                </Navbar.Brand>
                <button
                    onClick={handilClick}
                    type="button" aria-label="Toggle navigation" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>
                <Navbar.Collapse >
                    <Nav
                        id="mynav"
                        className="me-auto my-3 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <div className="nav-con">
                            <Nav.Link > الصفحة الرئيسية</Nav.Link>
                            <span className="f-nav"></span>
                        </div>

                        <div className="nav-con">
                            <Nav.Link href="#ahadeyth"> أحاديث</Nav.Link>
                            <span className="l-nav"></span>
                        </div>

                        <div className="nav-con">
                            <Nav.Link href="#muhadarat" > محاضرات </Nav.Link>
                            <span className="l-nav"></span>
                        </div>

                        <div className="nav-con">
                            <Nav.Link href="#quranSec" > الْقُرْآن الْكَرِيْم </Nav.Link>
                            <span className="s-nav"></span>
                        </div>

                        <div className="nav-con">
                            <Nav.Link href="#qisas" >  القصص </Nav.Link>
                            <span className="l-nav"></span>
                        </div>

                        <div className="nav-con">
                            <Nav.Link href="#aladhan" > أوقات الصلاة</Nav.Link>
                            <span className="s-nav"></span>
                        </div>
                        <div className="nav-con">
                            <Nav.Link href="#fotter" > تواصل معنا </Nav.Link>
                            <span className="l-nav"></span>
                        </div>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;