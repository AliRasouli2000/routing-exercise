/*
 * Copyright (c) 2024 [Ali Rasouli]. All Rights Reserved.
 * This code is proprietary and confidential. Unauthorized use is prohibited.
 */

import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import NavBarLayout from './layouts/NavBarLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import ContentPage from './pages/ContentPage.jsx';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<NavBarLayout />}>
    <Route index element={<HomePage />} />
    <Route
          path=":id"
          element={<ContentPage />}
    />
  </Route>
));

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App


