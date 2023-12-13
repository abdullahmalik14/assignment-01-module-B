 // Sample data object
 const data_arr = [

    {
        image_url:
         "https://i.imgur.com/R2PN9Wq.jpeg",
        title:
         "newTitle",     
        description:
         "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
         product_price:
         "205" ,
         product_buy:
         "Buy Now"
    },
    {
        image_url:
        "https://i.imgur.com/mp3rUty.jpeg",
        title:
         "Ergonomic Wooden Tuna",     
        description:
         "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles...",
         product_price:
         "743" ,
         product_buy:
         "Buy Now"
    },
    {
        image_url:
        "https://i.imgur.com/R3iobJA.jpeg",
        title:
         "Electronic Bronze Chips",     
        description:
         "The automobile layout consists of a , with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
         product_price:
         "808" ,
         product_buy:
         "Buy Now"
    },
    
    {
        image_url:
        "https://i.imgur.com/cBuLvBi.jpeg",
        title:
         "Recycled Rubber",     
        description:
         "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandalsAwesome Bronze Car",
         product_price:
         "382" ,
         product_buy:
         "Buy Now"
    },
    {
      image_url:
      "https://i.imgur.com/R3iobJA.jpeg",
      title:
       "Electronic Bronze Chips",     
      description:
       "The automobile layout consists of a , with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
       product_price:
       "808" ,
       product_buy:
       "Buy Now"
  },
    {
        image_url:
        "https://i.imgur.com/KeqG6r4.jpeg",
        title:
         "Recycled Rubber Cheese",     
        description:
         "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
         product_price:
         "300" ,
         product_buy:
         "Buy Now"
    }]
    

  
  const productContainer = document.getElementById("data_arr");
  for(let i=0; i<data_arr.length;i++){
      
      const { image_url, title, description,product_price, product_buy } = data_arr[i];
  productContainer.innerHTML += `
        <div class="col-md-4">
    <div class="card" style="width: 300px; margin-top: 20px;">
        <img src="${image_url}" class="card-img-top" alt="..." style = "width:300px; height:250px">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
          <h6>${product_price}</h6>
          <a href="#" class="btn btn-success">${product_buy}</a>
        </div>
      </div>
    </div>


  `;

  }
