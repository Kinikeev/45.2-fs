# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Необходимые команды:

1. Создать проект:

npm create vite@latest . -- --template react

vite@latest — последняя версия Vite.
. — устанавливает проект в текущую папку.
--template react — выбирает шаблон React.

2. Установить зависимости:

npm install

Эта команда скачивает и устанавливает все библиотеки, указанные в package.json.

3. Запустить проект в режиме разработки:

npm run dev

Проект будет запущен на локальном сервере (по умолчанию на http://localhost:5173).

4. Альтернативный запуск:

npm start

вручную добавить: В package.json:

"scripts": {
"start": "npm run dev"
}

          Шаги для деплоя:

1. Установка библиотеки для публикации: Установите библиотеку gh-pages, которая позволяет удобно публиковать проекты на GitHub Pages:

npm i gh-pages

2. Добавление скрипта в package.json: Откройте файл package.json и добавьте новый скрипт для деплоя:

"scripts": {
"deploy": "vite build && gh-pages -d dist"
}

3. Настройка vite.config.js: В файл vite.config.js добавьте новый ключ base, указав имя вашего репозитория:

export default {
base: '/<имя_репозитория>/',
};

4. Выполнение команды для деплоя: Запустите команду для сборки проекта и публикации:

npm run deploy

Это создаст оптимизированную версию вашего проекта и загрузит её в ветку gh-pages.

Готово!: После успешного выполнения команда опубликует ваш проект, и он станет доступен по адресу:

https://<ваше*имя>.github.io/<имя*репозитория>/
