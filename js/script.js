const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const sidebar = document.querySelector(".sidebar");
const menuDashboard = document.querySelector("#dashboard");
const menuClients = document.querySelector("#clients");
const clientsALL = document.querySelector(".clients-all");
const menuProducts = document.querySelector("#products");
const productsALL = document.querySelector(".products-all");
const productsALL2 = document.querySelector(".products-all2");
const menuSales = document.querySelector("#sales");
const salesALL = document.querySelector(".sales-all");
const menuOrders = document.querySelector("#orders");
const orderALL = document.querySelector(".orders-all");
const menuStore = document.querySelector("#store");
const main = document.querySelector(".main");
const insights = document.querySelector(".insights");
const recentOrders = document.querySelector(".recent-orders");
const containerTable = document.querySelector(".container-table");
const availableProduts = document.querySelector(".available-produts");
const dash = document.querySelector(".dash");
const cli = document.querySelector(".cli");
const pro = document.querySelector(".pro");
const sal = document.querySelector(".sal");
const ord = document.querySelector(".ord");



// sidebar.querySelector('a:nth-child(4)').classList.toggle('active');
// sidebar.querySelector('a:nth-child(6)').classList.toggle('active');

// Show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = "block";
})

// Close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = "none";
})

// Change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

// Delete table history
function apagar(id){
    let elemento = document.getElementById(id);
    elemento.replaceChildren();
}

// DASHBOARD
menuDashboard.addEventListener('click', () => {
    menuDashboard.classList.add('active');
    menuClients.classList.remove('active');
    menuProducts.classList.remove('active');
    menuSales.classList.remove('active');
    menuOrders.classList.remove('active');
})

// Fill orders in table CLIENTS
clientsALL.addEventListener('click', () =>{
    client();
})
menuClients.addEventListener('click', () => {
    client();
})
function client(){
    apagar('tbody_client');
    setTimeout(() =>{
        console.log("cheguei");
    }, 10000)
    menuClients.classList.add('active');
    menuDashboard.classList.remove('active');
    menuProducts.classList.remove('active');
    menuSales.classList.remove('active');
    menuOrders.classList.remove('active');
    dash.style.display = "none";    
    pro.style.display = "none";
    sal.style.display = "none";
    ord.style.display = "none";
    cli.style.display = "table";
    containerTable.style.height = "35rem";
    orderALL.style.visibility = "hidden";
    insights.style.display = "none";
    availableProduts.style.display = "none";
    main.style.width = "140%";
    recentOrders.querySelector('h2').textContent = "Clients";
    Clients.forEach(order => {
        const tr = document.createElement('tr');
        const trContent = `
                            <td>${order.Client}</td> 
                            <td>${order.Cpf}</td>
                            <td>${order.Email}</td>
                            <td>${order.Address}</td>
                            `;
                            // <td> Célula de dados
    tr.innerHTML = trContent;
    cli.querySelector('table tbody').appendChild(tr);
    })
}

// Fill orders in table PRODUCTS
productsALL.addEventListener('click', () =>{
    product();
})
productsALL2.addEventListener('click', () =>{
    product();
})
menuProducts.addEventListener('click', () => {
    product();
})
function product(){
    apagar('tbody_product');
    menuProducts.classList.add('active');
    menuDashboard.classList.remove('active');
    menuClients.classList.remove('active');
    menuSales.classList.remove('active');
    menuOrders.classList.remove('active');
    dash.style.display = "none";
    cli.style.display = "none";
    sal.style.display = "none";
    ord.style.display = "none";
    pro.style.display = "table";
    containerTable.style.height = "35rem";
    orderALL.style.visibility = "hidden";
    insights.style.display = "none";
    availableProduts.style.display = "none";
    main.style.width = "140%";
    recentOrders.querySelector('h2').textContent = "Products";
    Products.forEach(order => {
        const tr = document.createElement('tr');
        const trContent = `
                            <td>${order.Code}</td> 
                            <td>${order.Description}</td>
                            <td>${order.Quantity}</td>
                            <td>${order.Value}</td>
                            `;
                            // <td> Célula de dados
    tr.innerHTML = trContent;
    pro.querySelector('table tbody').appendChild(tr);
    })
}

