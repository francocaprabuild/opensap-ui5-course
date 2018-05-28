sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";
							  //name space + folder + artifact name
	return Controller.extend("opensap.myapp.controller.App", {	
		
		onShowHello : function () {
			MessageToast.show("SAPUI5 is ready");
		}
	});
});