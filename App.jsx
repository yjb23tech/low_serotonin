import { createRoot } from "react-dom/client";
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"

const App = () => {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />)


