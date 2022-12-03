import { Router } from "express";

import tokenValidator from "../middlewares/tokenValidator";

const solicitation = Router();
solicitation.post("/create", tokenValidator, (req, res) => {
res.status(200).send("ok");
});

export default solicitation;
