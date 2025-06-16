//Obtener los elementos por Id
let carrito=document.getElementById("cart-list")
let btn1=document.getElementById("art1");
let btn2=document.getElementById("art2");
let btn3=document.getElementById("art3");
let btn4=document.getElementById("art4");
let btn5=document.getElementById("art5");
let btn6=document.getElementById("art6");
let btn7=document.getElementById("art7");
let btn8=document.getElementById("art8");
let btn9=document.getElementById("art9");
let totalsuma= document.getElementById("total");
let total = 0;
function sumarTotal(n) {
    total += n;
    totalsuma.innerHTML = `Total: $${total}`;
}
btn1.addEventListener("click", ()=>{
    let art1 = document.createElement("li");
    art1.className = "cart-item";
    art1.innerHTML = `Art 1 - $10 <button class="remove-item">X</button>`;
    carrito.appendChild(art1);
    art1.querySelector(".remove-item").addEventListener("click", function() {
        art1.remove();
    });
    sumarTotal(10);
    console.log(total);
});
btn2.addEventListener("click", ()=>{
    let art2 = document.createElement("li");
    art2.className = "cart-item";
    art2.innerHTML = `Art 2 - $20 <button class="remove-item">X</button>`;
    carrito.appendChild(art2);
    art2.querySelector(".remove-item").addEventListener("click", function() {
        art2.remove();
    });
    sumarTotal(20);
    console.log(total);
});
btn3.addEventListener("click", ()=>{
    let art3 = document.createElement("li");
    art3.className = "cart-item";
    art3.innerHTML = `Art 3 - $30 <button class="remove-item">X</button>`;
    carrito.appendChild(art3);
    art3.querySelector(".remove-item").addEventListener("click", function() {
        art3.remove();
    });
    sumarTotal(30);
});
btn4.addEventListener("click", ()=>{
    let art4 = document.createElement("li");
    art4.className = "cart-item";
    art4.innerHTML = `Art 4 - $40 <button class="remove-item">X</button>`;
    carrito.appendChild(art4);
    art4.querySelector(".remove-item").addEventListener("click", function() {
        art4.remove();
    });
    sumarTotal(40);
});
btn5.addEventListener("click", ()=>{
    let art5 = document.createElement("li");
    art5.className = "cart-item";
    art5.innerHTML = `Art 5 - $50 <button class="remove-item">X</button>`;
    carrito.appendChild(art5);
    art5.querySelector(".remove-item").addEventListener("click", function() {
        art5.remove();
    });
    sumarTotal(50);
});
btn6.addEventListener("click", ()=>{
    let art6 = document.createElement("li");
    art6.className = "cart-item";
    art6.innerHTML = `Art 6 - $60 <button class="remove-item">X</button>`;
    carrito.appendChild(art6);
    art6.querySelector(".remove-item").addEventListener("click", function() {
        art6.remove();
    });
    sumarTotal(60);
});
btn7.addEventListener("click", ()=>{
    let art7 = document.createElement("li");
    art7.className = "cart-item";
    art7.innerHTML = `Art 7 - $70 <button class="remove-item">X</button>`;
    carrito.appendChild(art7);
    art7.querySelector(".remove-item").addEventListener("click", function() {
        art7.remove();
    });
    sumarTotal(70);
});
btn8.addEventListener("click", ()=>{
    let art8 = document.createElement("li");
    art8.className = "cart-item";
    art8.innerHTML = `Art 8 - $80 <button class="remove-item">X</button>`;
    carrito.appendChild(art8);
    art8.querySelector(".remove-item").addEventListener("click", function() {
        art8.remove();
    });
    sumarTotal(80);
});
btn9.addEventListener("click", ()=>{
    let art9 = document.createElement("li");
    art9.className = "cart-item";
    art9.innerHTML = `Art 9 - $90 <button class="remove-item">X</button>`;
    carrito.appendChild(art9);
    art9.querySelector(".remove-item").addEventListener("click", function() {
        art9.remove();
    });
    sumarTotal(90);
});
