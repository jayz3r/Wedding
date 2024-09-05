import React, { useState, useEffect } from "react";
import Calendar from "../components/Calendar";
import Form from "../components/Form";
import Text from "../components/Text";

const Rus = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2024-09-29T00:00:00");
    const updateTimer = () => {
      const now = new Date();
      const timeDifference = weddingDate - now;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    const timerId = setInterval(updateTimer, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="background">
      <div className="wrapper">
        <header>
          <h1 className="text-[5.5rem]">Санжар & Айсенем</h1>
        </header>
        <div className="mainSection rusk">
          <h2>Опрос</h2>
          <span className="text-8xl  bottom-0 right-0 text-white ">&#8595;</span>
        </div>
      </div>
      <Text
        text={
          "Уважаемые гости, мы будем рады вас видеть на нашем торжественном мероприятии в честь рождения новой семьи"
        }
        names={"Санжара и Айсенем"}
      />
      <div className="flex flex-col text-center text-3xl items-center">
        <p>
          Ресторан <br /> <span className="text-4xl">"ATA BANQUET HALL"</span>{" "}
        </p>
        <p>Дата: 29.09.2024</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23411.27910861405!2d74.6051870743164!3d42.821954800000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb5000ae91b19%3A0xec99eb7d6b51aff5!2z0JDRgtCwINCx0LDQvdC60LXRgtC90YvQuSDQt9Cw0Ls!5e0!3m2!1sru!2skg!4v1721111315004!5m2!1sru!2skg"
          width="600"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>
      </div>
      <Calendar />

      <div className="timer">
        <h2 className="text-3xl">Начало свадьбы:</h2>
        <h2 className="text-5xl">17:00</h2>
        <h2 className="text-3xl mt-12">До начала свадьбы осталось</h2>
        <div className="time">
          <div className="days">
            <h3 id="days">{timeLeft.days}</h3>
            <small>Дней</small>
          </div>
          <span>|</span>
          <div className="hours">
            <h3 id="hours">{timeLeft.hours}</h3>
            <small>Часов</small>
          </div>
          <span>|</span>
          <div className="minutes">
            <h3 id="minutes">{timeLeft.minutes}</h3>
            <small>Минут</small>
          </div>
          <span>|</span>
          <div className="seconds">
            <h3 id="seconds">{timeLeft.seconds}</h3>
            <small>Секунд</small>
          </div>
        </div>
      </div>
      <div className="surveySection">
        <Form name={"ФИО"} yes={"Приду"} no={"Не приду"} />
      </div>
      <footer>
        <h2>По всем вопросам обращаться по номеру: +996 557 216 721</h2>
      </footer>
    </div>
  );
};

export default Rus;
