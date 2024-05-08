const formToEmail = () => {
    (function(){
        emailjs.init({
          publicKey: "62AO5siuln_ZU2fUD",
        });
     })();


        const form = document.querySelector('form');

        form.addEventListener('submit', function(event){
            
            event.preventDefault()

            let name = document.getElementById('name').value;
            let number = document.getElementById('number').value;
            let message = document.getElementById('message').value;

            emailjs.send('service_vzesear', 'template_sro98ka', {
                name: name,
                number: number,
                message: message,
            })
            .then(function(response) {
                console.log('Данные успешно отправлены' + response.status, response.text);
            }, function(error){
                console.log('Ошибка при отправке данных', error);
            })

            form.reset()
        })
}

formToEmail()
