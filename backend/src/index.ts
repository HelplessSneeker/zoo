import express, { Request, Response } from "express";
import animalRoutes from "./routes/animal.route";
import enclosureRoutes from "./routes/enclosure.route";
import cors from "cors";

const app = express();
const port = 4000;

const allowedOrigins = ["http://localhost:3000"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));
app.use(express.json());

app.use("/animals", animalRoutes);
app.use("/enclosures", enclosureRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
