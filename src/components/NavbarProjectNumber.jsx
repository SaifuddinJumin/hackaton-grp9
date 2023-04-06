const NavbarProjectNumber = (props) => {
    const { catId } = props.data;

    return (
        <div>
            <a class="dropdown-item" href="#">Project { catId }</a>
        </div>
    )
}
export default NavbarProjectNumber;