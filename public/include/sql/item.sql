create table item
(
	item_no int not null primary key auto_increment,
	item_name varchar(50),
	item_magazine_category varchar(50),
	item_category varchar(50),
	item_contents varchar(100),
	item_photo varchar(100),
	item_size varchar(50),
	item_link varchar(50),
	item_price varchar(50),
	item_stock int,
	item_photo1 varchar(100),
	item_photo2 varchar(100),
	item_photo3 varchar(100),
	item_photo4 varchar(100),
	item_photo5 varchar(100)
)

create table item(
	item_no int not null primary key auto_increment,
	item_name varchar(50),
	item_category varchar(50),
	item_conetents varchar(50),
	item_size varchar(50),
	item_link varchar(50),
	item_price varchar(50),
	item_stock int,
	item_photo_main varchar(100),
	item_photo1 varchar(100),
	item_photo2 varchar(100),
	item_photo3 varchar(100),
	item_photo4 varchar(100),
	item_photo5 varchar(100)
)

// 언어 인코딩 변경

set character set euckr; 


insert into item(item_name,item_category,item_price,item_stock,item_photo_main) values('루시엘_원피스',
'bracelet','35000',100,'armoire_678.jpg');



	
	