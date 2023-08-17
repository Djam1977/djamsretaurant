// import { Flat } from '../interfaces/menu';

// export const menusMenu: Flat[] = [
//   {
//     id: 1,
//     gender: 1,
//     name: 'BURRATA VELOUTÉ AUX TOMATES',
//     ingredients:
//      [60, 317,103,212,17,224],
//     price: 12.90,
//     img: 'https://media.istockphoto.com/id/1278273059/fr/photo/manger-du-fromage-italien-mou-frais-des-pouilles-des-boules-blanches-de-burrata-ou-du-fromage.jpg?s=612x612&w=0&k=20&c=NfPQ6wtQNKEixSo1hbTTwxinZm_kb8kd8XSdyaug2c8='
//   },
//   {
//     id: 2,
//     gender: 1,
//     name: 'PERLES de SAUMON EN SALADE DE LA MER',
//     ingredients:
//     [2, 201, 254, 102,273,5,106,332,224,199],
//     price: 12.90,
//     img: 'https://img.over-blog-kiwi.com/1/45/51/50/20150726/ob_a71816_salade-de-perles.jpg',
//   },
//     {
//     id: 3,
//     gender: 1,
//     name:  'SALADE CÉSAR ',
//     ingredients: [201, 1, 317, 234,23,212,555,122,198,224],
//     price: 9.95,
//     img: 'https://i.notrefamille.com/1800x0/smart/2020/09/24/18244-large.jpg'
//   },
//   {
//     id: 4,
//     gender: 2,
//     name: 'CONFIT DE BOEUF FAÇON BOURGUIGNON CUIT EN BASSE TEMPÉRATURE PENDANT 7H ',
//     ingredients:
//      [3,49,78,149,144,20],
//     price: 19.90,
//     img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2010/10/Boeuf-Bourguignon-facile.jpg'
//   },
//   {
//     id: 5,
//     gender: 2,
//     name: 'Entrecote du sud',
//     ingredients:
//     [281,237],
//     price: 19.90,
//     img: 'https://pizzeriale58bis.toctok.fr/wp-content/uploads/2021/10/entrecote-scaled.jpg'
//   },
//   {
//     id: 6,
//     gender: 3,
//     name: 'MOELLEUX AU CHOCOLAT MAISON',
//     ingredients:  [417,41,347,137,123],
//     price: 8.99,
//     img: 'https://www.cookomix.com/wp-content/uploads/2016/05/moelleux-chocolat-coeur-coulant-thermomix.jpg'
//   },
//   {
//     id: 7,
//     gender: 3,
//     name: 'CHOCOLAT GOURMAND',
//     ingredients:
//     [43,77,211,213,100],
//     price: 8.95,
//     img: 'data:image/jpeg;base64,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'
//   },
// ];
