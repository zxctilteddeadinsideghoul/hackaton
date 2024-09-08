import {useState} from "react";
import logo from "/logo.svg";
import {decodeROT13} from "./utils";
import "./App.css";

function App() {
    const [showAnswer] = useState(false);
    const [value] = useState('');

    return (
        <>
            <div>
                <a href="https://sbergraduate.ru/" target="_blank">
                    <img src={logo} className="logo" alt="Sber logo"/>
                </a>
            </div>
            <h1>Sber Ural Code</h1>
            <input className="input" type="text"/>
            {showAnswer && (
                <>
                    <span>Ответ на контрольный вопрос:</span>
                    <h3 className="answer">
                        {decodeROT13(value)}
                    </h3>
                </>
            )}
            <div className="card">
                <button>
                    Декодировать
                </button>
                <p>
                    Отредактируйте <code>src/App.jsx</code> и нажмите кнопку, <br/>
                    чтобы получить ответ на контрольный вопрос
                </p>
            </div>
            <p className="read-the-docs">Нажмите на логотип, чтобы узнать о Сбере</p>
        </>
    );
}

export default App;
