import { Router, Request, Response } from "express";
import unidid from "uniqid";
import UrlColecao from "../database/UrlColecao";
import Url from "../core/Url";

const router = Router();

router.post('/shorten', (req: Request, res: Response) => {
  const {url: url_param} = req.body;
  const hash = unidid.time();  
  const url = new Url(url_param, hash);
  const url_colecao = new UrlColecao();
  url_colecao.salvar(url);

  /*
  add(uuid, url)
    .then((docRef) => {
      res.json({
        'url_encurtada': url,
        'hash': uuid,
        'id': docRef.id
      });
    })
    .catch((error) => {
      res.json({
        'url_encurtada': null,
        'hash': null,
        'error': 'ocorreu um erro'
      });
    });*/
});


/*
router.get('/', async (req: Request, res: Response) => {
  let lista = [{}];
  const docsSnapshot = await listar();
  let i = 0;
  docsSnapshot.forEach((doc) => {
    lista[i++] = {
        id: doc.id,
        url_hash: doc.data().url_hash,
        url_original: doc.data().url_original,
      }
  });
  res.json({
    data: lista
  });
});



router.get('/:hash', async (req: Request, res: Response) => {
  const {hash} = req.params;
  const url = new Url();
  const docSnapshot = await get(hash);
  docSnapshot.forEach((doc) => {
    res.json({
      'url_redirect': doc.data().url_original
    });
  });
});
*/



export default router;