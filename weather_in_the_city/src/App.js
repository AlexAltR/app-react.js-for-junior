import React from "react"; // Импортируем React из библиотеки react
import Info from "./components/info"; // Импортируем класс Info из файла info.js
import Form from "./components/form"; // Импортируем класс Form из файла form.js
import Weather from "./components/weather_info"; // Импортируем класс Weather из файла weather.js

const API_KEY = "a0ec0b4fd3e3e3eff8952287564ef9ae";

class App extends React.Component { // Создаем класс App, который унаследует все от React.Component

  gettingWeather = async (e) => { 
    e.preventDefault(); // Переменная 'e' служит для отслеживания различных событий // Уничтожаем поведение страницы по умолчанию (убираем перезагрузку стриницы при нажатиии на кнопку)
    const city = e.target.elements.city.value; // Обращаемся к e . обращаемся к объекту Form .  обращаемся ко всем элементам Form . обращаемся к конкретному св-ву по его имени . берем его значение 
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`); // fetch() - позволяет прочитать URL адрес и получить с него данные
    const data = await api_url.json(); // Преобразуем полученные данные в json формат
    console.log(data);
  }

  render() { //Служит для вывода элементов в браузер
    return(
      <div>
        <Info />
        <Form weatherMethod = {this.gettingWeather} />
        <Weather />
      </div>
    );
  }
}


export default App; // Экспортируем класс App