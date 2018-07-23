const questions = [{
        questionName: 'forEach',
        answers: [' для перебора массива', 'для фильтрации массива', 'для прохода по массиву с вычислением значения.'],
        correctAnswersIndexes: [0],

    },
    {
        questionName: 'Методы для создания узлов',
        answers: ['parent.appendChild(elem)', 'document.createElement(tag)', 'parent.removeChild(elem)'],
        correctAnswersIndexes: [(3 + 1)],

    },
    {
        questionName: 'var arr = []; arr[1000] = true; arr.length какова длина массива',
        answers: ['true', '1000', '1001'],
        correctAnswersIndexes: [(6 + 2)],

    }
];
const findCorrectAnswer = answerToValidate => {
    let correctAnswers = questions.map(question =>
        question.correctAnswersIndexes.map(answerIndex => {
            if (question.otvet.includes(answerIndex)) {
                return question.answers[answerIndex];
            }
        })
    );

    return correctAnswers.some(answer => {
        return answer.includes(answerToValidate);
    });
};
const app = {
    questions,
    testName: 'Тест по программированию',
    render() {
        const main = this.newEl('main');
        const testName = this.newEl('h1');
        testName.textContent = this.testName;
        const questionsList = this.newEl('ol');
        const button = this.newEl('button');
        button.textContent = 'проверить';
        button.onclick = function() {


            var otvet = [];
            var count = 9;
            var i = 0;
            while (i < count) {
                //
                if (document.getElementById("check" + i).checked) {

                    // if (i < 3) {
                    //     questions[0].otvet.push(i)
                    //         //document.getElementById(i).setAttribute('class', 'active');
                    // }
                    // if (3 <= i && i < 6) { questions[1].otvet.push(i - 3) }
                    // if (6 <= i) { questions[2].otvet.push(i - 6) }
                    otvet.push(i);
                }


                i++;
            }
            //document.getElementById(0).setAttribute('class', 'active');
            questions.forEach(element => {

                element.correctAnswersIndexes.forEach(index => {

                    if (otvet.includes(index)) {

                        document.getElementById(index).setAttribute('class', 'active');

                    } else {
                        otvet.forEach(ot => {
                            if (document.getElementById(ot).getAttribute('class') != 'active') {
                                document.getElementById(ot).setAttribute('class', 'active1');

                            }
                        })
                    }




                });
            });

            // let labels = document.querySelectorAll('label');
            // [...labels].forEach(label => {
            //     findCorrectAnswer(label.textContent) ?
            //         label.setAttribute('class', 'active') :
            //         label.setAttribute('class', 'active1')
            // });

        }

        this.questions.forEach(question => {
            const li = this.newEl('li');
            const questionHeader = this.newEl('h3');
            questionHeader.textContent = question.questionName;

            const answers = this.newEl('ul');

            question.answers.forEach((answer, answerIndex) => {
                answers.appendChild(this.renderAnswer(answer, answerIndex));
            });

            li.appendChild(questionHeader);
            li.appendChild(answers);
            questionsList.appendChild(li);
        });

        main.appendChild(testName);
        main.appendChild(questionsList);
        main.appendChild(button);
        document.body.appendChild(main);
    },
    id: 0,
    renderAnswer(answer, answerIndex) {
        const li = this.newEl('li');
        const label = this.newEl('label');
        const uniqId = `check${this.id}`;
        label.setAttribute('for', uniqId);
        label.setAttribute('id', this.id++);
        label.textContent = answer;

        const input = this.newEl('input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('id', uniqId);

        li.appendChild(input);
        li.appendChild(label);
        return li;


    },
    newEl(elName) {
        return document.createElement(elName);
    }
};
var body = document.body;
app.render();