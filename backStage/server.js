const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const uuid = require('node-uuid');

var server = express();

//创建application/json解析
var jsonParser = bodyParser.json();
//创建application/x-www-form-urlencoded
var dataBody = bodyParser.urlencoded({extended:false});
var db =  mysql.createConnection({host:'localhost', user:'root', password:'0000', database:'fl'});

//授权登录
server.post('/login',jsonParser,function(req,res){
	let userId = uuid.v1();
	let reqData = req.body;
	let sql = "SELECT * FROM `user_table` WHERE nickName ='"+reqData.nickName+"' and city ='"+reqData.city+"' and gender ='"+reqData.gender+"'";
	db.query(sql,function(err,data){
		if(err) throw err;
		else{
			if(data.length<1){
				let addSql = "INSERT INTO `user_table` (id,nickName,gender,city) VALUES ('"+userId+"','"+reqData.nickName+"','"+reqData.gender+"','"+reqData.city+"')";
				// console.log(addSql)
				db.query(addSql,function(err,data){
					if(err) throw err;
					else{
						let date = new Date();
						let time = date.getTime();
						let timeSql = "INSERT INTO `regtime_table`(id,time,frequency,headPhoto,nickName) VALUES ('"+userId+"',"+time+",0,'"+reqData.avatarUrl+"','"+reqData.nickName+"')";						
						// console.log(timeSql)
						db.query(timeSql,function(err,addData){
							if(err) throw err;
							else{
								let showSql = "SELECT * FROM `user_table` WHERE id='"+userId+"'";
								db.query(showSql,function(err,userData){
									res.send({ok:true,msg:"注册成功返回登录!",data:userData[0]}).end();
								})
							}
						})
					}
				})
			}else{
				res.send({ok:true,msg:"登录成功!",data:data[0]}).end();
			}
		}
	})
})
//获取my信息
server.post('/info',jsonParser,function(req,res){
	let userId = req.body.userId; 
	let infoSql = "SELECT * FROM `regtime_table` WHERE id='"+userId+"'";
	db.query(infoSql,function(err,timeData){
		if(err) throw err;
		else{
			if(timeData.length<1){
				res.send({ok:false,msg:"数据异常!"}).end();
			}else{
				res.send({ok:true,msg:"数据获取成功!",data:timeData[0]}).end();
			}
		}
	})
})
//获取身体健康指标
server.post('health',jsonParser,function(req,res){
	let reqData = req.body;
	
})


// PC端管理后台
server.post('adminLogin',jsonParser,function(req,res){
	
})
server.listen(8080);