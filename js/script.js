const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const sidebar = document.querySelector(".sidebar");
const menuDashboard = document.querySelector("#dashboard");
const menuClients = document.querySelector("#clients");
const menuProducts = document.querySelector("#products");
const menuSales = document.querySelector("#sales");
const menuOrders = document.querySelector("#orders");
const menuStore = document.querySelector("#store");
const main = document.querySelector(".main");
const insights = document.querySelector(".insights");
const recentOrders = document.querySelector(".recent-orders");
const availableProduts = document.querySelector(".available-produts");

const orderALL = document.querySelector(".orders-all");

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

// Reset Page
reset = function(){
    
}

// Delete table history
apagar = function(){
    let td = recentOrders.querySelectorAll('td');
    for(item in td) 
        if(td[item].parentNode) td[item].parentNode.removeChild(td[item]);
    }

menuDashboard.addEventListener('click', () => {
    menuDashboard.classList.toggle('active');
})

// Fill orders in table CLIENTS
menuClients.addEventListener('click', () => {
    apagar();
    menuClients.classList.toggle('active');
    orderALL.style.visibility = "hidden";
    insights.style.display = "none";
    availableProduts.style.display = "none";
    main.style.width = "140%";
    //TODO: verificar recursive
    // if(style = "@media(min-width:2400px)"){
    //     main.style.width = "110%";
    // } else if (style === "@media(min-width:1400px)"){
    //     main.style.width = "120%";
    // } else if(style === "@media(min-width:1201px)"){
    //     main.style.width = "140%";
    // } else if (style === "@media(max-width:1200px)"){
    //     main.style.width = "100%";
    // } else if (style == "@media(max-width:768px)"){
    //     main.style.width = "100%";
    // } 
    recentOrders.querySelector('h2').textContent = "Clients";
    recentOrders.querySelector('th:nth-child(1)').textContent = "Client";
    recentOrders.querySelector('th:nth-child(2)').textContent = "CPF";
    recentOrders.querySelector('th:nth-child(3)').textContent = "Email";
    recentOrders.querySelector('th:nth-child(4)').textContent = "Endereco";
    Clients.forEach(order => {
        const tr = document.createElement('tr');
        const trContent = `
                            <td>${order.Client}</td> 
                            <td>${order.Cpf}</td>
                            <td>${order.Email}</td>
                            <td>${order.Endereco}</td>
                            `;
                            // <td> Célula de dados
    tr.innerHTML = trContent;
    recentOrders.querySelector('table tbody').appendChild(tr);
    })
})

// Fill orders in table PRODUCTS
menuProducts.addEventListener('click', () => {
    apagar();
    menuProducts.classList.toggle('active');
    orderALL.style.visibility = "hidden";
    insights.style.display = "none";
    availableProduts.style.display = "none";
    // main.style.width = "140%";
    recentOrders.querySelector('h2').textContent = "Products";
    recentOrders.querySelector('th:nth-child(1)').textContent = "Code";
    recentOrders.querySelector('th:nth-child(2)').textContent = "Description";
    recentOrders.querySelector('th:nth-child(3)').textContent = "Quantity";
    recentOrders.querySelector('th:nth-child(4)').textContent = "Value";
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
    recentOrders.querySelector('table tbody').appendChild(tr);
    })
})

// Fill orders in table Sales
menuSales.addEventListener('click', () => {
    apagar();
    menuSales.classList.toggle('active');
    orderALL.style.visibility = "hidden";
    insights.style.display = "none";
    availableProduts.style.display = "none";
    main.style.width = "140%";
    recentOrders.querySelector('h2').textContent = "Sales";
    recentOrders.querySelector('th:nth-child(1)').textContent = "Sale Number";
    recentOrders.querySelector('th:nth-child(2)').textContent = "Date";
    recentOrders.querySelector('th:nth-child(3)').textContent = "Client";
    recentOrders.querySelector('th:nth-child(4)').textContent = "Product";
    Sales.forEach(order => {
        const tr = document.createElement('tr');
        const trContent = `
                            <td>${order.SaleNumber}</td> 
                            <td>${order.Date}</td>
                            <td>${order.Quantity}</td>
                            <td>${order.Product}</td>
                            <td>${order.Warranty}</td>
                            <td>${order.Defect}</td>
                            `;
                            // <td> Célula de dados
    tr.innerHTML = trContent;
    recentOrders.querySelector('table tbody').appendChild(tr);
    })
})

// Fill orders in table ORDERS
menuOrders.addEventListener('click', () => {
    apagar();
    menuOrders.classList.toggle('active');
    orderALL.style.visibility = "hidden";
    insights.style.display = "none";
    availableProduts.style.display = "none";
    main.style.width = "140%";
    recentOrders.querySelector('h2').textContent = "Orders";
    recentOrders.querySelector('th:nth-child(1)').textContent = "OrderNumber";
    recentOrders.querySelector('th:nth-child(2)').textContent = "Date";
    recentOrders.querySelector('th:nth-child(3)').textContent = "Client";
    recentOrders.querySelector('th:nth-child(4)').textContent = "Product";

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
    recentOrders.querySelector('table tbody').appendChild(tr);
    })
})

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

//TODO: ver os redirecionamentos dos SHOW ALL 
$('.orders-all').trigger('#orders');