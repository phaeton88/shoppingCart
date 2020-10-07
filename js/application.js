$(document).ready(function () {
  var calculateSubtotalTotal = function () {
    var arr = [];
    $('tbody tr').each(function (i, el) {
      var price = parseFloat($(el).children('.price').text());
      var quantity = parseInt($(el).find('.quantity input').val());
      if (!quantity) {
        quantity = 0;
      }

      var subtotal = price * quantity;
      var displaySubTotal = subtotal.toFixed(2);
      $(el).children('.subtotal').html(displaySubTotal);
      arr.push(subtotal);
    });

    var total = arr.reduce(function (sum, num) {
      return sum + num;
    }).toFixed(2);
    $('.total').html(total);
  };

  calculateSubtotalTotal();

  $(document).on('click', '.btn.remove', function (event) {
      $(this).closest('tr').remove();
      calculateSubtotalTotal();
    });

  $(document).on('input', 'tr input', function () {
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
    $(this).children('.name').val('');
    $(this).children('.price').val('');
    $(this).children('.quantity').val('');
  });

});
