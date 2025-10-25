sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"listreport/test/integration/pages/ProductsList",
	"listreport/test/integration/pages/ProductsObjectPage",
	"listreport/test/integration/pages/Order_DetailsObjectPage"
], function (JourneyRunner, ProductsList, ProductsObjectPage, Order_DetailsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('listreport') + '/test/flp.html#app-preview',
        pages: {
			onTheProductsList: ProductsList,
			onTheProductsObjectPage: ProductsObjectPage,
			onTheOrder_DetailsObjectPage: Order_DetailsObjectPage
        },
        async: true
    });

    return runner;
});

