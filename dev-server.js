var url = require("url");
var proxy = require("proxy-middleware");
var connect = require("gulp-connect");

exports.run = function() {
    connect.server({
        root: ["."],
        port: 8001,
        livereload: true,
        middleware: function(connect, o) {
            var gsProxy = (function() {
                var options = url.parse("https://mapserver.mapboss.co.th");
                options.route = "/geoserver";
                return proxy(options);
            })();
            return [gsProxy];
        }
    });
};
