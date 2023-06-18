// importation of what i needed
import express from "express";
import mysql from "mysql";
import cors from "cors";
//end importation

// just i declared a variable for i can work with express tool
const app = express();

// that is middleware chnwa role mta3a bech najem nab3ith data json min client side
app.use(express.json());
app.use(cors()); // hadhi 3lach zidtha jtini mochkla fil front end 9ali error cors haka 3lach sbaitha w bdit  n5dim biha
// end declaration

// just i will right some code for connect database "SQL"

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ramos9784@",
  database: "projectsql",
});

// end of connection database

// now i will try to get information from database

app.get("/", (req, res) => {
  const q = "SELECT * FROM projectsql.books;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// end getting

// i will add some book in my dataBase

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`, `desc`, `cover`) VALUES (?);";
  const values = [req.body.title, req.body.desc, req.body.cover];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// app listen hadhi role mta3aha ani bech nconnetacter backend mta3ya w n5adma 3ala anhou port exact
app.listen(5000, () => {
  console.log("server is rnunig");
});
