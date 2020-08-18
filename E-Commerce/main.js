const cart = []
const products = [
    {
    name: 'Banana',
    price: 20,
    img: 'https://images.everydayhealth.com/images/diet-nutrition/how-many-calories-are-in-a-banana-1440x810.jpg?sfvrsn=be4504bc_0'
    },
    {
        name: 'Tomato',
        price: 40,
        img: 'https://cdn.shopify.com/s/files/1/0244/4961/3905/products/tomato@2x.jpg?v=1576807420'
    },
    {
        name: 'Watermelon',
        price: 80,
        img: 'https://m.media-amazon.com/images/I/91tCuetFu6L._AC_SS350_.jpg'
    },
    {
        name: 'Peach',
        price: 65,
        img: 'data:image/jpeg;base64,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'
    },
    {
        name: 'Apple',
        price: 32,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqe7KMScUoht6aStz-4misS-CwxN6wA3wMtA&usqp=CAU'
    },
]

const mainDiv = document.getElementById('main')
const aboutButton = document.getElementById("about")
const productsButton = document.getElementById("products")
const cartsButton = document.getElementById("cart")

aboutButton.onclick = function(){
    mainDiv.innerHTML = ''
    const aboutDiv = document.createElement('div')
    aboutDiv.setAttribute('id', 'about-div')
    const head = document.createElement('h1')
    aboutDiv.setAttribute('class', 'main-head')
    head.innerHTML = 'About Us'
    aboutDiv.appendChild(head)
    const content = document.createElement('p')
    content.setAttribute('id', 'about-par')
    content.innerHTML = 'Fruit-Clean is a non profit organization wich provides fruits to all places around the world. <br>Our concept is that each person around the world should get his fruits!.'
    aboutDiv.appendChild(content)
    mainDiv.appendChild(aboutDiv)
}

const createProduct = function(product){
    const newProduct = document.createElement('div')
    const imgProduct = document.createElement('div')
    imgProduct.setAttribute('class', 'product-images')
    imgProduct.setAttribute('id', product.name + '-image')
    imgProduct.innerHTML = `<img src="${product.img}" alt="${product.name}" width="100%">`
    newProduct.appendChild(imgProduct)
    const contentProduct = document.createElement('div')
    contentProduct.setAttribute('class', 'product-content')
    contentProduct.setAttribute('id', product.name + '-content')
    const productHead = document.createElement('h3')
    productHead.innerHTML = product.name
    newProduct.appendChild(productHead)
    const productPrice = document.createElement('p')
    productPrice.innerHTML = product.price
    newProduct.appendChild(productPrice)
    return newProduct
}

productsButton.onclick = function(){
    mainDiv.innerHTML = ''
    const productDiv = document.createElement('div')
    productDiv.setAttribute('id', 'product-div')
    const head = document.createElement('h1')
    head.setAttribute('class', 'main-head')
    head.innerHTML = 'Our Products'
    productDiv.appendChild(head)
    const content = document.createElement('div')
    content.setAttribute('id', 'products-content')
    for(product of products){
        content.appendChild(createProduct(product))
        console.log(createProduct(product))
    }
    productDiv.appendChild(content)
    mainDiv.appendChild(productDiv)

}