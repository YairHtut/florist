let btn1 = document.getElementById('all');
let btn2 = document.getElementById('bouquet');
let btn3 = document.getElementById('box');
let btn4 = document.getElementById('shelf');
let btn5 = document.getElementById('basket');
let btn6 = document.getElementById('gift');


btn1.onclick = function abc(){
	gallery1.style.display = 'grid';
	gallery2.style.display = 'none';
	gallery3.style.display = 'none';
	gallery4.style.display = 'none';
	gallery5.style.display = 'none';
	gallery6.style.display = 'none';
};
btn2.onclick = function abc(){
	gallery1.style.display = 'none';
	gallery2.style.display = 'grid';
	gallery3.style.display = 'none';
	gallery4.style.display = 'none';
	gallery5.style.display = 'none';
	gallery6.style.display = 'none';
};
btn3.onclick = function abc(){
	gallery1.style.display = 'none';
	gallery2.style.display = 'none';
	gallery3.style.display = 'grid';
	gallery4.style.display = 'none';
	gallery5.style.display = 'none';
	gallery6.style.display = 'none';
};
btn4.onclick = function abc(){
	gallery1.style.display = 'none';
	gallery2.style.display = 'none';
	gallery3.style.display = 'none';
	gallery4.style.display = 'grid';
	gallery5.style.display = 'none';
	gallery6.style.display = 'none';
};
btn5.onclick = function abc(){
	gallery1.style.display = 'none';
	gallery2.style.display = 'none';
	gallery3.style.display = 'none';
	gallery4.style.display = 'none';
	gallery5.style.display = 'grid';
	gallery6.style.display = 'none';
};
btn6.onclick = function abc(){
	gallery1.style.display = 'none';
	gallery2.style.display = 'none';
	gallery3.style.display = 'none';
	gallery4.style.display = 'none';
	gallery5.style.display = 'none';
	gallery6.style.display = 'grid';
};

let nav_show = document.getElementsByClassName('nav_show')[0];
let nav_class  = document.getElementsByClassName('nav_ul')[0];

	nav_show.onclick = function nav(){
		nav_class.classList.toggle('nav_hide');
		nav_show.classList.toggle('nav_color');
	}






