import NavBar from "./NavBar";
import Footer from "./Footer";

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