function Menu() {
    const links = ["Home", "Courses", "About", "Contact"];

    return (
        <nav>
            <ul style={{ display: "flex", listStyle: "none", gap: "18px" }}>
                {links.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;
