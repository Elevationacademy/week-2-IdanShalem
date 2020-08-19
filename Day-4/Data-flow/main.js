const posts = [
    {name: 'Idan', text: 'Hello'},
    {name: 'Adi', text: 'YoYo'},
    {name: 'Coral', text: 'Ha-Ha-Ha'}
]


const render = function(){
    $('#posts').empty()
    for (let post of posts){
        $('#posts').append(`<div class='post' data-name='${post.name}'>${post.name}: ${post.text}</div>`)
    }
}

render()

$('#submit').on('click', function(){
    const name = $('#name').val()
    const text = $('#text').val()
    posts.push({name, text})
    $('#name').val('')
    $('#text').val('')
    render()
})

$('#posts').on('click', '.post', function(){
    const i = posts.findIndex(p => p.name === $(this).data().name)
    if(i >= 0){
        posts.splice(i, 1)
    }
    render()
})