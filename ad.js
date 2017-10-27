/*
Dev:    Kalin Bowden
Date:   ..

*/

// Script level variables
var names = ['Kalin Bowden', 'Scott Bowden', 'Kristin Bowden', 'Yosuke Nishida', 'Jerret Stewert'];
var company = ['BeDapperDesigns', 'Washburn Law', 'Wal-Mart', 'Maruchan Foods', 'Kraft Foods'];
var addss = ['206 Walkington Lane', '314 Washburn Drive', '206 Walkington Lane', '4123 Maruchan Drive', '531 W Sunshine'];
var state = ['Missouri', 'Kansas', 'Missouri', 'Virgina', 'Missouri'];
var city = ['Hollister', 'Topeka', 'Hollister', 'Ramen', 'Springfield'];
var zip = ['65616', '53892', '65616', '38362', '65807'];
var phone = ['417-555-7248', '417-555-7322', '417-555-2308', '782-555-3821', '417-555-3791'];
var email = ['kalinbowden@gamil.com', 'scottbowden@gmail.com', 'kristinbowden@gmail.com', 'yosukenishida@ghmail.com', 'jarretstewert@gmail.com'];
var classes = ['cl0', 'cl1', 'cl2', 'cl3', 'cl4'];
var ident = ['pl0', 'pl1', 'pl2', 'pl3', 'pl4'];

function genAddress()
{
    var clones = '';

    for (var i = 0; i < names.length; i++)
    {
        clones += '<div class="row text-left entry"><div class="col-md-2"></div>' +
        '<div class="col-md-10">' +
          '<div class="row text-left">' +
            '<div class="col-md-3 '+ident[i]+'"><h3><strong>'+names[i]+'</strong></h3></div>' +
            '<div class="col-md-6 '+classes[i]+' dis"><h3><strong>'+company[i]+'</strong></h3></div>' +
            '<div class="col-md-3 '+classes[i]+' dis"><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-envelope"></span></div>' +
          '</div>' +  
          '<div class="row text-left '+classes[i]+' dis">' +
            '<div class="col-md-3">'+addss[i]+'</div>' +
            '<div class="col-md-2">'+city[i]+'</div>' +
            '<div class="col-md-2">'+state[i]+'</div>' +
            '<div class="col-md-2">'+zip[i]+'</div>' +
            '<div class="col-md-3"></div>' +
          '</div>' +
          '<div class="row text-left '+classes[i]+' dis">' +
            '<div class="col-md-3">'+phone[i]+'</div>' +
            '<div class="col-md-5">'+email[i]+'</div>' +
            '<div class="col-md-4"></div>' +
          '</div>' +
        '</div>' +
    '</div>';
    }

    $('#contacts').html(clones);
}


window.addEventListener('load', genAddress);