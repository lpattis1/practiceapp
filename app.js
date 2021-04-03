let removeBtn = document.querySelector(".remove-item");
let addBtn = document.querySelector(".add-item");
let amount = document.querySelector(".amount");

function addItem(){
    amount.value = parseInt(amount.value) + 1;
}

function removeItem(){
    if (amount.value <= 0) {
        amount.value = 0;
    } else {
        amount.value = parseInt(amount.value) - 1;
    }
}

function cart(){
    let cartItems = document.querySelector(".added").style.opacity = "1";
    let cartNumber = document.querySelector(".added").innerHTML = amount.value;

    if(cartNumber <= 0){
        document.querySelector(".added").style.opacity = "0";
    }
}

addBtn.addEventListener("click", function(e){
    addItem();
    cart();
    e.preventDefault();
});

removeBtn.addEventListener("click", function(e){
    removeItem();
    cart();
    e.preventDefault();
});