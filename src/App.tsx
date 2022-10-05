import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Helmet, HelmetProvider } from "react-helmet-async";

export const App = () => {
  return (
    <HelmetProvider>
      {/* Meta Tags */}
      <Helmet>
        {/* Basic SEO Tags */}
        <title>Treely - Pantelis Theodosiou</title>
        <meta name="description" content="Simply drag and drop one of your XML files into Treely, and it will automatically become a TreeView that you can use to access your data quickly and easily." />
        <link rel="canonical" href="https://thpadelis.github.io/treely" />
        <meta name="keywords" content="react, react redux, react router, web development" />
        {/* Twitter-related Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={process.env.PUBLIC_URL + '/treely.jpg'} />
        <meta name="twitter:title" content="Treely - Preview any XML file to a TreeView fast and easy" />
        <meta name="twitter:creator" content="@ThPadelis" />
        <meta name="twitter:site" content="@ThPadelis" />
        <meta name="twitter:description" content="Simply drag and drop one of your XML files into Treely, and it will automatically become a TreeView that you can use to access your data quickly and easily." />
        {/* Facebook-related Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thpadelis.github.io/treely" />
        <meta property="og:title" content="Treely - Preview any XML file to a TreeView fast and easy" />
        <meta property="og:description" content="Simply drag and drop one of your XML files into Treely, and it will automatically become a TreeView that you can use to access your data quickly and easily." />
        <meta property="og:image" content={process.env.PUBLIC_URL + '/treely.jpg'} />
      </Helmet>
      <div className='min-h-screen bg-slate-50'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </HelmetProvider >
  );
}
