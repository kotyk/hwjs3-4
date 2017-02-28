var container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);
container.style.width='400px';

var test = {
    questions: ['Вопрос №1',
                    'Вопрос №2',
                    'Вoпрос №3'],

    answers: ['Вариант ответа №1',
                     'Вариант ответа №2',
                     'Вариант ответа №3'],

    container: container,

    addHeader: function() {
        var header = document.createElement('h3');
        header.innerHTML='Тест по программированию';
        container.appendChild(header);
        header.style.textAlign="center";
        header.style.marginBottom='55px';
        header.style.fontWeight='bold';
    },

     addQuestions: function () {
        var list = document.createElement('ol');
        for (var i = 0; i < test.questions.length; i++) {
            var listItem = document.createElement('li');
            list.appendChild(listItem);
            container.appendChild(list);

            var question = document.createElement('p');
            question.innerHTML = test.questions[i];
            listItem.appendChild(question);
            question.style.fontSize='18px';
            question.style.fontWeight='bold';

            var answer = document.createElement('ul');
            for (var j = 0; j < test.answers.length; j++) {
                var answersItem = document.createElement('li');
                answersItem.style.fontSize='18px';
                answer.appendChild(answersItem);
                listItem.appendChild(answer);
                answersItem.classList.add('checkbox');

                var input = document.createElement('input');
                input.setAttribute('type', 'checkbox');
                answersItem.appendChild(input);
                
                var textAnswer = document.createElement('span');
                answersItem.appendChild(textAnswer);
                textAnswer.innerHTML = test.answers[j];
            }
        }
    },

    addButton: function() {
        var button = document.createElement('button');
        button.classList.add('btn');
        button.innerHTML = 'Проверить мои результаты';
        container.appendChild(button);
        button.style.background='#cfe2f3';
        button.style.fontSize='20px';
        button.style.border='1px solid black';
        button.style.marginTop='30px';
    }
};


test.addHeader();
test.addQuestions();
test.addButton();

