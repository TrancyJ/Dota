/**
 * Created by uid on 2016/12/10.
 */
$(function(){
    $('header').load('../php/header.php');
    $('footer').load('../php/footer.php');
});
loadProductByPage(1);
function loadProductByPage(pageNum) {
    //$.ajax({
    //    type: 'GET',
    //    url: "../php/strategy_fy.php",
    //    data:{pageNum:pageNum},
    //    success: function (list) {
    //        console.log(arguments);
    //        $("div.btn_more").on('click', 'a', function (e) {
    //            e.preventDefault();
    //            if ($(this).attr('title') === "上一页") {
    //                loadProductByPage(list.pageNum - 1);
    //            } else if ($(this).attr('title') === "下一页") {
    //                if (list.pageNum < 7) {
    //                    loadProductByPage(list.pageNum + 1);
    //                }
    //            }
    //        });
    //    }
    //});
    $.ajax({
        type:'GET',
        url:"../php/strategy_fy.php",
        data:{pageNum:pageNum},
        success:function(list){
            console.log(arguments);
            var html='';
            for(var i=0;i<list.data.length;i++){
                var c=list.data[i];
                html+=`
                <li class="hd_ps hd_pic">
                    <div class="img_left">
                        <a href="" target="_blank">
                            <img src="${c.lpic}"/>
                        </a>
                    </div>
                    <div class="title_right">
                        <a href="" class="enter_title" target="_blank">${c.lname}</a>
                        <h3></h3>
                        <p>${c.ltext}</p>
                        <a href="" class="enter_event" target="_blank">${c.lbtn}</a>
                    </div>
                </li>
            `
            }
            $("div.hd_li>ul").html(html);

            var html='';
            switch (list.pageNum) {
                case 1:
                case 2:
                case 3:
                    html += `<li class='nav nav-prev'>1</li>`;
                    html += `<li class='nav nav-prev'>2</li>`;
                    html += `<li class='nav nav-prev'>3</li>`;
                    html += `<li class='nav nav-prev'>4</li>`;
                    html += `<li class='nav nav-prev'>...</li>`;
                    html += `<li class='nav nav-prev'>${list.pageCount}</li>`;
                    break;
                //case 4:
                //    html += `<li class='nav nav-prev'>${list.pageNum - 2}</li>`;
                //    html += `<li class='nav nav-prev'>...</li>`;
                //    html += `<li class='nav nav-prev'>${list.pageNum}</li>`;
                //    html += `<li class='nav nav-prev'>${list.pageNum + 1}</li>`;
                //    html += `<li class='nav nav-prev'>${list.pageNum + 2}</li>`;
                //    html += `<li class='nav nav-prev'>${list.pageCount}</li>`;
                //    break;
                case 4:
                case 5:
                case 6:
                case 7:
                    html += `<li class='nav nav-prev'>1</li>`;
                    html += `<li class='nav nav-prev'>...</li>`;
                    html += `<li class='nav nav-prev'>4</li>`;
                    html += `<li class='nav nav-prev'>5</li>`;
                    html += `<li class='nav nav-prev'>6</li>`;
                    html += `<li class='nav nav-prev'>7</li>`;
                    break;
            }
            $("div.btn_more>ul").html(html);


        }
    })
}
$("div.btn_more>ul").on('click','li',function(){
    var n=$(this).html();
    //console.log(n);
    loadProductByPage(n);

})
//$("div.btn_more").on('click','a',function(e,n){
//    e.preventDefault();
//    if($(this).attr('title')==="上一页"){
//        loadProductByPage(n-1);
//    }else if($(this).attr('title')==="下一页"){
//        if(n<7) {
//            loadProductByPage(n + 1);
//        }
//    }
//})
//$.ajax({
//    type: 'GET',
//    url: "../php/strategy_fy.php",
//    success: function (list) {
//        console.log(arguments);
//        $("div.btn_more").on('click', 'a', function (e) {
//            e.preventDefault();
//            if ($(this).attr('title') === "上一页") {
//                loadProductByPage(list.pageNum - 1);
//            } else if ($(this).attr('title') === "下一页") {
//                if (list.pageNum < 7) {
//                    loadProductByPage(list.pageNum + 1);
//                }
//            }
//        });
//    }
//});