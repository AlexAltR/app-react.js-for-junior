import React from "react"; // Импортируем React из библиотеки react
import Info from "./components/info"; // Импортируем класс Info из файла info.js


class App extends React.Component { // Создаем класс App, который унаследует все от React.Component
  render() { //Служит для вывода элементов в браузер
    return(
      <div>
        <Info />
      </div>
    );
  }
}


export default App; // Экспортируем класс App