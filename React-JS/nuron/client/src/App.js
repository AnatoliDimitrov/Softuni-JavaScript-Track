import { Routes, Route } from "react-router-dom";

import { AuthContext } from "./services/AuthContext";
import RouteGuard from "./components/common/RouteGuard";
import OwnerRouteGuard from "./components/common/OwnerRouteGuard";

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
import { EditProfile } from "./components/user/editProfile/EditProfile";
import { Error404 } from "./components/home/Error404";
import { Catalog } from "./components/catalog/Catalog";
import { MyCollection } from "./components/user/MyCollection";
import { Create } from "./components/product/create/Create";
import { Edit } from "./components/product/edit/Edit";
import { Details } from "./components/product/details/Details";
import { Delete } from "./components/product/delete/Delete";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Logout } from "./components/auth/Logout";
import { DeleteUser } from "./components/user/DeleteUser";
import GuestRouteGuard from "./components/common/GuestRouteGuard";

function App() {
    const [auth, setAuth] = useLocalStorage('nuronUser', {});

    const userAuth = (data) => {
        setAuth(data);
    };

    const userLogout = () => {
        setAuth({});
    };
    return (
        <AuthContext.Provider value={{ user: auth, userAuth, userLogout }}>
            <div>

                <Header />
                <MobileMenu />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/privacy" element={<Privacy />} />

                    <Route element={<GuestRouteGuard />}>
                        <Route path="/authentication/login" element={<Login />} />
                        <Route path="/authentication/register" element={<Register />} />
                    </Route>

                    <Route element={<RouteGuard />}>
                        <Route path="/user/edit-profile" element={<EditProfile />} />
                        <Route path="/user/my-collection" element={<MyCollection />} />
                        <Route path="/user/logout" element={<Logout />} />
                        <Route path="/user/delete-user" element={<DeleteUser />} />
                        <Route path="/product/create" element={<Create />} />
                        <Route path="/product/edit/:nftId" element={<Edit />} />
                        <Route path="/product/delete/:nftId" element={<Delete />} />
                    </Route>
                    
                    <Route path="/product/details/:nftId" element={<Details />} />
                    <Route path="/product/catalog" element={<Catalog />} />
                    <Route path="/*" element={<Error404 />} />
                </Routes>

                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
