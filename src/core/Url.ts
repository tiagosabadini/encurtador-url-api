export default class Url {

  #id: string;
  #url: string;
  #hash: string;

  constructor(url: string, hash: string, id?: string){
    this.#id = id ?? '';
    this.#url = url;
    this.#hash = hash;
  }

  get url(){
    return this.#url;
  }

  get hash(){
    return this.#hash;
  }

  get id(){
    return this.#id;
  }
}