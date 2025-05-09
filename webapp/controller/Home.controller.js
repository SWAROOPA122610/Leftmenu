sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "leftmenu/model/formatter",
  "sap/ui/model/json/JSONModel"
], function (Controller, formatter, JSONModel) {
  "use strict";

  return Controller.extend("leftmenu.controller.Home", {
      formatter: formatter,

      onInit: function () {
          // Load main dashboard tile data
          var oTileModel = new JSONModel(sap.ui.require.toUrl("leftmenu/model/items.json"));
          this.getView().setModel(oTileModel);

          // Add Bar Chart Data (you can adjust the values)
          var oBarChartData = {
              BarChartData: [
                  { Week: "Week 1", Registrations: 15 },
                  { Week: "Week 2", Registrations: 22 },
                  { Week: "Week 3", Registrations: 18 },
                  { Week: "Week 4", Registrations: 30 }
              ]
          };

          var oBarChartModel = new JSONModel(oBarChartData);
          this.getView().setModel(oBarChartModel, "BarChartModel");

          // Optional: explicitly bind the model to the VizFrame if needed
          var oVizFrame = this.byId("idBarChart");
          if (oVizFrame) {
              oVizFrame.setModel(oBarChartModel);
          }
      },

      onSliderMoved: function (oEvent) {
          var fValue = oEvent.getParameter("value");
          this.byId("panelForGridList").setWidth(fValue + "%");
      }
  });
});
