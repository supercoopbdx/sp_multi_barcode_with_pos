# -*- coding: utf-8 -*-
# Copyright (C) 2016-Today: La Louve (<http://www.lalouve.fr/>)
# @author: La Louve et Supercoop
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html


{
    'name': 'multi code barre avec modification de la recherche sur la caisse',
    'version': '9.0.1.0.0',
    'category': 'Point Of Sale',
    'summary': 'Un module pour avoir plusieurs codes barre pour un produit, avec reconnaissances depuis la caisse. fork du module pos_search_improvement',
    'author': 'La Louve et supercoop',
    'website': 'http://supercoop.fr',
    'depends': [
        'point_of_sale', 'product'
    ],
    'data': [
        # security
        'security/ir.model.access.csv',
        'views/product_product_view.xml',
        'static/src/xml/templates.xml',
    ],
    'installable': True,
}
