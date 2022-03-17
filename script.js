const hamburger = document.querySelector('#hamburger')

const navmenu = document.querySelector('#navmenu');




hamburger.addEventListener('click', () => {


    navmenu.classList.contains('display-nav') ? navmenu.classList.remove("display-nav") : navmenu.classList.add('display-nav')
})



const populateProducts = () => {
    const container = document.querySelector('.product-container');

    list.forEach((prod, i) => {
        container.innerHTML += createProduct(prod, i)
    })

}



const createProduct = (product, i) => {
    return (
        `<div class="prodCard">
        <img src="https://picsum.photos/200?${i}" alt="">
        <h2 class="prodTitle">${product.title}</h2>
        <p>${product.price}</p>
        <p>${product.text}</p>
    </div>`
    )
}




const list = [{
    title: "IVT 2022 Edition",
    text: "Best pump for small families",
    price: "200 000kr"
},
{
    title: "Steel Pump ltd edition",
    text: "Crazy pump for the bold",
    price: "2000kr"
},
{
    title: "Oil pump 300mtz",
    text: "Rugged pump",
    price: "2000kr"
},
{
    title: "Budget Pump",
    text: "Wont work to long, but cheap as f***",
    price: "1000kr"
},
{
    title: "Budget Pump 2",
    text: "Wont work to long, but cheap as f***",
    price: "900kr"
},
{
    title: "Budget Pump 3",
    text: "Wont work to long, but cheap as f***",
    price: "750kr"
}

]