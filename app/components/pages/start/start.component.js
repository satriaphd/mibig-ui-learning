App.component('mibigStart', {
    templateUrl: 'components/pages/start/start.template.html',
    bindings: {
        version: '<',
        totalBGC: '<',
    },
    controller: function() {        
        console.log(this.version);
    }
})