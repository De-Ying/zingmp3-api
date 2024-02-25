const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');

require('dotenv').config();

const port = process.env.PORT || 3000;

const app = express();


// app.use(express.json());
// app.use(cors());

// Routes
routes(app);

// Page Home
app.get('/', (req, res) => {
    res.send('SERVER ON');
});

// Page Error
app.get('*', (req, res) => {
    res.send('Nhập Sai Đường Dẫn! Vui Lòng Nhập Lại >.<');
});

app.listen(port, () => {
    console.log(`Start server listen at http://localhost:${port}`);
});
