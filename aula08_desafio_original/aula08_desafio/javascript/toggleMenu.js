(function(){
    var $html = document.querySelector('html');
    var $button = document.querySelector('.header-nav__hamburgger');

    $html.classList.remove('no-js');
    $html.classList.add('js');

    $button.addEventListener('click', function(){
        $html.classList.toggle('menu-opened')
    })
        
})()