// Fill orders in table Sales
salesALL.addEventListener('click', () => {
    sale();
})
menuSales.addEventListener('click', () => {
    sale();
})
function sale (){
    apagar('tbody_sale');
    menuSales.classList.add('active');
    menuDashboard.classList.remove('active');
    menuClients.classList.remove('active');
    menuProducts.classList.remove('active');
    menuOrders.classList.remove('active');
    dash.style.display = "none";
    cli.style.display = "none";
    pro.style.display = "none";
    ord.style.display = "none";
    sal.style.display = "table";
    containerTable.style.height = "35rem";
    orderALL.style.visibility = "hidden";
    insights.style.display = "none";
    availableProduts.style.display = "none";
    main.style.width = "140%";
    recentOrders.querySelector('h2').textContent = "Sales";
    Sales.forEach(order => {
        const tr = document.createElement('tr');
        const trContent = `
                            <td>${order.SaleNumber}</td> 
                            <td>${order.Date}</td>
                            <td>${order.Client}</td>
                            <td>${order.Product}</td>
                            <td>${order.Warranty}</td>
                            <td>${order.Defect}</td>
                            `;
        // <td> Célula de dados
        tr.innerHTML = trContent;
        sal.querySelector('table tbody').appendChild(tr);
    })
}
    
// Fill orders in table ORDERS
orderALL.addEventListener('click', ()=> {
    order();
})
menuOrders.addEventListener('click', () => {
    order();
})
function order(){
    apagar('tbody_order');
    menuOrders.classList.add('active');
    menuDashboard.classList.remove('active');
    menuClients.classList.remove('active');
    menuProducts.classList.remove('active');
    menuSales.classList.remove('active');
    dash.style.display = "none";
    cli.style.display = "none";
    sal.style.display = "none";
    sal.style.display = "none";
    ord.style.display = "table";
    containerTable.style.height = "35rem";
    orderALL.style.visibility = "hidden";
    insights.style.display = "none";
    availableProduts.style.display = "none";
    main.style.width = "140%";
    recentOrders.querySelector('h2').textContent = "Orders";

    const test = document.createElement('th');
    const testContent = `<th>Defect</th>`;
    test.innerHTML = testContent;
    recentOrders.querySelector('table thead tr').appendChild(test);
    Orders.forEach(order => {
        const tr = document.createElement('tr');
        const trContent = `
                            <td>${order.OrderNumber}</td> 
                            <td>${order.Date}</td>
                            <td>${order.Client}</td>
                            <td>${order.Product}</td>
                            <td>${order.Defect}</td>
                            `;
                            // <td> Célula de dados
    tr.innerHTML = trContent;
    ord.querySelector('table tbody').appendChild(tr);
    })
}

// Fill orders in table RECENT ORDERS
function ordemCrescente(a, b) {
    return a.Date > b.Date;
}
for (let i = 0; i < 5; i++) {
    const tr = document.createElement('tr');
    const trContent = `
                        <td>${Orders[i].OrderNumber}</td> 
                        <td>${Orders.sort(ordemCrescente)[i].Date}</td>
                        <td>${Orders[i].Client}</td>
                        <td>${Orders[i].Defect}</td>
                        `;
                        // <td> Célula de dados
    tr.innerHTML = trContent;
    recentOrders.querySelector('table tbody').appendChild(tr);
}

// Fill orders in table AVALIABLE PRODUCTS
for (let i = 0; i < 9; i++) {
    const tr = document.createElement('tr');
    const trContent = `
                        <td>${Products[i].Code}</td> 
                        <td>${Products[i].Description}</td>
                        <td>${Products[i].Quantity}</td>
                        `;
                        // <td> Célula de dados
    tr.innerHTML = trContent;
    availableProduts.querySelector('table tbody').appendChild(tr);
}





//LOGOUT
function close_window() {
    if (confirm("Close Window?")) {
      window.location.href = "https://google.com/";
    }
}



