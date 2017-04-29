require('angular')
    .module('sci_tools.adapter.blast', [])
    .factory('BlastAdapter', [function () {

        const id_regexp = new RegExp('^gi.([0-9]+).*$');

        function fromRawToBlast(sourceBlast) {

            let SpeciesExtractor = new RegExp(/\[([^\]]+)\]/g);

            let output = sourceBlast['BlastOutput'];
            let parameters = output['BlastOutput_param']['Parameters'];
            let iteration = output['BlastOutput_iterations']['Iteration'];
            let hits = iteration['Iteration_hits']['Hit'];

            return {
                program: output['BlastOutput_program'],
                version: output['BlastOutput_version'],
                reference: output['BlastOutput_reference'],
                database: output['BlastOutput_db'],
                query: {
                    id: output['BlastOutput_query-ID'],
                    definition: output['BlastOutput_query-def'],
                    length: output['BlastOutput_query-len'],
                },
                parameters: {
                    matrix: parameters['Parameters_matrix'],
                    expect: parameters['Parameters_expect'],
                    gap: {
                        open: parameters['Parameters_gap-open'],
                        extend: parameters['Parameters_gap-extend'],
                    }
                },
                iteration: {
                    number: iteration['Iteration_iter-num'],
                    query: {
                        id: iteration['Iteration_query-ID'],
                        definition: iteration['Iteration_query-def'],
                        length: iteration['Iteration_query-len'],
                    },
                    hits: hits
                        .reduce((hits, hit) => {
                            if (angular.isArray(hit['Hit_hsps']['Hsp'])) {
                                let splitted_hit_by_hsp = [];

                                hit['Hit_hsps']['Hsp'].forEach(hsp => {
                                    const hsps = {Hit_hsps: {Hsp: hsp}};

                                    splitted_hit_by_hsp.push({...hit, ...hsps});
                                });

                                hits.push(...splitted_hit_by_hsp);

                                return hits
                            }

                            hits.push(hit);

                            return hits
                        } ,[])
                        .map(function (hit) {
                        const hsp = hit['Hit_hsps']['Hsp'];
                        const identity = Math.round(parseInt(hsp['Hsp_identity']) * 100 / parseInt(hsp['Hsp_align-len']));
                        let definition = hit['Hit_def'];
                        let species = [];
                        let specy;

                        while ((specy = SpeciesExtractor.exec(definition)) !== null) {
                            species.push(specy[1])
                        }

                        return {
                            accession: hit['Hit_accession'],
                            definition,
                            identity,
                            id: hit['Hit_id'],
                            uid: hit['Hit_id'].match(id_regexp)[1],
                            species: [...new Set(species)],
                            hsp: {
                                number: hsp['Hsp_num'],
                                bitScore: hsp['Hsp_bit-score'],
                                score: hsp['Hsp_score'],
                                evalue: hsp['Hsp_evalue'],
                                query: {
                                    frame: hsp['Hsp_query-frame'],
                                    from: hsp['Hsp_query-from'],
                                    to: hsp['Hsp_query-to'],
                                },
                                hit: {
                                    frame: hsp['Hsp_hit-frame'],
                                    from: hsp['Hsp_hit-from'],
                                    to: hsp['Hsp_hit-to'],
                                },
                                identity: hsp['Hsp_identity'],
                                positive: hsp['Hsp_positive'],
                                gaps: hsp['Hsp_gaps'],
                                alignmentLeft: hsp['Hsp_align-len'],
                                querySequence: hsp['Hsp_qseq'],
                                hitSequence: hsp['Hsp_hseq'],
                                midline: hsp['Hsp_midline'],
                            },
                        };
                    })
                }
            };
        }

        return {fromRawToBlast}
    }]);
