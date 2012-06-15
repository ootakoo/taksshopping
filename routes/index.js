
/*
 * GET home page.
 */
mysql = require('mysql');

var client= mysql.createClient({
	user:'root',
	password:'root',
	database:'shoppingMall'
})

exports.index = function(req, res){
	client.query('SELECT * FROM item WHERE item_category=?',
			['bracelet'],function(error,result){
		res.render('index', { 
			data: result
			
			
		})	
	});
	
  
};

exports.memJoin=function(req,res){
	res.render('memJoin',{title:'MemJoin'})
};
