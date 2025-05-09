sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("leftmenu.controller.Products", {

        onInit: function () {
            var oSmartTable = this.byId("smartTable");
            var oTable = this.byId("idResponsiveTable");
        
            // Wait for the SmartTable to bind and finish rendering
            oTable.attachEventOnce("updateFinished", function () {
                var aItems = oTable.getItems();
                aItems.forEach(function (oItem) {
                    // Set each row type to Navigation (shows > arrow)
                    oItem.setType("Navigation");
                });
            });
        },
        handleSelectionChange: function(oEvent){
            var oContext = oEvent.getParameter('listItem').getBindingContext();
            var oProduct = oContext.getObject(); // Get the selected product object
            
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this); // Get the router for this view
            oRouter.navTo("Detail", {  // Navigate to the Detail route
                productID: oProduct.ProductID  // Pass the ProductID to the next page
            });
        }
        
    });
});
