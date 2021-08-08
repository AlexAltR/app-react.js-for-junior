import React from "react"; // Импортируем React из библиотеки react
import Info from "./components/info"; // Импортируем класс Info из файла info.js
import Form from "./components/form"; // Импортируем класс Form из файла form.js
import Weather from "./components/weather_info"; // Импортируем класс Weather из файла weather.js


class App extends React.Component { // Создаем класс App, который унаследует все от React.Component
  render() { //Служит для вывода элементов в браузер
    return(
      <div>
        <Info />
        <Form />
        <Weather />
      </div>
    );
  }
}


export default App; // Экспортируем класс App