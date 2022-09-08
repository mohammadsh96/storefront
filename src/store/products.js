const initialState = 
    [
      { id:1 ,
        name: 'TV', category: 'electronics', price: 699.00, inStock: 5, inCart: 1,
        image: 'https://images-na.ssl-images-amazon.com/images/I/81t2A6uhm4L._SX466_.jpg',
      },
      {id:2,
        name: 'Laptop', category: 'electronics', price: 709.00, inStock: 5, inCart: 1,
        image: 'https://m.media-amazon.com/images/I/71rmymgVWVL._AC_UY218_.jpg',
      },{id:3,
        name: 'Phone', category: 'electronics', price: 899.00, inStock: 5, inCart: 1,
        image: 'https://m.media-amazon.com/images/I/61oQtjPpM-L._AC_UY218_.jpg',
      },{id:4,
        name: 'PC', category: 'electronics', price: 1699.00, inStock: 5, inCart: 1,
        image: 'https://m.media-amazon.com/images/I/81CFOwoLVlL._AC_UY218_.jpg',
      },{id:5,
        name: 'PlayStation', category: 'electronics', price: 699.00, inStock: 5, inCart: 1,
        image: 'https://m.media-amazon.com/images/I/51051FiD9UL._AC_UY218_.jpg',
      },
      {id:6,
        name: 'Radio', category: 'electronics', price: 99.00, inStock: 15, inCart: 1,
        image: 'https://pluspng.com/img-png/radio-hd-png-radio-picture-png-image-500.png',
      },
      {id:1,
        name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25, inCart: 1,
        image: 'https://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8117.png',
      },
      {id:2,
        name: 'Jacket', category: 'clothing', price: 19.00, inStock: 25, inCart: 1,
        image: 'https://m.media-amazon.com/images/I/610DOILk1jL._AC_UL320_.jpg',
      },{id:3,
        name: 'jeans', category: 'clothing', price: 9.00, inStock: 25, inCart: 1,
        image: 'https://m.media-amazon.com/images/I/81OCJuG-BXL._AC_UL320_.jpg',
      },
      {id:4,
        name: 'Socks', category: 'clothing', price: '3 in 1', inStock: 10, inCart: 1,
        image: 'https://www.pngfind.com/pngs/m/14-143267_socks-png-background-image-sock-transparent-png.png',
      },
      {id:5,
        name: 'boxer', category: 'clothing', price: 12.00, inStock: 10, inCart: 1,
        image: 'https://m.media-amazon.com/images/I/91EFJhU3eSL._AC_UL320_.jpg',
      },{id:6,
        name: 'Cap', category: 'clothing', price: 12.00, inStock: 10, inCart: 1,
        image: 'https://m.media-amazon.com/images/I/818YPH2BWgL._AC_UL320_.jpg',
      },
      {id:7,
        name: 'Dress', category: 'clothing', price: 12.00, inStock: 10, inCart: 1,
        image: 'https://m.media-amazon.com/images/I/51yI6WYjFpL._MCnd_AC_UL320_.jpg',
      },
     
      
      {id:8,
        name: 'Bread', category: 'food', price: 2.39, inStock: 90, inCart: 1,
        image: 'https://toppng.com/uploads/preview/bread-png-image-loaf-of-bread-11563103187ssm8yazedr.png',
      }, 
           {id:9,
        name: 'Pizza', category: 'food', price: 2.39, inStock: 90, inCart: 1,
        image: 'https://images6.alphacoders.com/738/thumb-1920-738359.jpg',
      },   
         {id:5,
        name: 'Water melon', category: 'food', price: 2.39, inStock: 90, inCart: 1,
        image: 'https://broccoliapp.net/wp-content/uploads/2018/06/%D8%A8%D8%B7%D9%8A%D8%AE.png',
      },
            {id:1,
        name: 'tomato', category: 'food', price: 2.39, inStock: 90, inCart: 1,
        image: 'https://cdn.thinglink.me/api/image/655416076661686272/1024/10/scaletowidth/0/0/1/1/false/true?wait=true',
      },
      {id:2,
        name: 'Potato', category: 'food', price: 0.39, inStock: 90, inCart: 1,
        image: 'https://www.fay3.com/previews/2019-11/3D9pf8kMvM.jpeg',
      },
      {id:3,
        name: 'Khoraro', category: 'food', price: 0.39, inStock: 90, inCart: 1,
        image: 'https://n4.sdlcdn.com/imgs/j/a/x/Cucumber-Green-Vegetables-Premium-Vegetables-SDL210844973-1-f1cdd.jpg',
      },
      {id:4,
        name: 'Batenjano', category: 'food', price: 1.39, inStock: 90, inCart: 1,
        image: 'https://tafkah.com/wp-content/uploads/2018/07/black-eggplant.jpg',
      },      {id:10,
        name: 'Faquso', category: 'food', price: 1.39, inStock: 90, inCart: 1,
        image: 'https://care4mall.online/wp-content/uploads/2021/04/catalog_armenian-504x315-removebg-preview-1.png',
      },
      {id:6,
        name: 'Apples', category: 'food', price: .99, inStock: 500, inCart: 1,
        image: 'https://e1.pngegg.com/pngimages/23/306/png-clipart-new-s-two-red-apples-thumbnail.png',
      },
      {id:7,
        name: 'Eggs', category: 'food', price: 1.99, inStock: 12, inCart: 1,
        image: 'https://w7.pngwing.com/pngs/439/922/png-transparent-chicken-egg-yolk-egg-eggshell-broken-egg-easter-eggs.png',
      },
      {id:1,
        name: 'Glock 19 Gen3', category: 'weapons', price: 997.59, inStock: 90, inCart: 1,
        image: 'https://m.media-amazon.com/images/I/71+HgUXU-mL._AC_UL320_.jpg',
      },
      {id:2,
        name: 'Battel Axe', category: 'weapons', price: 89.99, inStock: 90, inCart: 1,
        image: 'https://m.media-amazon.com/images/I/31PIQGcvnbL._AC_UL320_.jpg',
      },{id:3,
        name: 'ninja Sord', category: 'weapons', price: 132.75, inStock: 90, inCart: 1,
        image: 'https://m.media-amazon.com/images/I/414Bg4z52PL._AC_UL320_.jpg',
      },{id:4,
        name: 'Crosman', category: 'weapons', price: 75.99, inStock: 90, inCart: 1,
        image: 'https://m.media-amazon.com/images/I/91TRNJZibzL._AC_UL320_.jpg',
      },{id:5,
        name: 'ShotGun', category: 'weapons', price: 310.99, inStock: 90, inCart: 1,
        image: 'https://m.media-amazon.com/images/I/710Is53dBhL._AC_UL320_.jpg',
      },{id:6,
        name: 'Sh7a6ah', category: 'weapons', price: 1.99, inStock: 90, inCart: 1,
        image: 'https://cdn.zando.co.za/p/96513-6417-31569-9-detail.jpg',
      },
    ];

// eslint-disable-next-line
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'addToCart':
    return state.map(product => {
      if(product.name === payload.name){
        return {...product, inStock: product.inStock - 1};
      }else{
        return product;
      }
    });
  default:
    return state;
  }
};