App.directive('mibigArrower', function() {
    return {
        template: "",
        link: function(scope, element, attr) {
            let cluster = JSON.parse(attr.arrower);
            $("<div>").css("overflow", "auto").css("width", "100%")
                .css("height", "50px")
                .append(Arrower.drawClusterSVG(cluster, 20))
                .appendTo($(element));
        }
    };
});