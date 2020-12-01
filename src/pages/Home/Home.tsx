import React from "react";
import { Link } from "react-router-dom";
import { MotionWrapper } from "../../shared/Motion/Motion";
import "../../shared/Motion/Motion.css";

export const Home = () => (
  <MotionWrapper className="HomeMotion">
    <span data-testid="Home">San-Kanban</span>
    <Link to="/kanban">
      <button>View Boards</button>
    </Link>
  </MotionWrapper>
);
