## Vhosty — система интернет-бронирования отелей/хостелов, основанная в 2022 году в России. (Frontend)

## Стек технологий

-	TypeScript
-   React
-   Redux, Redux-Saga
-   axios
-	sass

## Установка

Клонируйте репозиторий.

```
git clone https://github.com/Vhosty/vhosty-frontend.git
```

Переход в рабочий каталог.

```
cd vhosty-frontend
```

Установка зависимостей

```
npm install
```

Конфигурация

```
Создайте файл .env и заполните его с примера .env.example
```

Запуск сборки

```
npm start
```

## Руководство написанию стилей и классов
-	Написание классов, используем методологию БЭМ
-	При создании нового логического блока в проекте, создаем отдельный файл .sass и подключаем в корневом style.sass
-	Общие стиле описываем в interface.sass
-	Переменные описываем в variables.sass
-	Mixin описываем в mixin.sass
-	Линейные стили, допускаются только тогда, когда стиль динамический. Например: background-image

## Руководство по стилю кода

Используем только функциональные компоненты

```TSX
import React from "react";

interface ExampleProps {}

const Example: React.FC<ExampleProps> = () => {
    return <div></div>;
};

export default Example;
```