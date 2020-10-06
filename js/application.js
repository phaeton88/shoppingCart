$(document).ready(function () {
  var arr = [];
  $('tbody tr').each(function (i, el) {
    var price = parseFloat($(el).children('.price').text());
    var quantity = parseFloat($(el).find('.quantity input').val());
    var subtotal = price * quantity;
    $(el).children('.subtotal').html(subtotal);
    arr.push(subtotal);
  });
  var total = arr.reduce(function (sum, num) {
    return sum + num;
  });
  $('.total').html(total);














});
