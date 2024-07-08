import { useState } from "react";
import logo from "/logo.svg";
import { encrypt } from "./utils";
import "./App.css";

function App() {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <div>
        <a href="https://sbergraduate.ru/" target="_blank">
          <img src={logo} className="logo" alt="Sber logo" />
        </a>
      </div>
      <h1>Sber Ural Code</h1>
      {/* TODO: Заголовок, которые отображается по условию */}
      {showAnswer && (
        <>
          <span>Ответ на контрольный вопрос:</span>
          <h3 className="answer">
            {encrypt("QW5zd2VyIHRvIHNlY3VyaXR5IHF1ZXN0aW9u")}
          </h3>
        </>
      )}
      <div className="card">
        <button
          onClick={() => {
            // TODO: Добавить обработчик, изменяющий состояние showAnswer
          }}
        >
          получить ответ
        </button>
        <p>
          Отредактируйте <code>src/App.jsx</code> и нажмите кнопку, <br />
          чтобы получить ответ на контрольный вопрос
        </p>
      </div>
      <p className="read-the-docs">Нажмите на логотип, чтобы узнать о Сбере</p>
    </>
  );
}

export default App;
