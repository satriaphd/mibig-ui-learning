App.component('mibigDetail', {
    templateUrl: 'components/pages/detail/detail.template.html',
    bindings: {
        bgcAnnot: '<',
        bgcSeq: '<',
        seqSchema: '<',
        annotSchema: '<',
    },
    controller: function() {
        var ctrl = this;
        ctrl.$onInit = function() {
            ctrl.page = 1;
            ctrl.title = ctrl.bgcAnnot.general_params.mibig_accession;
            if (ctrl.bgcAnnot.general_params.compounds.length > 0) {
                ctrl.title += ": " + ctrl.bgcAnnot.general_params.compounds.map(x=>x.compound).join("/");
            }
            // set validator
            ajv = new Ajv();
            let validate_seq = ajv.compile(ctrl.seqSchema);
            ctrl.error_seq = [];
            if (!validate_seq(ctrl.bgcSeq)) {
                validate_seq.errors.forEach(function(err) {
                    ctrl.error_annot.push(err.dataPath + ": " + err.message);
                });
            }
            let validate_annot = ajv.compile(ctrl.annotSchema);
            ctrl.error_annot = [];
            if (!validate_annot(ctrl.bgcAnnot)) {
                validate_annot.errors.forEach(function(err) {
                    ctrl.error_annot.push(err.dataPath + ": " + err.message);
                });
            }
            // build arrower svgs
            ctrl.arrower_jsons = [];
            ctrl.bgcSeq.loci.forEach(function(loci) {
                var cluster = {};
                cluster.id = loci.nucl_acc;
                cluster.start = loci.start_pos;
                cluster.end = loci.end_pos;
                cluster.desc = cluster.start + "-" + cluster.end + " nt";
                cluster.orfs = [];
                loci.genes.forEach(function(gene) {
                    var orf = {};
                    orf.id = gene.name? gene.name:gene.id;
                    orf.start = gene.start_pos-cluster.start;
                    orf.end = gene.end_pos-cluster.start;
                    orf.domains = []
                    gene.pfam_hits.forEach(function(pfam_hit) {
                        var domain = {};
                        domain.code = pfam_hit.name;
                        domain.start = pfam_hit.seq_start;
                        domain.end = pfam_hit.seq_end;
                        domain.bitscore = pfam_hit.bitscore;
                        if (mibig_pfam_colors.hasOwnProperty(pfam_hit.name)) {
                            domain.color = mibig_pfam_colors[pfam_hit.name];
                        }
                        orf.domains.push(domain);
                    });
                    cluster.orfs.push(orf);
                });
                ctrl.arrower_jsons.push(JSON.stringify(cluster));
            });
        }
    }
});