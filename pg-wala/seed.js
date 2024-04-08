const mongoose = require('mongoose');


const Product = require('./model/Product');

const products = [
    {
        name : "10 Simple Trading Books (PDF Download): Read Now Grow More!",
        img :"https://mrvyasidea.com/ezoimgfmt/i0.wp.com/mrvyasidea.com/wp-content/uploads/2024/02/Copy-of-WordPress-Blog-Font-2024-02-25T113323-compressed.jpg?w=560&ssl=1&ezimgfmt=ngcb1/notWebP",
        price: "100",
        desc:"Trading books are essential resources for anybody wishing to improve their trading abilities and find success in the markets.",

    },
    
    {
        name : "10 Best New Movies Available On YouTube That You Should Watch!",
        img :"https://mrvyasidea.com/ezoimgfmt/i0.wp.com/mrvyasidea.com/wp-content/uploads/2024/02/Copy-of-WordPress-Blog-Font-2024-02-22T075840-compressed.jpg?w=560&ssl=1&ezimgfmt=ngcb1/notWebP",
        price: "100",
        desc:"YouTube offers a diverse range of captivating free movies that cater to various tastes and preferences. According to digitaltrends.com, youtube offers a large collection of free movies and tv shows with ads.",

    },
    {
        name : "10 Best New Movies Available On YouTube That You Should Watch!",
        img :"https://mrvyasidea.com/ezoimgfmt/i0.wp.com/mrvyasidea.com/wp-content/uploads/2024/02/Copy-of-WordPress-Blog-Font-2024-02-22T075840-compressed.jpg?w=560&ssl=1&ezimgfmt=ngcb1/notWebP",
        price: "100",
        desc:"YouTube offers a diverse range of captivating free movies that cater to various tastes and preferences. According to digitaltrends.com, youtube offers a large collection of free movies and tv shows with ads.",

    },
    {
        name : "10 Best New Movies Available On YouTube That You Should Watch!",
        img :"https://mrvyasidea.com/ezoimgfmt/i0.wp.com/mrvyasidea.com/wp-content/uploads/2024/02/Copy-of-WordPress-Blog-Font-2024-02-22T075840-compressed.jpg?w=560&ssl=1&ezimgfmt=ngcb1/notWebP",
        price: "100",
        desc:"YouTube offers a diverse range of captivating free movies that cater to various tastes and preferences. According to digitaltrends.com, youtube offers a large collection of free movies and tv shows with ads.",

    },
    {
        name : "10 Best New Movies Available On YouTube That You Should Watch!",
        img :"https://mrvyasidea.com/ezoimgfmt/i0.wp.com/mrvyasidea.com/wp-content/uploads/2024/02/Copy-of-WordPress-Blog-Font-2024-02-22T075840-compressed.jpg?w=560&ssl=1&ezimgfmt=ngcb1/notWebP",
        price: "100",
        desc:"YouTube offers a diverse range of captivating free movies that cater to various tastes and preferences. According to digitaltrends.com, youtube offers a large collection of free movies and tv shows with ads.",

    },

]

// async function seedDb(){
//     await Product.insertMany(products);
//     console.log("data seed success");
// }

async function seedDb() {
    try {
      for (const product of products) {
        await Product.create(product);
      }
      console.log('Data seed success');
    } catch (error) {
      console.error('Error seeding data:', error);
    }
  }
  



module.exports = seedDb;