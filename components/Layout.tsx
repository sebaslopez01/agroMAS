import NavBar from "./navigation/NavBar";
import Footer from "./navigation/Footer";
import marketplace from "@/pages/marketplace";

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