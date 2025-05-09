sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("leftmenu.controller.App", {
    onInit: function () {
      this._loadPage("Home");
    },

    onToggleSideNavigation: function () {
      var oNav = this.byId("sideNavigation");
      oNav.setExpanded(!oNav.getExpanded());
    },

    onItemSelect: function (oEvent) {
      const sKey = oEvent.getParameter("item").getKey();
      const pageName = sKey.charAt(0).toUpperCase() + sKey.slice(1); // Capitalize
      this._loadPage(pageName);
    },

    _loadPage: function (sPageName) {
      const oApp = this.byId("appContainer");
      oApp.removeAllPages();

      sap.ui.core.mvc.XMLView.create({
        viewName: "leftmenu.view." + sPageName
      }).then(function (oView) {
        oApp.addPage(oView);
      });
    }
  });
});
