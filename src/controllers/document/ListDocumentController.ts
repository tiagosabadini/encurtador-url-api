import UrlCollection from "../../database/collections/UrlCollection";

const ListDocumentController = async(): Promise<any[]> => {
  const collection: UrlCollection = new UrlCollection();
  const querySnapshot = await collection.all();
  const list: Array<any> = [];
  querySnapshot.forEach(doc => {
    list.push(doc.data().toJSON());
  });
  return list;
}

export {ListDocumentController};