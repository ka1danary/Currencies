<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&duration=1000&pause=1000&color=36AFF7&random=false&width=435&lines=%D0%92%D0%B0%D0%BB%D1%8E%D1%82%D0%B0;%D0%9F%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5+%D0%B4%D0%BB%D1%8F+%D0%BE%D1%82%D1%81%D0%BB%D0%B5%D0%B6%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F+%D0%B2%D0%B0%D0%BB%D1%8E%D1%82" alt="Typing SVG" /></a>

## Установка и запуск

1. Установка зависимостей:
    
    ```
    yarn install
    
    ```
    
2. Запуск для разработки с горячей перезагрузкой:
    
    ```
    yarn serve
    
    ```
    
3. Сборка для продакшн:
    
    ```
    yarn build
    
    ```
    

### Технологии
- *Основные:* Vue 3, Pinia, Axios
  
- *Дополнительные:* epic-spinners

## Общая информация по проекту

### Страницы

- **MainPage:** главная страница с отображением валют.
- **SettingsPage:** страница настроек, где можно выбрать отслеживаемые валюты и настроить автоматическое обновление данных.

#### Store
- *ValueStore* - хранит общие данные по валютам.

- *AutoUpdateStore* -  отвечает за хранение информации по автоматическому обновлению данных о валютах

- *HeaderStore* - хранит данные о состоянии иконок в компоненте `MeHeader.vue`

  ## API

Используются следующие функции из `allApiFunctions`:

- **getAllLatestValueOfCurrencies(name):** получение текущих значений всех валют.
  
- **getAllInfoAboutValuesOfCurrencies():** получение информации о всех валютах.
  
- **getInfoValueOfSpecificCurrency(name, base_currency):** получение информации о конкретной валюте.

## Локальное хранилище

Используется для сохранения данных, таких как последние обновления валют, выбранная базовая валюта и состояние загрузки данных.

### Основные функции

- **saveToLocalStorageCurrencies:** сохранение данных о валютах в `localStorage`.
- **buildFullArrayOfCurrencies:** создание массива данных о валютах.
- **updateConcreteCurrency:** обновление данных конкретной валюты.
- **updateAllCurrencies:** обновление данных всех валют.
- **selectCurrenciesInSettings:** выбор валют для отслеживания в настройках.
- **setSelectedBaseCurrency:** установка выбранной базовой валюты и обновление данных всех валют.
# Test-task-
