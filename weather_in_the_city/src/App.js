import React from "react"; // Импортируем React из библиотеки react
import Info from "./components/info"; // Импортируем класс Info из файла info.js
import Form from "./components/form"; // Импортируем класс Form из файла form.js
import Weather from "./components/weather_info"; // Импортируем класс Weather из файла weather.js

const API_KEY = "a0ec0b4fd3e3e3eff8952287564ef9ae";

class App extends React.Component { // Создаем класс App, который унаследует все от React.Component

  state = { // Создаем объект для хранения данных из data и для дальнешей передачи этих данных
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }


  gettingWeather = async (e) => { 
    e.preventDefault(); // Переменная 'e' служит для отслеживания различных событий // Уничтожаем поведение страницы по умолчанию (убираем перезагрузку стриницы при нажатиии на кнопку)
    let city = e.target.elements.city.value; // Обращаемся к e . обращаемся к объекту Form .  обращаемся ко всем элементам Form . обращаемся к конкретному св-ву по его имени . берем его значение 

    if (city){
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`); // fetch() - позволяет прочитать URL адрес и получить с него данные
      const data = await api_url.json(); // Преобразуем полученные данные в json формат

      // Переводим время захода солнца в читабельный вид
      let sunset = data.sys.sunset;
      let date_sunset = new Date(sunset * 1000);
      let sunset_date = date_sunset.toLocaleTimeString();  

      // Переводим время восхода солнца в читабельный вид
      let sunrise = data.sys.sunrise;
      let date_sunrise = new Date(sunrise * 1000);
      let sunrise_date = date_sunrise.toLocaleTimeString();  

      this.setState({ // Устанавливаем значение свойствам объекта, который находится в этом классе
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunrise: sunrise_date,
        sunset: sunset_date,
        error: ""
      })
    }
    
  }

  render() { //Служит для вывода элементов в браузер
    return(
      <div>
        <Info />
        <Form weatherMethod = {this.gettingWeather} />
        <Weather 
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          error={this.state.error}
        />
      </div>
    );
  }
}


export default App; // Экспортируем класс App