/*
 * Copyright (c) 2024 [Ali Rasouli]. All Rights Reserved.
 * This code is proprietary and confidential. Unauthorized use is prohibited.
 */

import { useParams } from "react-router-dom";
import "./ContentPage.css";
import NavigateBackButton from "../components/NavigateBackButton";
import { Pages } from "../data/pages";

export default function ContentPage() {
  const { id } = useParams();
  const page = Pages.find(p => p.title.toLowerCase() === id);

  if (!page) return <h2 style={{ textAlign: "center", marginTop: "3rem" }}>Page not found</h2>;

  return (
    <div className="ContentPage">
      <h2>{page.title}</h2>
      <p>{page.body}</p>
      <NavigateBackButton />
    </div>
  );
}

