import React from "react";
import { Home } from "./pages/kanban/Kanban";
import { Landing } from "./pages/home/Home";
import { Layout } from "./shared/layout/Layout";
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";


export const App = () => (
  <Layout>
    <Switch>
      <Route path="/kanban" component={Home} />
      <Route path="/" component={Landing} />
    </Switch>
  </Layout>
);
