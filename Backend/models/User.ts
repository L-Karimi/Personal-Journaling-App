// index.ts
import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './sequelize'; // sequelize setup file

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

sequelize.sync();
