import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container">
                    <a className="navbar-brand fw-bold" href="#">Paymentku</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto">
                            <a className="nav-link mx-2" href="#">Features</a>
                            <li className="nav-item mx-2 dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Transaction</a></li>
                                    <li><a className="dropdown-item" href="#">Payment Record</a></li>
                                    <li><a className="dropdown-item" href="#">Swap Wallets</a></li>
                                </ul>
                            </li>
                            <a className="nav-link mx-2" href="#">Pricing</a>
                            <a className="nav-link mx-2" href="#">Blogs</a>
                        </div>
                        <div className="">
                            <button className="btn register btn-primary btn-md fw-bold" href="#">Register</button>
                            <button className="btn login btn-outline-primary btn-md fw-bold" href="#">Login</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar