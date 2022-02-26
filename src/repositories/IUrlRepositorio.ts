import Url from "../core/Url";

export default class IUrlRepositorio {
  async salvar(url: Url): Promise<Url>
  //async excluir(url: Url): Promise<void> 
  //async listar(): Promise<any[]> 
}


/*


const add = async function(url_hash: string, url_original: string): Promise<any>{
  return await addDoc(collection(database, "urls"), {
    url_hash: url_hash,
    url_original: url_original,
  });
}

const get = async function(url_hash: string){
  const q = query(collection(database, "urls"), where("url_hash", "==", url_hash));
  return await getDocs(q);
}

const listar = async function(){
  return await getDocs(collection(database, "urls"));
}

export {listar, get, add};
*/