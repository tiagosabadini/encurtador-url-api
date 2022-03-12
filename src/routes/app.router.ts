import { Router, Request, Response } from "express";
import Url from "../core/Url";
import {
  CreateDocumentController, 
  ListDocumentController, 
  UpdateDocumentController, 
  FindDocumentController, 
  DeleteDocumentController
} from "../controllers/DocumentController";


const router = Router();

//Delete
router.delete("/:id", async(req: Request, res: Response) => {
  const data = await DeleteDocumentController(req.params.id);
  res.json(data);
});


//Buscar pelo hash
router.get("/:hash", async(req: Request, res: Response) => {
  const url: Url = await FindDocumentController(req.params.hash);
  res.json(url.toJSON());
});


//Ver todos
router.get("/", async(req: Request, res: Response) => {
  const lista = await ListDocumentController();
  res.json(lista);
});


//Update
router.put("/:id", async(req: Request, res: Response) => {
  const url: Url = await UpdateDocumentController(req.body.url, req.body.id);
  res.json({
    "data": url.toString()
  });
});

//Create
router.post("/", async(req: Request, res: Response) => {
  const url: Url = await CreateDocumentController(req.body.url);
  res.json(url.toJSON());
});

export default router;