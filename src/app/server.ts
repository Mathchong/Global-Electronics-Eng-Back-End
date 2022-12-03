import app from "./app";
import "../config/dotenv";

const PORT: number = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
