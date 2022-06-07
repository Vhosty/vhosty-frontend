## Vhosty— система интернет-бронирования отелей/хостелов, основанная в 2022 году в России. (Frontend)

## Стек технологий

-	TypeScript
-   ReactJs
-   Redux, Redux-Saga
-   axios

## Установка

Клонируйте репозиторий.

```
git clone https://github.com/vhosty/vhosty-frontend.git
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

## Руководство по стилю кода

Используем только функциональные компоненты

```JSX
import React from "react";

interface ExampleProps {}

const Example: React.FC<ExampleProps> = () => {
    return <div></div>;
};

export default Example;
```