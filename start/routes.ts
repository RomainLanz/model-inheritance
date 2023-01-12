/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";
import Log from "App/Models/Log";
import Test from "App/Models/Test";

Route.get("/", () => Test.all());
Route.get("/create", () => Test.create({ name: "Madeline" }));
Route.get("/update", () =>
  Test.first().then((test) => test?.merge({ name: "Madeline 2" }).save())
);
Route.get("/reset", () => Test.truncate().then(() => Log.truncate()));
Route.get("/logs", () => Log.all());
