App.component('mibigBrowse', {
    templateUrl: 'components/pages/browse/browse.template.html',
    bindings: {
        bgcData: '<',
    },
    controller: function() {
        var ctrl = this;
        ctrl.$onInit = function() {
            ctrl.bgcList = [];
            if (ctrl.bgcData.hasOwnProperty("bgcs")) {
                for (var accession in ctrl.bgcData.bgcs) {
                    if (ctrl.bgcData.bgcs.hasOwnProperty(accession)) {
                        ctrl.bgcList.push(ctrl.bgcData.bgcs[accession]);
                    }
                }
            }
        }
    }
})