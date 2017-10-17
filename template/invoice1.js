// Adapated from https://docs.angularjs.org/guide/concepts#template -->
// Copyright 2017 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that
// can be found in the LICENSE file at http://angular.io/license
//
angular.module('invoice1', []).controller('InvoiceController', function InvoiceController() {

	this.qty        = 1;
	this.cost       = 2;
	this.inCurr     = 'EUR';
	this.currencies = ['USD', 'EUR', 'CNY'];

	this.usdToForeignRates = {

		USD: 1,
		EUR: 0.74,
		CNY: 6.09
	};

	this.total = function total( outCurr ) {

		return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
	};

	this.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {

		return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
	};

	this.payment = function () {

		return `${this.total( this.inCurr )} ${this.inCurr}`;
	}

	this.pay = function pay() {

		window.alert(`Thanks for paying ${this.payment()}!`);
	};
});
