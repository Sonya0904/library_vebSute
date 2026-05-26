const express = require("express");
const sql = require("mssql/msnodesqlv8");
const path = require("path");

const PORT = 3000;
const app = express();       
app.use(express.json()); //обработка в json
app.use(express.static(path.join(__dirname, "public")));//coединяем пути

const dbConfig = {  //как подключаемся к бд
  connectionString:
     "Driver={ODBC Driver 17 for SQL Server};Server=A402PCPREPOD;Database=Zolotariova_onloneLibrary;Trusted_Connection=Yes;",
  driver: "msnodesqlv8",
};

app.get("/users", async (req, res) => { //запрос для пользователей
  const connection = await sql.connect(dbConfig);// подключение к бд

  const result = await connection.request().query("SELECT * FROM dbo.user"); //запись результата и отправляем запрос

  res.json(result.recordset);//записываем результат
});

app.post("/registration", async (req, res) => { //отправляем пост запрос
  const { name, password } = req.body; //что отправляем в тело запроса
  const connection = await sql.connect(dbConfig); //запрос к бд 

  await connection
    .request()
    .input("name", sql.VarChar, name)
    .input("password", sql.VarChar, password)
    .query(` 
      INSERT INTO dbo.user ( name, password) 
      VALUES (@name, @password)
    `); //сам запрос, что вставляем. добовляем скль инъекции (@)

  res.send("OK");
});

app.post("/login", async (req, res) => {
  try {
    const { name, password } = req.body;

    const connection = await sql.connect(dbConfig);

    const result = await connection
      .request()
      .input("name", sql.VarChar, name)
      .input("password", sql.VarChar, password)
      .query(`
        SELECT * FROM dbo.user
        WHERE name = @name AND password = @password
      `);

    if (result.recordset.length === 0) {
      return res.status(401).json({
        message: "Invalid login or password",
      });
    }

    res.json({
      message: "Login successful",
      user: result.recordset[0],
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Login error",
    });
  }
});


app.listen(3000, () => {
  console.log("Server started on port 3000!, http://localhost:3000");
  });