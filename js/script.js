var $grid = $('.collection-list').isotope({
    // options
});
// filter items on button click
$('.filter-button-group').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    resetFilterBtns();
    $(this).addClass('active-filter-btn');
    $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filter-button-group').find('button');

function resetFilterBtns() {
    filterBtns.each(function() {
        $(this).removeClass('active-filter-btn');
    });
}

// email 
$(document).ready(function() {
    $("#email").keyup(function() {
        if (validateEmail()) {
            $("#email").css("border", "2px solid green");
            $("#emailMsg").html("<div class='text-success text-center'>Validated</div>");
            $("#submit").click(function() {
                location.reload();
            });
        } else {
            $("#email").css("border", "2px solid red");
            $("#emailMsg").html("<div class='text-danger text-center'>Un-validated</div>");
        }
        buttonState();
    });
});

function validateEmail() {
    var email = $("#email").val();
    var reg = /^\w+([-+.']\w+)*@gmail*\.com/
    if (reg.test(email)) {
        return true;
    } else {
        return false;
    }

}

// wow
new WOW().init();

// fullscreen
function getPics() {} //just for this demo
const imgs = document.querySelectorAll('.gallery img');
const fullPage = document.querySelector('#fullpage');

imgs.forEach(img => {
    img.addEventListener('click', function() {
        fullPage.style.backgroundImage = 'url(' + img.src + ')';
        fullPage.style.display = 'block';
    });
});


// cart
$(document).ready(function() {
    update_amounts();
    $('.qty, .price').on('keyup keypress blur change',
        function(e) {
            update_amounts();
        });
});

function update_amounts() {
    var sum = 0.0;
    $('myTable > tbody > tr').each(function() {
        var qty = $(this).find('.qty').val();
        var price = $(this).find('.price').val();
        var amount = (qty * price);
        sum += amount;
        $(this).find('.amount').text('' + amount);
    });
    $('.total').text(sum);

}



var incrementQty;
var decrementQty;
var plusBtn = $('.cart-qty-plus');
var plusBtn = $('.cart-qty-minius');
var incrementQty = plusBtn.click(function() {
    var $n = $(this)
        .parent('.button-container')
        .find('.qty');
    $n.val(Number($n.val()) + 1);
    update_amounts();
});

var decrementQty = miniusBtn.click(function() {
    var $n = $(this)
        .parent('.button-container')
        .find('.qty');
    var QtyVal = Number($n.val());
    if (QtyVal > 0) {
        $n.val(QtyVal - 1);
    }

    update_amounts();
});

// validate