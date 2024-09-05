import React, {useState} from "react";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

function Form({name, yes, no}) {
    const [formData, setFormData] = useState({
      name: "",
      attendance: "Приду",
    });
  
    const token = "7258038150:AAGvJ_Bjm7j283-m_C3YC14IPUgBiDo3J4I";
    const chat_id = "@modalithink";
    const API = `https://api.telegram.org/bot${token}/sendMessage`;
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const { name, attendance } = formData;
      const text = `ФИО: ${name} \n${attendance}`;
  
      await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chat_id,
          text,
        }),
      });
  
      // Optionally, reset the form or give feedback to the user
      setFormData({ name: "", attendance: "Приду" });
      alertify.alert('Опрос',"Спасибо за ответ", function () {
        alertify.success('Отправилось');
      });
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl text-[#3d251e]">Опрос</h2>
          <div className="inputs">
            <input
              required
              type="text"
              name="name"
              placeholder={name}
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="radios text-[#3d251e]">
            <div className="choice">
              <label htmlFor="yes">
                <p>{yes}</p>
              </label>
              <input
                type="radio"
                name="attendance"
                id="yes"
                value="Приду"
                checked={formData.attendance === "Приду"}
                onChange={handleChange}
              />
            </div>
            <div className="choice">
              <label htmlFor="no">
                <p>{no}</p>
              </label>
              <input
                type="radio"
                name="attendance"
                id="no"
                value="Не приду"
                checked={formData.attendance === "Не приду"}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className="bg-[#3d251e] p-4">Отправить</button>
        </form>
      </div>
    );
  }
  
export default Form;
