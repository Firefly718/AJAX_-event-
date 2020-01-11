$(document).ready(function(){

    $('.form-contact__input').on('change', function(){
    if ($(this).val()> 0 ){
    $(this).addClass('filled');
    }
})

$('.slider').slick({
    arrows: false,
    autoplay: true,
    infitite: true,
    speed: 1000,
    fade: true,
});

    let xhr = new XMLHttpRequest();    xhr.open('open',
    "https://gorest.co.in/public-api/users?_format=json&access-token=6qnl1-24lklA0-X7X0BMePbfVareUApPye8A_");
    if (xhr.status != 200) {
    // обработать ошибку
    console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
    } else {
    // вывести результат
    console.log( xhr.response  ); // responseText -- текст ответа.
    let people = xhr.response.result;

    people.forEach((person) => {
        if (person.status == 'active') {
            console.log(person);

            let html = document.createElement('div');
            html.classList.add('user');
            html.classList.add('user--round');
                
            html.innerHTML = `<div class="user user--round">
            <div class="user__wrap" class="user">
            <img class="user__img" src="img/sawyer-bengtson-326312-unsplash@2x.jpg" alt="${person.first_name} ${person.last_name}">
            </div>
            <div class="user__name">${person.first_name} ${person.last_name}</div>
            <div class="class__discription">${person.address}</div>
            </div>`;

            target.append(html);
        }
    })
    }

xhr.send();
})