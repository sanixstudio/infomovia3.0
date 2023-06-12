import express, { urlencoded, json } from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(urlencoded({ extended: true }));
app.use(json());

app.listen(PORT, () => { console.log('listening at http://localhost:' + PORT)});