odoo.define('sp_multi_barcode_with_pos.db', function (require) {
    "use strict";

    var PosDB = require('point_of_sale.DB');
    var _super = PosDB.prototype;

    PosDB.include({

        init: function(options){
            this._super(options);
            this.multi_barcode_by_id = {};
        },

        // Overide _product_search_string to allow searching product by
        // Internal Reference and Barcode Only
        _product_search_string: function(product){
            var str = "";

            // Set Multi barcode for product
            var multi_barcode_ids = product.multi_barcode_ids;
            if (multi_barcode_ids) {
                var multi_barcodes = this.get_multi_barcodes()
                for (var index in multi_barcode_ids) {
                    var barcode_id = multi_barcode_ids[index];
                    var multi_barcode = multi_barcodes[barcode_id];
                    str += '|' + multi_barcode.barcode;
                }
            }

            var str2 = this._super(product);

            var str3 = str2.replace(/\n$/, str + "\n");

            return str3;
        },
        add_products: function(products){
            var res = this._super(products);
            var multi_barcodes = this.get_multi_barcodes();
            this.add_multi_barcode_for_product(multi_barcodes);
        },
        add_multi_barcode_for_product: function(barcodes){
            for (var i in barcodes){
                var line = barcodes[i];
                if(line.barcode){
                    var product = line.product_id;
                    product = this.product_by_id[product[0]];
                    if(product){
                        this.product_by_barcode[line.barcode] = product;
                    }
                }
            }
        },
        set_multi_barcodes: function(barcodes){
            for (var i=0; i<barcodes.length; i++){
                var barcode = barcodes[i];
                this.multi_barcode_by_id[barcode.id] = barcode;
            }
        },
        get_multi_barcodes: function(){
            return this.multi_barcode_by_id;
        },
    });
});
