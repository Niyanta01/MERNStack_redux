const express = require("express");
const app = express();

app.listen(4000, ()=>{
    console.log("Server @ 4000");
});

const cors = require("cors");
app.use(cors());

app.get("/products", (req, res)=>{
    res.send([{
        "productName":"leaf",
        "productCode":"90327",
        "price":9.87,
        "rating":3.2, 
        "imageUrl":"https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=696383-847__1&recipeName=350"
      },
      {
        "productName":"cart",
        "productCode":"9087",
        "price":7.57,
        "rating":3.5,
        "imageUrl":"https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=696383-847__1&recipeName=350"
      },
      {
        "productName":"pen",
        "productCode":"5687",
        "price": 5.58,
        "rating":4.2,
        "imageUrl":"https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=696383-847__1&recipeName=350"
      }
]);

});