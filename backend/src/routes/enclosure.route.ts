import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ animals: "return enclosures" });
});

router.get("/find", (req: Request, res: Response) => {
  res.json({ animal: req.params });
});

router.post("/create", (req: Request, res: Response) => {
  res.json({ created: { req } });
});

router.post("/edit", (req: Request, res: Response) => {
  res.json({ edited: { req } });
});

export default router;
