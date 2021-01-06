import { Application, Router } from 'https://deno.land/x/oak@v6.3.1/mod.ts';
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { Task } from "./task.js";;

const app = new Application();
const router = new Router();

app.use(oakCors());

app.use(router.routes());

await app.listen({ port: 8000 });