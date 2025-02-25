import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
app.use(express.static("uploads"));
routes(app);

app.listen(process.env.API_PORT, () => {
  console.log(`Server running on port: ${process.env.API_PORT}`);
});
