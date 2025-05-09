sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("leftmenu.controller.Detail", {
        onInit() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("Detail").attachPatternMatched(this._onRouteMatch,this);
        },
        
        _onRouteMatch: function(oEvent){
            var ProductID = oEvent.getParameter('arguments').customerID;
            var oView = this.getView();
            var oModel = this.getOwnerComponent().getModel(); 
        
            var sPath = "/Products('" + ProductID + "')"; // OData binding path
            oView.bindElement(sPath);
        }
    });
});

