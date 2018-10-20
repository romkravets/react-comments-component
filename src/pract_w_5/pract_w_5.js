import './pract_w_5.scss';

const logInForm = document.querySelector('#submitForm');
const commentElement = document.querySelector('.comment');

function login(e) {
  e.preventDefault();
  const nameElement = document.querySelector('#name');
  const txtElement = document.querySelector('#txt');
  if (nameElement.value && txtElement.value) {
    commentElement.innerHTML = nameElement.value +  txtElement.value;
  } else {
    nameElement.style.borderColor = "red";
    txtElement.style.borderColor = "red";
  };
  document.querySelector('#submitForm').reset();
}

logInForm.onsubmit = login;


/*alert('Я - JAvaScript');

var name = "Василь";
var  admin = name;
alert(admin);

var admin, name;
name = "Василь";
admin = name;
alert(admin);


var myPlanet, name;
myPlanet = "Земля";
name = "Пертя";*/

/*var userName = prompt('Ваше імя?', 100);

//alert('Вам' + userName + 'лет');*/

/*var name = prompt ('How official name JS ?');

if (name === 'ECMAScript') {
  alert('Good answer!');
} else {
   alert('You mast find answer!');
}*/

/*var value = prompt('Write point...');

if (value > 0) {
  alert(1);
} else if (value < 0) {
  alert(-1);
} else {
  alert(0);
}*/

/*var userName = prompt('How are you?');

if (userName == 'Admin'){
  var pass = prompt('Password?');
  if (pass == 'Black star'){
    alert('Welcome')
  } else if (pass === null) {
    alert('escape');
  }else {
    alert('Password?');
  }
  }else if (userName == null) {
    alert('Enter escape');
  } else {
    alert('I dont remember you');
  }*/


  /*var userName = prompt('Input mane');

  if (userName == 'admin') {
    var pass = prompt('input password!');
    if (pass == "star"){
      alert('Welcome!');
    } else if (pass === null){
      alert('incorect password');
    }else {
      alert('escape');
    }
  }else if(userName == null){
    alert('i dont remembet you');
  } else {
    alert('enter escape');
  }*/


var age = prompt('how old are you?');

if (!(age >= 14 && age <= 90)){
 alert('ok');
}else {
  alert('dont');
}


