import unidid from "uniqid";
import UrlCollection from "../../database/collections/UrlCollection";
import Url from "../../core/Url";

const CreateDocumentController = async(req_url: string): Promise<Url> => {
  const q_hash = unidid.time(); 
  const collection: UrlCollection = new UrlCollection();
  return await collection.create(new Url(req_url, q_hash));
}

export {CreateDocumentController};