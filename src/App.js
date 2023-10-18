import React from "react";
import "./styles.css";
import Card from "./components/Card";
import Title from "./components/Title";
import { USERS } from "./db";

export default function App() {
  return (
    <main className="app">
      <Title text="ClientBoard" />
      {USERS.map(({ id, name, roles, about }) => (
        <div className="app__card-grid" key={id}>
          <Card name={name} roles={roles} about={about} />
        </div>
      ))}
    </main>
  );
}
