/*
 * Copyright (c) 2024 [Ali Rasouli]. All Rights Reserved.
 * This code is proprietary and confidential. Unauthorized use is prohibited.
 */

import { useNavigate } from "react-router-dom";
import "./NavigateBackButton.css";

export default function NavigateBackButton() {
  const navigate = useNavigate();

  return (
    <div className="NavigateBackButton">
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}
