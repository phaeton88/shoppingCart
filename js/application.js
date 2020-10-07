$(document).ready(function () {


  var calculateSubtotalTotal = function () {
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
  };

  calculateSubtotalTotal();

  $('.btn.remove').on('click', function (event) {
      $(this).closest('tr').remove();
      calculateSubtotalTotal();
    });

  $('tr input').on('input', function () {
    calculateSubtotalTotal();
  });

  $('#addItem').on('submit', function (event) {
    event.preventDefault();
    var name = $(this).children('.name').val();
    var price = $(this).children('.price').val();
    var quantity = $(this).children('.quantity').val();
    $('tbody').append('<tr>' + '<td class = "name">' + name + '</td>' +
    '<td class = "price">' + price + '</td>' +
    '<td class="quantity"><input type="number" value="' + quantity + '" /></td>' +
    '<td class = "subtotal">' +
    '<td><button class="btn btn-light btn-sm remove">remove</button></td>' +
    '</tr>');
    calculateSubtotalTotal();
  });













});
