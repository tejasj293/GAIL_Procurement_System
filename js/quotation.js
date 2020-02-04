$(document).ready(function () {
    var counter = 0;

    $("#addrow").on("click", function () {
        var newRow = $("<tr class='row'>");
        var cols = "";

        cols += '<td class="col-sm-4"><input type="text" class="form-control" name="name' + counter + '"/></td>';
        cols += '<td class="col-sm-4"><input type="number" class="form-control" name="priceOne' + counter + '"/></td>';
        cols += '<td class="col-sm-2"><input type="number" class="form-control" name="totalPrice' + counter + '"/></td>';

        cols += '<td class="col-sm-2"><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Delete"></td>';
        newRow.append(cols);
        newRow.append("</tr>");
        $("#table").append(newRow);
        counter++;
    });



    $("table.order-list").on("click", ".ibtnDel", function (event) {
        $(this).closest("tr").remove();      
        counter -= 1
    });


});



function calculateRow(row) {
    var price = +row.find('input[name^="price"]').val();

}

function calculateGrandTotal() {
    var grandTotal = 0;
    $("table.order-list").find('input[name^="price"]').each(function () {
        grandTotal += +$(this).val();
    });
    $("#grandtotal").text(grandTotal.toFixed(2));
}