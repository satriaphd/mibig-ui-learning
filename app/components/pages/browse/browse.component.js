App.component('mibigBrowse', {
    templateUrl: 'components/pages/browse/browse.template.html',
    bindings: {
        data: '<',
    },
    controller: function() {
        let ctrl = this;
        ctrl.$onInit = function() {
            ctrl.table_data = [];
            for (let key in ctrl.data) {
                row = {}
                row.id = key;
                for (let prop in ctrl.data[key]) {
                    row[prop] = ctrl.data[key][prop];
                }
                ctrl.table_data.push(row);
            };
        }
    }
})