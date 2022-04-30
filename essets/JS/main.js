var listItems = [];

var word;
var pronounce;
var type;
var means;

var tableBody = document.querySelector(".tableBody");

const showData = (data) => {
	console.log(data, 'data');
	var listTxt = '';
	for (let i = 0; i < listItems.length; i++) {
		listTxt += '<tr>' + '<th>' + (i + 1) + '</th>'
		+ '<th>' + listItems[i].word + '</th>'
		+ '<th>' + listItems[i].pronounce + '</th>'
		+ '<th>' + listItems[i].type + '</th>'
		+ '<th>' + listItems[i].means + '</th>'
		'</tr>'
	}
	tableBody.innerHTML = listTxt;

}

const addData = () => {
	Word = document.querySelector('#word').value;
	Pronounce = document.querySelector('#pronounce').value;
	Type = document.querySelector('#type').value;
	Means = document.querySelector('#means').value;

	console.log(Word);
	console.log(Pronounce);
	console.log(Type);
	console.log(Means);

	var result = {
		word: Word,
		pronounce: Pronounce,
		type: Type,
		means: Means,
	};
	
	listItems.push(result);
	document.querySelector('.loading').classList.add('loadingActive');

	setTimeout(() => {
		document.querySelector('#word').value = '';
		document.querySelector('#pronounce').value = '';
		document.querySelector('#type').value = '';
		document.querySelector('#means').value = '';
		document.querySelector('.modal-form').classList.remove('activeModal');
		document.querySelector('.main-modal').classList.remove('showMainModal');
		document.querySelector('.overlay').classList.remove('classShowOver');
		document.querySelector('.loading').classList.remove('loadingActive');
	}, 1000)



	showData(listItems)
}

showData(listItems)

// button open task bar

const toggle_btn = document.getElementById("toggle-nav");
const nav = document.getElementById("nav");
const close_btn = document.getElementById("close-nav");

toggle_btn.addEventListener("click", openNav);
close_btn.addEventListener("click", closeNav);

function openNav() {
    nav.classList.add("active");
}

function closeNav() {
    nav.classList.remove("active");
}

// button add

const Modal = {
	init: function() {
		this.clickshowForm('.btn-add','.modal-form','activeModal','.overlay','classShowOver', '.main-modal' , 'showMainModal');
		this.clickcloseForm('#btn-cancel','.modal-form','activeModal','.overlay','classShowOver', '.main-modal' , 'showMainModal');
	},
	clickshowForm: function(btnAdd,formModal,classShowForm,overlay,classShowOver,formAdd ,showClassFormAdd){
		let buttonAdd = document.querySelector(btnAdd);
		let modalForm = document.querySelector(formModal);
		let Overlay = document.querySelector(overlay);
		let mainForm = document.querySelector(formAdd);

		buttonAdd.addEventListener('click' , () => {
			modalForm.classList.add(classShowForm);
			Overlay.classList.add(classShowOver);
			mainForm.classList.add(showClassFormAdd);
		})
	},

	clickcloseForm: function(btnClose,formModal,classShowForm,overlay,classShowOver,formAdd ,showClassFormAdd){
		let buttonClose = document.querySelector(btnClose);
		let modalForm = document.querySelector(formModal);
		let Overlay = document.querySelector(overlay);
		let mainForm = document.querySelector(formAdd);

		buttonClose.addEventListener('click' , () => {
			modalForm.classList.remove(classShowForm);
			Overlay.classList.remove(classShowOver);
			mainForm.classList.remove(showClassFormAdd);
		})
	}
}

Modal.init();

