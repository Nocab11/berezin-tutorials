import React from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";


import { Article } from "./components/Article";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Footer } from "./components/Footer";
import { Header}  from "./components/Header";

// const Router = ({ path, children, exact }) => {
//
//     const { pathname } = window.location;
//
//     console.log('path', path)
//
//     if (exact) {
//         if (pathname === path) {
//             return children;
//         }
//     } else {
//         if (pathname.includes(path)) {
//             return children;
//         }
//     }
//
//     return null;
//
// }

const ProtectedRoute = ({ path, children }) => {
    const token = window.localStorage.getItem('token');

    console.log(token)

    return (
        <Routes>
            <Route path={path} render={() => {
                if (token) {
                    return children;
                } else {
                    return <Navigate to="/404" />
                }
            }}
            />;
        </Routes>

    )
}

const App = () => {

    const { pathname } = window.location;

    const postArray = pathname.split('/');

    const postId = postArray[postArray.length - 1];

    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post/:id" element={<Article id={postId} />} exact />
                <Route path="/about" element={<About />} />
                <Route path="/test" element={<h1>Test post</h1>} />
                <Route path ="/profile" element={<ProtectedRoute path="/profile"><h2>Это защищенная страница</h2></ProtectedRoute>} />

                <Route path="*" element={<h1 style={{ textAlign: 'center'}}>Страница отсутствует</h1>} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;