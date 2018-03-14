var g_rgHeroPickerData=[];
var g_bHeroPickerDataReady = false;
var hid;
var roleArray=[];
$(function(){
		if($('.heroPickerIconLink').length){
			g_bHeroPickerDataReady = true; $('#heroBioLoading').hide(); $('#heroBioDynamic').show(); $('#heroBioName').html('请选择英雄');
			$('.heroPickerIconLink').hover(
			// Mouse over
			function( e )
			{
				$(this).parent("li").css("z-index","10");
				hid=$(this).attr('data-triggle')-1;
				HeroIconHover( e.currentTarget.id, true );
			},
			// Mouse out
			function( e )
			{
				$(".hero_list li").css("z-index","2");
				HeroIconHover( e.currentTarget.id, false );
			})
		}
		$.ajax({
			type:'GET',
			url:'../php/heropick.php',
			success:function(list){
//				console.log(arguments);
//				console.log(list[0].role);
				for(var i=0;i<list.length;i++){
					g_rgHeroPickerData.push(list[i]);
				}
				console.dir(g_rgHeroPickerData);
				$('#filterRole').on('change',function(){
					var strRoleFilter = $('#filterRole option:selected').val();
					console.log(strRoleFilter);
					$('.heroPickerIconLink').each(function () {
						console.log($(this));
						if (strRoleFilter !== "" && $.inArray( strRoleFilter, roleArray ) == -1) {
							$(this).removeClass('filterMatchedHero');
							$(this).addClass('filterUnmatchedHero');
							$(`#filterName option[value="${hid}"]`).attr('disabled', true).css('color', '#444444');
						}
					})
				});
			}
		})
})
function HeroIconHover( heroIconLink, bShow ){//实现英雄简介框的名字和角色输入，并且让大图显示
	if ( !g_bHeroPickerDataReady )
	return;
	heroName = heroIconLink.slice( 5 );
	if ( bShow )
	{
		// add bio
		$('#heroBioName').html( g_rgHeroPickerData[hid].iname );
		// build role string
		roleText = '<span class="bioTextAttack">' + g_rgHeroPickerData[hid].iatk + '</span> - ' + g_rgHeroPickerData[hid].role;
		$('#heroBioRoles').html( roleText );
		//console.dir(g_rgHeroPickerData[hid].role.split(" - "));
		roleArray=g_rgHeroPickerData[hid].role.split(" - ");
		//console.log(roleArray.join(""));
		// show hover icon
		$('#hover_'+heroName).show();
	}
	else
	{
		// dont clear text above, but hide hover icon
		$('#hover_'+heroName).hide();
	}
}
//过滤器选择英雄
//$('#filterRole').on('change',function(){
//	var strRoleFilter = $('#filterRole option:selected').val();
//	console.log(strRoleFilter);
//	console.log(roleArray);
//	$('.heroPickerIconLink').each(function () {
//		if (strRoleFilter !== "" && $.inArray( strRoleFilter, roleArray ) == -1) {
//			$(this).removeClass('filterMatchedHero');
//			$(this).addClass('filterUnmatchedHero');
//			$(`#filterName option[value="${hid}"]`).attr('disabled', true).css('color', '#444444');
//		}
//	})
//});
//function updateFilters(){
//
//	if(!g_bHeroPickerDataReady){
//		return;
//	}
//	var strRoleFilter = $('#filterRole option:selected').val();
//	var strAttackFilter = $('#filterAttack option:selected').val();
//	var g_rgDisabledHeroes=[];
//	$('.heroPickerIconLink').each(function () {
//		if(strRoleFilter!=="" && roleArray.indexOf(strRoleFilter)==-1){
//			$(this).removeClass( 'filterMatchedHero' );
//			$(this).addClass( 'filterUnmatchedHero' );
//			$(`#filterName option[value="hid"]`).attr('disabled', true).css('color','#444444');
//			g_rgDisabledHeroes.push( hid );
//		}
//	})
//}
//updateFilters();








//过滤器
//function updateFilters()
//{
//	if ( !g_bHeroPickerDataReady )
//		return;
//	strAttackFilter = $('#filterAttack option:selected').val();
//	strRoleFilter = $('#filterRole option:selected').val();
//	strNameFilter = $('#filterName option:selected').val();
//	g_rgDisabledHeroes = [];
//	//roleArray=g_rgHeroPickerData[hid].role.split(" - ");
//	//console.dir(roleArray);
//	$('.heroPickerIconLink').each(
//		function ()
//		{
//			var id1=hid+1;
//			//heroName = $(this).attr('id').slice( 5 );
//			if ( strAttackFilter != '' && g_rgHeroPickerData[id1].iatk != strAttackFilter )
//			{
//				// attack filter set, not matched
//				$(this).removeClass( 'filterMatchedHero' );
//				$(this).addClass( 'filterUnmatchedHero' );
//				$('#filterName option[value="'+id1+'"]').attr('disabled', true).css('color','#444444');
//				g_rgDisabledHeroes.push( id1 );
//			}
//			else // empty or matched attack filter
//			{
//				if ( strRoleFilter != '' && $.inArray( strRoleFilter, roleArray ) == -1 )
//				{
//					// role filter set, not matched
//					$(this).removeClass( 'filterMatchedHero' );
//					$(this).addClass( 'filterUnmatchedHero' );
//					$('#filterName option[value="'+id1+'"]').attr('disabled', true).css('color','#444444');
//					g_rgDisabledHeroes.push( id1 );
//				}
//				else // empty or matched role filter
//					{
//						if ( strNameFilter != '' && g_rgHeroPickerData[hid].iname != strNameFilter )
//						{
//							// name filter set, not matched
//							$(this).removeClass( 'filterMatchedHero' );
//							$(this).addClass( 'filterUnmatchedHero' );
//
//							// if name filter is the only one active, don't disable the other names in the dropdown
//							if ( strAttackFilter != '' || strRoleFilter != '' )
//							{
//								$('#filterName option[value="'+id1+'"]').attr('disabled', true).css('color','#444444');
//							}
//							else
//							{
//								$('#filterName option[value="'+id1+'"]').attr('disabled', false).css('color','#999999');
//							}
//							g_rgDisabledHeroes.push( id1 );
//						}
//					else
//					{
//						// filter matched
//						$(this).removeClass( 'filterUnmatchedHero' );
//						$(this).addClass( 'filterMatchedHero' );
//						$('#filterName option[value="'+id1+'"]').attr('disabled', false).css('color','#999999');
//					}
//				}
//			}
//		}
//	);
//	if ( $.inArray( strNameFilter, g_rgDisabledHeroes ) != -1 )
//	{
//		$('#filterName').prop( 'selectedIndex', 0 );
//		return updateFilters();
//	}
//
//}