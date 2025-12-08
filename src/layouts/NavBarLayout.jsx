/*
 * Copyright (c) 2024 [Ali Rasouli]. All Rights Reserved.
 * This code is proprietary and confidential. Unauthorized use is prohibited.
 */

import {NavLink, Outlet} from "react-router-dom";
import "./NavBarLayout.css";
import { Pages } from "../data/pages";

export default function NavBarLayout() {
  return (
    <div className="NavBarLayout">
      <header>
        <nav>
            <NavLink to="/">Home</NavLink>
            {Pages.map(page => (
              <NavLink to={`/${page.title.toLowerCase()}`} key={page.title}>
                {page.title}
              </NavLink>
            ))}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
