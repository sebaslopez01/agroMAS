import NavBar from "./navigation/NavBar";
import Footer from "./navigation/Footer";

export default function Layout({ children }: any) {
    return (
        <>
            <div>
                <NavBar />
                <main>{children}</main>
                <Footer />
            </div>
        </>

    )
}