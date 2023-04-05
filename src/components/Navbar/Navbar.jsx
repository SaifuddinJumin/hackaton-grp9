import Chat from "../Chat";
import "./Navbar.css";

const Navbar = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">ProCrass</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            Profile
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">My Profile</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-light bg-danger" href="#">Logout</a>
                        </div>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            Projects
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Projects Page</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Project 1</a>
                            <a class="dropdown-item" href="#">Project 2</a>
                            <a class="dropdown-item" href="#">Project 3</a>
                        </div>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            Chat
                        </a>
                        <div class="dropdown-menu">
                            <Chat />
                        </div>
                    </li>

                    {/* <li class="nav-item ">
                        <a class="nav-link" href="#">Chat <span class="sr-only">(current)</span></a>
                    </li> */}

                </ul>

            </div>
        </nav>
    )
}
export default Navbar;