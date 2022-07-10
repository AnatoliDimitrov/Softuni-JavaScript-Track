import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MobileMenu } from "./components/MobileMenu";
import { Ind } from "./components/Ind";
import { Test } from "./components/Test";
import { IndexList } from "./components/IndexList";

function App() {
    return (
        <div>

            <Header />
            <MobileMenu />

            <Test />
            <IndexList />

            <Footer />
        </div>
  );
}

export default App;
