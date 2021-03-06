import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/home/Home";
import { About } from "./components/home/about/About";
import { Contact } from "./components/home/contact/Contact";
import { Terms } from "./components/terms-and-privacy/Terms";
import { Privacy } from "./components/terms-and-privacy/Privacy";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { EditProfile } from "./components/user/EditProfile";
import { Error404 } from "./components/home/Error404";
import { Catalog } from "./components/catalog/Catalog";
import { MyCollection } from "./components/user/MyCollection";
import { Create } from "./components/product/create/Create";
import { Edit } from "./components/product/edit/Edit";
import { Details } from "./components/product/details/Details";

function App() {
    return (
        <div>

            <Header />
            <MobileMenu />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/authentication/login" element={<Login />} />
                <Route path="/authentication/register" element={<Register />} />
                <Route path="/user/edit-profile" element={<EditProfile />} />
                <Route path="/user/my-collection" element={<MyCollection />} />
                <Route path="/product/create" element={<Create />} />
                <Route path="/product/edit/:nftId" element={<Edit />} />
                <Route path="/product/details/:nftId" element={<Details />} />
                <Route path="/product/catalog" element={<Catalog />} />
                <Route path="/*" element={<Error404 />} />
            </Routes>

            <Footer />
        </div>
  );
}

export default App;
