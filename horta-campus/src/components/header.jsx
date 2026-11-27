import { Route } from "react-router";

<header>
    <nav> 
        <link to="/">Home</link>
        <link to="/registro">Registro</link>
    </nav>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
    </Routes>
</header>   