

export interface Flat {
  id: number;
  type: {id:number, name:string};
  titre: string;
  price: number;
  ingredients: [{name:string, nameEn:string,}];
  image: string;
}

export interface NewFlat {
  
  type: {id:number, name:string};
  titre: string;
  price: number;
  ingredients: [{name:string, nameEn:string,}];
  image: string;
}