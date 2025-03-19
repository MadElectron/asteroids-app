# Asteroids app

Приложение для просмотра информации об астероидах на основе данных [NASA API](https://api.nasa.gov/). Это проект на [Next.js](https://nextjs.org), созданный с помощью [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Структура проекта

В приложении используются данные об астероидах, полученные из NASA API, и демонстрационные данные о пользователях, находящиеся в файле `mock/users.ts`. Авторизация пользователей осуществляется в десонтсационном-режиме, запросы к API не производятся. Все CRUD-действия с данными пользователей производятся в пределах приложения. После обновления страницы данные о пользователях заново загружаются из файла.

## Получение ключа NASA API

Ключ можно получить на странице [NASA API](https://api.nasa.gov/), затем в корневой директории создать файл `.env` и добавить в него созданный ключ в качестве переменной:

```
NASA_API_KEY=<YOUR_NASA_API_KEY>
```

## Установка

```
npm i
npm build
npm start
```

Откройте [http://localhost:3000/](http://localhost:3000) в браузере, чтоб увидеть результат.

## Авторизация

Для авторизации на странице `/auth` введите e-mail одного из пользователей:

```
alexander.ivanov@example.com
elena.smirnova@example.com
dmitry.kuznetsov@example.com
natalia.popova@example.com
sergey.mikhailov@example.com
olga.nikolaeva@example.com
ekaterina.dmitrieva@example.com
```

Пароль для всех одинаковый - `1111`.
