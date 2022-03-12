import UrlCollection from "../../database/collections/UrlCollection";
import Url from "../../core/Url";

const UpdateDocumentController = async(query_url: string, id: string): Promise<Url> => {
  const colecao: UrlCollection = new UrlCollection();
  return await colecao.update(query_url, id);
}

export {UpdateDocumentController};