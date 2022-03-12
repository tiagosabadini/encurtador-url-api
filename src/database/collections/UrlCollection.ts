import Url from "../../core/Url";
import firestore from "../firestore";

export default class UrlCollection{

  async delete(id: string){
    return await this.collection().doc(id).delete();
  }

  async create(url: Url){
    const { id } = await this.collection().add(url);
    const data = await this.collection().doc(id).get();
    return data.data();
  }

  async update(new_url: string, id: string){
    await this.collection().doc(id).update({url_original: new_url});
    const data = await this.collection().doc(id).get();
    return data.data();
  }

  async findByHash(hash: string){
    return await this.collection().where("url_hash", "==", hash).get();
  }

  async getById(id: string){
    return await this.collection().doc(id).get();
  }

  async all(){
    return await this.collection().get();
  }

  private collection(){
    return firestore.collection("urls").withConverter(this.#converter);
  }

  #converter = {
    toFirestore: (data: Url): FirebaseFirestore.DocumentData => {
      return { url_original: data.url, url_hash: data.hash }
    },
    fromFirestore: (snapshot: FirebaseFirestore.QueryDocumentSnapshot): Url => {
      const data = snapshot.data();
      return new Url(data.url_original, data.url_hash, snapshot.id);
    }      
  }

  
}
