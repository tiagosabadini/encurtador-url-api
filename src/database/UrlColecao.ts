import Url from "core/Url";
import IUrlRepositorio from "../repositories/IUrlRepositorio";
import database from "../database";
import { 
  addDoc, 
  collection, 
  getDocs, 
  getDoc, 
  query, 
  where, 
  doc, 
  QueryDocumentSnapshot, 
  SnapshotOptions,
  CollectionReference,
  DocumentData,
  QuerySnapshot,
  DocumentReference
} from "firebase/firestore";


export default class UrlColecao implements IUrlRepositorio{
  
  async salvar(url: Url): Url {
    if(url?.id){
      await this.colecao().doc(url.id).set(url);
      return url;
    }else{
      const docRef = await this.colecao().add(url);
      const doc = await docRef.get();
      return doc.data();
    }
  }

  /*async excluir(url: Url): QuerySnapshot<DocumentData>{
    const q = query(this.colecao(), where("url_hash", "==", url.url));
    return await getDocs(q);
  }*/

  async listar(): Promise<any[]>{
    return;
  }

  private colecao(){
    return collection(database, 'urls').withConverter(this.#conversor);
  }

  #conversor = {
    toFirestore(url: Url){
      return {
        url: url.url,
        hash: url.hash
      }
    },
    fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions){
      const data = snapshot.data(options);
      return new Url(data.url, data.hash, snapshot.id);
    }
  }
}