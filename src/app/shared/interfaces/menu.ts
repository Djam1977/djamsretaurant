

export interface Dish {
  id: number;
  type: {id:number, name:string};
  titre: string;
  price: number;
  ingredients: [{name:string, nameEn:string,}];
  image: string;
}

export interface NewDish {
  
  type: {id:number, name:string};
  titre: string;
  price: number;
  ingredients: [{name:string, nameEn:string,}];
  image: string;
}