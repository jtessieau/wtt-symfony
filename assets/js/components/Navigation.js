import React from "react"
import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={(nav) =>
                            "nav-link" + (nav.isActive ? " nav-active" : "")
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/register"
                        className={(nav) =>
                            "nav-link" + (nav.isActive ? " nav-active" : "")
                        }
                    >
                        Register
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/login"
                        className={(nav) =>
                            "nav-link" + (nav.isActive ? " nav-active" : "")
                        }
                    >
                        Login
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navigation
