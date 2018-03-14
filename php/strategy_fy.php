<?php
header('Content-Type:application/json;charset=UTF-8');
@$pageNum=$_REQUEST['pageNum'];
if($pageNum===null){
	$pageNum=1;
}else{
	$pageNum=intval($pageNum);
}
$output=[
	"recordCount" => 0,
	"pageCount" => 0,
	"pageSize" => 8,
	"pageNum" => $pageNum,
	"data" => null
];
require("init.php");

//$sql="SELECT * FROM strategy_list";
//$result=mysqli_query($conn,$sql);
//$list=mysqli_fetch_all($result,MYSQLI_ASSOC);
//echo json_encode($list);
$sql="SELECT COUNT(*) FROM strategy_list";
$result=mysqli_query($conn,$sql);
$output["recordCount"]=intval(mysqli_fetch_row($result)[0]);
$output["pageCount"]=ceil($output["recordCount"]/$output["pageSize"]);
$start=($output['pageNum']-1)*$output['pageSize'];//从第几行开始取
$count=$output['pageCount'];//一次最多读取的记录行数
$sql="SELECT * FROM strategy_list LIMIT $start,$count";
$result=mysqli_query($conn,$sql);
$output['data']=mysqli_fetch_all($result,1);
echo json_encode($output);