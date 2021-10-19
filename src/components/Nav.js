import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({libraryStatus, setLibraryStatus}) => {

    return (
        <nav>
            <h2>My Spotify</h2>
            <button className={libraryStatus ? "library-active" : ""} onClick={() => setLibraryStatus(!libraryStatus) }>
                Library
                <FontAwesomeIcon className="lib-icon" icon={faMusic} />
            </button>
        </nav>
    )
}

export default Nav
