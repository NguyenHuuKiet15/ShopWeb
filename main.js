function search() {
    var s = document.getElementById("keyword")
    if(s != null)
    {
        s = s.value

        var grid__row = document.querySelectorAll("div.grid__row > div.grid__column-2-4")
        var maxlength = grid__row.length
        for(var i=0; i<maxlength; i++)
        {
            var h4 = grid__row[i].getElementsByTagName("h4")[0].innerText
            if(h4.indexOf(s) >=0)
                grid__row[i].style.outline = "2px dashed red"
        }
    }
}

function changeProductList(type, element){
    let tabs = document.getElementsByClassName('home-filter__btn');
    for( var i=0; i<tabs.length;i++)
    {
        tabs[i].style.background = '#fff';
        tabs[i].style.color = '#000';
    }
    element.style.background = 'rgb(26, 148, 255)';
    element.style.color = '#fff';

    document.getElementById(type).style.display= 'flex';
    switch (type) {
        case 'hot':
            document.getElementById('new').style.display= 'none';
            document.getElementById('best-seller').style.display= 'none';
            break;
        case 'new':
            document.getElementById('hot').style.display= 'none';
            document.getElementById('best-seller').style.display= 'none';
            break;
        case 'best-seller':
            document.getElementById('new').style.display= 'none';
            document.getElementById('hot').style.display= 'none';
            break;
    }
}

function validator(options) {
    function validate(inputElement, rule) {
        var errorMessage = rule.test(inputElement.value);
        var errorElement = inputElement.parentElement.querySelector('.form-message');
                    
                    if(errorMessage) {
                        errorElement.innerText = errorMessage;
                    } else {
                        errorElement.innerText = '';
                    }
    }

    var formElement = document.querySelector(options.form);
    if(formElement) {
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);
           
            if( inputElement)
            {
                inputElement.onblur = function() {
                    validate(inputElement, rule); 
                }

                inputElement.oninput = function() {
                    var errorElement = inputElement.parentElement.querySelector('.form-message');
                    errorElement.innerText = '';
                }
            }
        });

    }
}

validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này!!';
        }
    };
}

validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Vui lòng nhập đúng trường email !!'
        }
    };
}

validator.minPass = function(selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : `Password có tối thiểu ${min} kí tự !!`;
        }
    };
}

validator.checkComfirm = function(selector, getConfirm) {
    return {
        selector: selector,
        test: function(value) {
            return value === getConfirm() ? undefined : 'Giá trị nhập vào không chính xác!!';
        }
    }
}