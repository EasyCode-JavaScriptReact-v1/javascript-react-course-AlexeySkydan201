/* task 0
Даны строки разделенные различным образом,
верните строки разделенные / или _, в нижнем регистре
solution("ActiveModel::Errors") => active_model/errors"
solution("HelloHowAreYou") => "hello_how_are_you"
solution("MyNAMEIsBOND-JamesBond") => my_name_is_bond_james_bond"
solution("MAINCompany::BEST-MAINUser") => "main_company/best_main_user"
*/

var solution = (str) => {
    str = str.replace(/::/g, '/').replace(/-/g, '_');
    let newStr = '';
    newStr += str.charAt(0);
    for (let i = 1; i < str.length; i++) {

        //console.log(newStr);
        if (str.charAt(i) == '/' || str.charAt(i) == '_') {
            newStr = newStr + str.charAt(i);
        } else if (str.charAt(i).toUpperCase() == str.charAt(i)) {
            let lastSimbol = newStr.substr(newStr.length - 1, newStr.length);
            if (lastSimbol.toLowerCase() == lastSimbol &&
                lastSimbol.toLowerCase() != '/' &&
                lastSimbol.toLowerCase() != '_') {
                newStr += '_' + str.charAt(i);
            } else {
                newStr = newStr + str.charAt(i);
            }

        } else if (str.charAt(i).toLowerCase() == str.charAt(i)) {
            let lastSimbol = newStr.substr(newStr.length - 1, newStr.length);
            if (lastSimbol.toUpperCase() == lastSimbol &&
                lastSimbol.toUpperCase() != '/' &&
                lastSimbol.toUpperCase() != '_') {
                newStr = newStr.substr(0, newStr.length - 1) + '_' + lastSimbol + str.charAt(i);
            } else {
                newStr = newStr + str.charAt(i);
            }

        }
    }
    if (newStr.charAt(0) == '_') { newStr = newStr.substr(1, newStr.length) }
    console.log(newStr.replace(/__/g, '_').replace(/\/_/g, '/').toLowerCase());


}
solution("ActiveModel::Errors");
solution("HelloHowAreYou");
solution("MyNAMEIsBOND-JamesBond");
solution("MAINCompany::BEST-MAINUser");