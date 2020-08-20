const compurIdArr = []

$('.generator').on('click', function(){
    $processor = $(this).closest('.processor')
    $computer = $processor.closest('.computer')
    $bus = $computer.find('.BUS')
    console.log(`proccesor id - ${$processor.attr('id')} | computer id - ${$computer.data().id} | BUS - ${$bus.text()}`)
    compurIdArr.push({cmp_id: $computer.data().id})
})

$('.validator').on('click', function(){
    $computer = $(this).closest('.computer')
    $generator = $computer.find('.generator')
    $mb = $computer.find('.MB')
    $qr = $computer.find('.QR')
    console.log(`generator - ${$generator.text()} | MB - ${$mb.text()} | QR - ${$qr[0].innerHTML}, ${$qr[1].innerHTML}`)
})