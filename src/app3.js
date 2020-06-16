import './app3.css'
import $ from 'jquery'

const $square = $('#app3 .square')
$square.on('click',()=>{
    $square.toggleClass('active')//toggleClass意思是如果有active就移除，没有就添加
})