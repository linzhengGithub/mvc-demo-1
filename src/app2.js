import './app2.css'
import $ from 'jquery'

const $tabBar = $('#app2 .tab-bar' )
const $tabContent = $('#app2 .tab-content' )

$tabBar.on('click','li',(e)=>{
    const $li = $(e.currentTarget)//点击的是li而不是里面的span
    $li.addClass('selected')
    .siblings().removeClass('selected')
    //找到li，再li上面添加selected，再找到他的兄弟元素，移除selected

    const index = $li.index()//被点击的li是第几个

    $tabContent.children()
    .eq(index).addClass('active')
    .siblings().removeClass('active')
    //找到它的儿子元素，第index个添加active，找到他的兄弟元素，移除active
})
$tabBar.children().eq(0).trigger('click')//默认它的第一个儿子元素被点击
