app = {};
app.zagolovok = (text) => {
    let div1 = document.createElement("div");
    div1.setAttribute('id', 'h_r');
    let center1 = document.createElement("center");
    let h2_1 = document.createElement("h2");
    h2_1.textContent = text;
    div1.appendChild(center1);
    center1.appendChild(h2_1);
    document.body.appendChild(div1);
}
app.block = () => {
    let div2 = document.createElement("div");
    div2.setAttribute('id', 'b_y');
    div2.appendChild(app.block2("1. Вопрос №1"));
    div2.appendChild(app.block3('Вариант ответа №1'));
    div2.appendChild(app.block3('Вариант ответа №2'));
    div2.appendChild(app.block3('Вариант ответа №3'));
    div2.appendChild(app.block2("2. Вопрос №2"));
    div2.appendChild(app.block3('Вариант ответа №1'));
    div2.appendChild(app.block3('Вариант ответа №2'));
    div2.appendChild(app.block3('Вариант ответа №3'));
    div2.appendChild(app.block2("3. Вопрос №3"));
    div2.appendChild(app.block3('Вариант ответа №1'));
    div2.appendChild(app.block3('Вариант ответа №2'));
    div2.appendChild(app.block3('Вариант ответа №3'));
    return div2;
}
app.block2 = (text) => {
    let span1_1 = document.createElement("span");
    let h3_1 = document.createElement("h3");
    h3_1.textContent = text;


    return span1_1.appendChild(h3_1);
}
app.block3 = (text) => {
    let div2Otstup1_1 = document.createElement("div");
    div2Otstup1_1.setAttribute('class', 'otstup');
    let input1_1 = document.createElement("input");
    input1_1.setAttribute('type', 'checkbox');
    input1_1.setAttribute('id', 'check1');
    let label1_1 = document.createElement("label");
    label1_1.setAttribute('for', 'check1');
    label1_1.textContent = text;
    div2Otstup1_1.appendChild(input1_1);
    div2Otstup1_1.appendChild(label1_1);
    return div2Otstup1_1;
}

app.button = (text) => {
    let div3 = document.createElement("div");
    div3.setAttribute('id', 'f_r');
    let center3 = document.createElement("center");
    let input3 = document.createElement("input");
    input3.setAttribute('type', 'submit');
    input3.setAttribute('id', 'sub');
    input3.setAttribute('value', text);
    center3.appendChild(input3);
    div3.appendChild(center3);
    return div3;
}
app.render = () => {
    app.zagolovok("Тест по програмированию");
    let form = document.createElement("form");
    form.setAttribute('action', '');
    form.setAttribute('metod', 'post');
    form.appendChild(app.block());
    form.appendChild(app.button('Проверить мои результаты'));
    document.body.appendChild(form);

}
app.render();