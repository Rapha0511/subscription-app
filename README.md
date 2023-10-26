# Perequisites
This project is using Vite JS
Vite JS requires Node.js version 14.18+, 16+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

cf : https://vitejs.dev/
 
# How to install the application

- Clone the project
- Go to the root of the project
- run `npm install` to install all the dependencies
- run `npm install -g json-server' to install json-server, used to make a fake db

# how to run the application

- Open a terminal and go to the root of the project
- Run `npm run dev` to run the front end using vite
- Open another terminal and go to the root of the project
- Run `json-server --watch data.json`
- go to http://localhost:5173/ ( or see the location on the terminal where you run npm run dev)

# How to use

- The goal of this application is to manage the different subscription you have (phone, streaming ...).
- On the first page, you can see your subscriptions, you can click on them, read the details and delete them.

- You can also browse through all differents subscriptions you may be interested in, read the details and add them.

- On the main page you have recommendations based on the carbon footprint of your subscriptions (It take the highest subscriptions you have and recommends you all the one that have a lower footpring).

- On the detail page of your subscription, its recommend you another offer of the same type but with a better foot print.

## Enjoy !!

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
