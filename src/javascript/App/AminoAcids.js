require('angular')
    .module('sci_tools.configuration.amino_acids', [])
    .constant('AminoAcids', [
        { oneLetterCode: "R", color: '#0022bb', name: "Arginine",      threeLetterCode: "Arg", polarity: 1, acidityBasicity: 1,  pI: 11.15, /*hydropathyIndex: -4.5, molecularWeight: 174.2  */ },
        { oneLetterCode: "K", color: '#2244dd', name: "Lysine",        threeLetterCode: "Lys", polarity: 1, acidityBasicity: 1,  pI: 9.59,  /*hydropathyIndex: -3.9, molecularWeight: 146.19 */ },
        { oneLetterCode: "H", color: '#4466ff', name: "Histidine",     threeLetterCode: "His", polarity: 1, acidityBasicity: 1,  pI: 7.47,  /*hydropathyIndex: -3.2, molecularWeight: 155.16 */ },
        { oneLetterCode: "E", color: '#8f0404', name: "Glutamic acid", threeLetterCode: "Glu", polarity: 1, acidityBasicity: -1, pI: 3.22,  /*hydropathyIndex: -3.5, molecularWeight: 147.13 */ },
        { oneLetterCode: "D", color: '#d50606', name: "Aspartic acid", threeLetterCode: "Asp", polarity: 1, acidityBasicity: -1, pI: 2.77,  /*hydropathyIndex: -3.5, molecularWeight: 133.1  */ },
        { oneLetterCode: "I", color: '#ff6600', name: "Isoleucine",    threeLetterCode: "Ile", polarity: 0, acidityBasicity: 0,  pI: 5.94,  /*hydropathyIndex: 4.5,  molecularWeight: 131.18 */ },
        { oneLetterCode: "L", color: '#ff8822', name: "Leucine",       threeLetterCode: "Leu", polarity: 0, acidityBasicity: 0,  pI: 5.98,  /*hydropathyIndex: 3.8,  molecularWeight: 131.18 */ },
        { oneLetterCode: "V", color: '#ffaa44', name: "Valine",        threeLetterCode: "Val", polarity: 0, acidityBasicity: 0,  pI: 5.96,  /*hydropathyIndex: 4.2,  molecularWeight: 117.15 */ },
        { oneLetterCode: "A", color: '#ffcc66', name: "Alanine",       threeLetterCode: "Ala", polarity: 0, acidityBasicity: 0,  pI: 6,     /*hydropathyIndex: 1.8,  molecularWeight: 89.09  */ },
        { oneLetterCode: "C", color: '#b2ef1e', name: "Cysteine",      threeLetterCode: "Cys", polarity: 1, acidityBasicity: 0,  pI: 5.02,  /*hydropathyIndex: 2.5,  molecularWeight: 121.16 */ },
        { oneLetterCode: "M", color: '#5b7209', name: "Methionine",    threeLetterCode: "Met", polarity: 0, acidityBasicity: 0,  pI: 5.74,  /*hydropathyIndex: 1.9,  molecularWeight: 149.21 */ },
        { oneLetterCode: "N", color: '#b21558', name: "Asparagine",    threeLetterCode: "Asn", polarity: 1, acidityBasicity: 0,  pI: 5.41,  /*hydropathyIndex: -3.5, molecularWeight: 132.12 */ },
        { oneLetterCode: "Q", color: '#eb38a2', name: "Glutamine",     threeLetterCode: "Gln", polarity: 1, acidityBasicity: 0,  pI: 5.65,  /*hydropathyIndex: -3.5, molecularWeight: 146.15 */ },
        { oneLetterCode: "F", color: '#7d7e3b', name: "Phenylalanine", threeLetterCode: "Phe", polarity: 0, acidityBasicity: 0,  pI: 5.48,  /*hydropathyIndex: 2.8,  molecularWeight: 165.19 */ },
        { oneLetterCode: "Y", color: '#375e66', name: "Tyrosine",      threeLetterCode: "Tyr", polarity: 1, acidityBasicity: 0,  pI: 5.66,  /*hydropathyIndex: -1.3, molecularWeight: 181.19 */ },
        { oneLetterCode: "W", color: '#366483', name: "Tryptophan",    threeLetterCode: "Trp", polarity: 0, acidityBasicity: 0,  pI: 5.89,  /*hydropathyIndex: -0.9, molecularWeight: 204.23 */ },
        { oneLetterCode: "S", color: '#864983', name: "Serine",        threeLetterCode: "Ser", polarity: 1, acidityBasicity: 0,  pI: 5.68,  /*hydropathyIndex: -0.8, molecularWeight: 105.09 */ },
        { oneLetterCode: "T", color: '#b982b5', name: "Threonine",     threeLetterCode: "Thr", polarity: 1, acidityBasicity: 0,  pI: 5.64,  /*hydropathyIndex: -0.7, molecularWeight: 119.12 */ },
        { oneLetterCode: "G", color: '#747474', name: "Glycine",       threeLetterCode: "Gly", polarity: 0, acidityBasicity: 0,  pI: 5.97,  /*hydropathyIndex: -0.4, molecularWeight: 75.07  */ },
        { oneLetterCode: "P", color: '#9fa6ac', name: "Proline",       threeLetterCode: "Pro", polarity: 0, acidityBasicity: 0,  pI: 6.3,   /*hydropathyIndex: -1.6, molecularWeight: 115.13 */ },
    ]);


