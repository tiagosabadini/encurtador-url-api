import UrlCollection from "../../database/collections/UrlCollection";
import Url from "../../core/Url";

const FindDocumentController = async(query_hash: string): Promise<Url> => {
  const collection: UrlCollection = new UrlCollection();
  const querySnapshot = await collection.findByHash(query_hash);
  let url: Url = null;
  querySnapshot.forEach(doc => url = doc.data());
  return url;
}

export {FindDocumentController};