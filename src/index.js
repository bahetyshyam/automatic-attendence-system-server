import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(cors());


app.listen(3000, () => {
    console.log("Server Listening on port 3000");
})