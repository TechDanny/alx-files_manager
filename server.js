const express = require('express');
const routes = require('./routes/index');

const app = express();
const PORT = parseInt(process.env.PORT, 10) || 5000;

app.use(express.json());
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
export default app;
