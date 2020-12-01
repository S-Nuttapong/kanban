import React from "react";
import { Kanban } from "./pages/kanban/Kanban";
import { Home } from "./pages/home/Home";
import { Layout } from "./shared/layout/Layout";
import { Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";


export const App = () => (
  <Layout>
    <AnimatePresence>
      <Switch>
        <Route path="/kanban" component={Kanban} />
        <Route path="/" component={Home} />
      </Switch>
    </AnimatePresence>
  </Layout>
);
