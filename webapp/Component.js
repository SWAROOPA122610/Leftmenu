sap.ui.define([
    "sap/ui/core/UIComponent",
    "leftmenu/model/models"
], function (UIComponent, models) {
    "use strict";

    return UIComponent.extend("leftmenu.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init: function () {
            // 1. Call parent init
            UIComponent.prototype.init.apply(this, arguments);

            // 2. Set device model
            this.setModel(models.createDeviceModel(), "device");

            // 3. Enable routing
            this.getRouter().initialize();

            // 4. Fetch and log Sales Orders
            this._fetchSalesOrders();
        },

        _fetchSalesOrders: function () {
            // Get the OData model defined in manifest.json
            const oModel = this.getModel(); // Default model ("")

            oModel.bindList("/A_SalesOrder").requestContexts().then(function (aContexts) {
                const aSalesOrders = aContexts.map(ctx => ctx.getObject());
                console.log("✅ Sales Orders:", aSalesOrders);
              }).catch(function (oError) {
                console.error("❌ Error fetching A_SalesOrder:", oError);
              });
        }
    });
});