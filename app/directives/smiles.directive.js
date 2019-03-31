App.directive('mibigSmiles', function() {
    return {
        template: "",
        link: function(scope, element, attr) {
            let smilesDrawer = new SmilesDrawer.Drawer({ width: 250, height: 250 });
            let canvas = document.createElement("canvas");
            $(element).append(canvas);
            SmilesDrawer.parse(attr.smiles, function (tree) {
                smilesDrawer.draw(tree, canvas, 'light', false);
            }, function (err) {
                console.log(err);
            });
        }
    };
});