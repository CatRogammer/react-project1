import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
    return (
        <div>
            <Header />
            <main style={{ padding: "10px" }}>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
