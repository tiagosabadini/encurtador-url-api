import UrlCollection from "../../database/collections/UrlCollection";

const DeleteDocumentController = async(id: string): Promise<any> => {
  const collection: UrlCollection = new UrlCollection();
  return collection.delete(id);
}

export {DeleteDocumentController};