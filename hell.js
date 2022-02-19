// ----------------------------------------------
// These funcs break JS minification:

function gatewayToHell() {
	if (true) {
		function satan() {
			return 1;
		}

		const foo = 666;
	}
}

/*
// 'let foo' also bad
function gatewayToHell() {
	if (true) {
		function satan() {
			return 1;
		}

		let foo = 666;
	}
}
*/


// ----------------------------------------------
// These funcs do NOT break JS minification:

/*
// 'var foo' is OK
function notGatewayToHell() {
	if (true) {
		function satan() {
			return 1;
		}

		var foo = 666;
	}
}

// Fine without surrounding 'if(true)'
function notGatewayToHell() {
	function satan() {
		return 1;
	}

	const foo = 666;
}

// Fine with 'const satan = ...' rather than 'function satan()'
function notGatewayToHell() {
	if (true) {
		const satan = function() {
			return 1;
		}

		const foo = 666;
	}
}
*/

console.log('** Server started successfully.')
