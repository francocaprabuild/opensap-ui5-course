sap.ui.define([], function() {
	"use strict";
	return {
		delivery: function(iWeight, sMeasure) {
			var sResult = "";

			if (sMeasure === "G") {
				iWeight = iWeight / 1000;
			}
			if (iWeight < 0.5) {
				// sResult = oResourceBundle.getText("formatterMailDelivery");
				sResult = "Mail Deliver";
			} else if (iWeight < 5) {
				// sResult = oResourceBundle.getText("formatterParcelDelivery");
				sResult = "Parcel Deliver";
			} else {
				// sResult = oResourceBundle.getText("formatterCarrierDelivery");
				sResult = "Carrier Delivery";
			}
			return sResult;
		}
	}
})