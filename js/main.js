var form = document.querySelector('.form');
var validateBtn = form.querySelector('.form__btn');
var fields = form.querySelectorAll('.form__text');
var message = document.querySelector('.about-you__title');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  var errors = form.querySelectorAll('.error')

  if (errors.length > 1) {
		for (var i = 0; i < errors.length; i++) {
		  errors[i].remove()
		}
	}
  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      var error = document.createElement('div')
      error.className = 'error'
      error.style.color = '#F47821'
      error.style.paddingLeft = '14%'
      error.innerHTML = 'Заполните это поле'
      fields[i].style.borderBottom = '2px solid #F47821'
      form[i].parentElement.insertBefore(error, fields[i])
    } else {
    	form.remove()
    	message.innerHTML = "Форма валидна!<br> Если вам понравилась моя работа, можете написать мне на почту <a href=\"mailto:mirhada@mail.ru\">mirhada@mail.ru</a>"
    }
  }
})

