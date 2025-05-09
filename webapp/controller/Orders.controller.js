sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/core/Fragment"
  ], function (Controller, Filter, FilterOperator,Fragment) {
    "use strict";
  
    return Controller.extend("leftmenu.controller.Orders", {
      onInit: function () {
        // OData service already configured in manifest.json as default model
        // No need to manually set the model here
      },
  
      onSearch: function (oEvent) {
        const sQuery = oEvent.getParameter("newValue");
        const oTable = this.byId("ordersTable");
        const oBinding = oTable.getBinding("items");
    
        let aFilters = [];
        if (sQuery && !isNaN(sQuery)) {
            aFilters.push(new Filter("OrderID", FilterOperator.EQ, parseInt(sQuery, 10)));
        }
    
        oBinding.filter(aFilters);
    },
    onPressOpenPopover: function (oEvent) {
			var oView = this.getView(),
				oSourceControl = oEvent.getSource();

			if (!this._pPopover) {
				this._pPopover = Fragment.load({
					id: oView.getId(),
					name: "leftmenu.view.Card"
				}).then(function (oPopover) {
					oView.addDependent(oPopover);
					return oPopover;
				});
			}

			this._pPopover.then(function (oPopover) {
				oPopover.openBy(oSourceControl);
			});
		}
    
    });
  });
  