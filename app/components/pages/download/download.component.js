App.component('mibigDownload', {
    templateUrl: 'components/pages/download/download.template.html',
    bindings: {
        bundles: '<',
    },
    controller: function() {
        var ctrl = this;
        ctrl.$onInit = (function() {
            ctrl.bundles.releases.sort(function(a, b) {
                return a.date - b.date;
            });
        });
    }
});