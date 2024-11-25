let i=0;
let length = 0;
let txt="";

const products = [
    {
        item: "TShirt",
        // quantity: 5,
        color: "yellow",
        price: 1200,
        id:1
        // selected:0
    },
    {
        item: "Shirt",
        // quantity: 10,
        color: "blue",
        price: 1000,
        id:2
        // selected: 0
    },
    {
        item: "Pant",
        // quantity: 10,
        color: "blue",
        price: 1500,
        id:3
        // selected: 0
    },
    {
        item: "Shorts",
        // quantity: 10,
        color: "grey",
        price: 1500,
        id:4
        // selected: 0
    }
]

length = products.length;
while(i<length){
    products[i].quantity = 10;
    // products[i].selected = 0;
    i++;
}
i=0;
function increase(id){
    // console.log(This);
    // id = id-1;
    if(products[id].selected == undefined || products[id].selected == 0){
        products[id].selected = 1;
        // products[id].quantity = products.quantity - 1;
    }
    else{
        products[id].selected = products[id].selected + 1;
    }
    // console.log(products[id].id, products[id].selected);
    document.getElementById(products[id].id).innerHTML = `Add - ${products[id].selected}`;
}

function decrease(id){
    // id = id - 1;
    if(products[id].selected == undefined || products[id].selected == 0){
        products[id].selected = 0;
        // document.getElementById(products[id].id).innerHTML = `Add`;
    }
    else{
        
        products[id].selected = products[id].selected - 1;
    }
    document.getElementById(products[id].id).innerHTML = `Add - ${products[id].selected}`;
    // console.log(products[id].id, products[id].selected);
}


while(i < length){
    txt += `<div class="card-area">
              <div class="card">
                <div class="item-image"><img src="img/${i+1}.png"></div>
                <div class="item-desc">
                    <h3>${products[i].item}</h3>
                    <p>Available : ${products[i].quantity}</p>
                    <p>Color : ${products[i].color}</p>
                    <p>Price : ${products[i].price}</p>
                </div>
                <div class="btns">
                    <button onclick="decrease(${i})"> - </button><button class="addBtn" id=${products[i].id}>Add</button><button class="increase-btn" onclick="increase(${i})"> + </button>
                </div>    
              </div>
            </div>`;
    i++;
}


// console.log("Enter")
// let bt = document.getElementsByClassName("increase-btn");
// bts = Array.from(bt);
// console.log(bts);
// bts.forEach(btn => {
//     btn.addEventListener("click", function(e){
//         console.log(e.target);
//     })
// })



document.getElementById("product").innerHTML = txt;
let count = 0;
let items = document.getElementsByClassName("addBtn");
items = Array.from(items);
// console.log(items);s
items.forEach(item => {
    item.addEventListener("click", function(e){
        console.log(e.target.id);
        let id = e.target.id - 1;
        if(products[id].selected == undefined){
            products[id].selected = 1;
            count++;   
            document.getElementById("power").innerHTML = count;
            localStorage.setItem(localStorage.length, JSON.stringify(products[id]));
        }
        else if(products[id].selected == 0){
            console.log("Its zero");
            products[id].selected = 0;
        }
        else{

            // console.log(e.target.selected)
            count++;   
            document.getElementById("power").innerHTML = count;
            localStorage.setItem(localStorage.length, JSON.stringify(products[id]));
        }
    })
});
