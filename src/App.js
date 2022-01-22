import './App.css';
import Board from "./components/Board";
import React from "react";

const data = [
    {title: 'Сделать',
    items: [
        {
            id: 1,
            description: 'Сходить в тренажёрку',
        },
        {
            id: 2,
            description: 'Сходить в магазин',
        },
        {
            id: 3,
            description: 'Забрать Артёма из садика',
        }
    ]},
    {title: 'Сегодня',
    items: [
    {
        id: 4,
        description: 'Сделать задание по программированию',
    },
    {
        id: 5,
        description: 'Купить варочную панель',
    },
    ]}
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Board data = {data} />
      </header>
    </div>
  );
}

export default App;
