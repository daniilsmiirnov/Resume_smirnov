import React, { useState } from "react";
import "./App.css";

function App() {
  const [feedbackMessage, setFeedbackMessage] = useState(""); // Сообщение для отправки отклика
  const [responseMessage, setResponseMessage] = useState(""); // Ответ от сервера

  const personalInfo = {
    name: "Смирнов Даниил Иванович",
    contact: {
      phone: "+7 (923) 3770072",
      email: "dan_smirnov@mail.ru",
      tg: "@donateelloo",
      city: "Москва",
    },
    about: "Мне 22 года, родом из Красноярска, учусь и живу в Москве. В свободное время играю в футбол, являюсь игроком сборной Москвы и юниорской сборной России по футболу. Также занимаюсь дзюдо и имею первый взрослый по плаванию. Люблю путешествовать и снимать на пленочный фотоаппарат.",
  };

  const handleFeedbackSubmit = () => {
    // Отправка POST-запроса на сервер
    fetch("http://localhost:9000/api/resume/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain", // Указываем, что отправляем текст
      },
      body: feedbackMessage, // Отправляемое сообщение
    })
      .then((response) => response.text())
      .then((data) => {
        setResponseMessage(data); // Устанавливаем ответ от сервера
        setFeedbackMessage(""); // Очищаем поле ввода
      })
      .catch((error) => {
        console.error("Ошибка отправки отклика:", error);
        setResponseMessage("Ошибка отправки отклика.");
      });
  };

  return (
    <div className="App" style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>{personalInfo.name}</h1>
      <p><strong>Город:</strong> {personalInfo.contact.city}</p>
      <p><strong>Телефон:</strong> {personalInfo.contact.phone}</p>
      <p><strong>Email:</strong> {personalInfo.contact.email}</p>
      <p><strong>Telegram:</strong> {personalInfo.contact.tg}</p>
      <h2>Обо мне</h2>
      <p>{personalInfo.about}</p>

      <h2>Отправить отклик</h2>
      <textarea
        value={feedbackMessage}
        onChange={(e) => setFeedbackMessage(e.target.value)}
        placeholder="Введите текст отклика"
        style={{ width: "100%", height: "100px", marginBottom: "10px" }}
      />
      <button onClick={handleFeedbackSubmit} style={{ padding: "10px 20px", cursor: "pointer" }}>
        Отправить отклик
      </button>
      {responseMessage && <p style={{ marginTop: "10px" }}>{responseMessage}</p>}
    </div>
  );
}

export default App;
