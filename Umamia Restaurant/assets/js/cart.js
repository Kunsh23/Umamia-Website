function addItemToCart(itemName, itemPrice) {
  var table = document.getElementById('cart-table');
  var body = document.getElementById('cart-body');

  // Check if the item is already in the cart
  var existingItem = body.querySelector('tr[data-item="' + itemName + '"]');

  if (existingItem) {
      // If the item is already in the cart, update the quantity and total
      var quantityCell = existingItem.querySelector('.quantity');
      var quantity = parseInt(quantityCell.textContent, 10) + 1;
      quantityCell.textContent = quantity;

      var totalCell = existingItem.querySelector('.total');
      var total = quantity * itemPrice;
      totalCell.textContent = '$' + total.toFixed(2);
  } else {
      // If the item is not in the cart, add a new row
      var row = body.insertRow();
      row.setAttribute('data-item', itemName);

      var nameCell = row.insertCell(0);
      nameCell.textContent = itemName;

      var priceCell = row.insertCell(1);
      priceCell.textContent = '$' + itemPrice.toFixed(2);

      var quantityCell = row.insertCell(2);
      quantityCell.textContent = 1;
      quantityCell.className = 'quantity';

      var totalCell = row.insertCell(3);
      var total = itemPrice;
      totalCell.textContent = '$' + total.toFixed(2);
      totalCell.className = 'total';
  }
}
        