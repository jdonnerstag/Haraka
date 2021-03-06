// Constants

exports.cont            = 900;
exports.stop            = 901;
exports.deny            = 902;
exports.denysoft        = 903;
exports.denydisconnect  = 904;
exports.disconnect      = 905;
exports.ok              = 906;
exports.next_hook       = 907;

/**
 * Import all constants into the 'object' (context) provided. The constants will be available via myObject[CONST].
 */
exports.import = function (object) {
    for (var k in exports) {
        if (exports.hasOwnProperty(k) && k !== "import") {
            object[k.toUpperCase()] = exports[k];
        }
    }
}
