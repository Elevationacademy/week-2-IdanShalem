// Ex-1 + Ex-2
$('#submit-name').click(function(){
    $('#names').append(`<li class='name'>${$('#name-input').val()}</li>`)
    $('#name-input').val('')
})

$('#names').on('click', '.name', function(){
    $(this).remove()
})

// Ex-3
$('body').append(`<div id=container></div>`)
const container = $('#container')
container.append(`<div class='boxes' id='b1'</div>`)
container.append(`<div class='boxes' id='b2'</div>`)


$('.boxes').hover(function(){
    $('.boxes').css('background-color', 'red')
    $(this).css('background-color', '#8e44ad')
})


// Ex-4
$('.item').click(function(){
    const inStock = $(this).data().instock
    console.log(inStock)
    if(inStock){
        $('#cart').append(`<div class=cart-item>${$(this).text()}</div>`)
    }
    $('#cart').on('click', '.cart-item', function(){
        $(this).remove()
    })
})

// Ex-5
const fruits = [
    { name: "Orange", color: "orange" },
    { name: "Banana", color: "yellow" },
    { name: "Coconut", color: "brown" },
    { name: "Kiwi", color: "brown" },
    { name: "Lemon", color: "yellow" },
    { name: "Cucumber", color: "green" },
    { name: "Persimmon", color: "orange" },
    { name: "Pumpkin", color: "orange" }
]

for(let fruit of fruits){
    $('#basket').append(`<div class='${fruit.color}'>${fruit.name}</div>`)
}

//extension
for(let span of $('span')){
    $(span).addClass('picker')
    $(span).css('background-color', `${$(span).data().color}`)
}

$('#colors').on('click', '.picker', function(){
    $('.box').css('background-color', `${$(this).data().color}`)  
})