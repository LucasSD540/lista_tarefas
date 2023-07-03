$(document).ready(function() {

        $('form').submit(function(e) {
        e.preventDefault();

        const tarefaTexto = $('input').val();
        const tarefa = $('<li></li>');
        $(`<li>${tarefaTexto}</li>`).appendTo(tarefa);
        $(tarefa).appendTo('ul');

        $('input').val('');

        $('li').click(function() {
            $(this).addClass("linha");
        })
    });
});