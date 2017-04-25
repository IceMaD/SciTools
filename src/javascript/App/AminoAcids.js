require('angular')
    .module('sci_tools.configuration.amino_acids', [])
    .constant('AminoAcids', [
        { oneLetterCode: "R", color: '#0022bb', name: "Arginine",      threeLetterCode: "Arg", polarity: 1, acidityBasicity: 1,  hydropathyIndex: -4.5, molecularWeight: 174.2,  isoElectricPoint: 11.15 },
        { oneLetterCode: "K", color: '#2244dd', name: "Lysine",        threeLetterCode: "Lys", polarity: 1, acidityBasicity: 1,  hydropathyIndex: -3.9, molecularWeight: 146.19, isoElectricPoint: 9.59  },
        { oneLetterCode: "H", color: '#4466ff', name: "Histidine",     threeLetterCode: "His", polarity: 1, acidityBasicity: 1,  hydropathyIndex: -3.2, molecularWeight: 155.16, isoElectricPoint: 7.47  },
        { oneLetterCode: "E", color: '#8f0404', name: "Glutamic acid", threeLetterCode: "Glu", polarity: 1, acidityBasicity: -1, hydropathyIndex: -3.5, molecularWeight: 147.13, isoElectricPoint: 3.22  },
        { oneLetterCode: "D", color: '#d50606', name: "Aspartic acid", threeLetterCode: "Asp", polarity: 1, acidityBasicity: -1, hydropathyIndex: -3.5, molecularWeight: 133.1,  isoElectricPoint: 2.77  },
        { oneLetterCode: "I", color: '#ff6600', name: "Isoleucine",    threeLetterCode: "Ile", polarity: 0, acidityBasicity: 0,  hydropathyIndex: 4.5,  molecularWeight: 131.18, isoElectricPoint: 5.94  },
        { oneLetterCode: "L", color: '#ff8822', name: "Leucine",       threeLetterCode: "Leu", polarity: 0, acidityBasicity: 0,  hydropathyIndex: 3.8,  molecularWeight: 131.18, isoElectricPoint: 5.98  },
        { oneLetterCode: "V", color: '#ffaa44', name: "Valine",        threeLetterCode: "Val", polarity: 0, acidityBasicity: 0,  hydropathyIndex: 4.2,  molecularWeight: 117.15, isoElectricPoint: 5.96  },
        { oneLetterCode: "A", color: '#ffcc66', name: "Alanine",       threeLetterCode: "Ala", polarity: 0, acidityBasicity: 0,  hydropathyIndex: 1.8,  molecularWeight: 89.09,  isoElectricPoint: 6     },
        { oneLetterCode: "C", color: '#b2ef1e', name: "Cysteine",      threeLetterCode: "Cys", polarity: 1, acidityBasicity: 0,  hydropathyIndex: 2.5,  molecularWeight: 121.16, isoElectricPoint: 5.02  },
        { oneLetterCode: "M", color: '#5b7209', name: "Methionine",    threeLetterCode: "Met", polarity: 0, acidityBasicity: 0,  hydropathyIndex: 1.9,  molecularWeight: 149.21, isoElectricPoint: 5.74  },
        { oneLetterCode: "N", color: '#b21558', name: "Asparagine",    threeLetterCode: "Asn", polarity: 1, acidityBasicity: 0,  hydropathyIndex: -3.5, molecularWeight: 132.12, isoElectricPoint: 5.41  },
        { oneLetterCode: "Q", color: '#eb38a2', name: "Glutamine",     threeLetterCode: "Gln", polarity: 1, acidityBasicity: 0,  hydropathyIndex: -3.5, molecularWeight: 146.15, isoElectricPoint: 5.65  },
        { oneLetterCode: "F", color: '#7d7e3b', name: "Phenylalanine", threeLetterCode: "Phe", polarity: 0, acidityBasicity: 0,  hydropathyIndex: 2.8,  molecularWeight: 165.19, isoElectricPoint: 5.48  },
        { oneLetterCode: "Y", color: '#375e66', name: "Tyrosine",      threeLetterCode: "Tyr", polarity: 1, acidityBasicity: 0,  hydropathyIndex: -1.3, molecularWeight: 181.19, isoElectricPoint: 5.66  },
        { oneLetterCode: "W", color: '#366483', name: "Tryptophan",    threeLetterCode: "Trp", polarity: 0, acidityBasicity: 0,  hydropathyIndex: -0.9, molecularWeight: 204.23, isoElectricPoint: 5.89  },
        { oneLetterCode: "S", color: '#864983', name: "Serine",        threeLetterCode: "Ser", polarity: 1, acidityBasicity: 0,  hydropathyIndex: -0.8, molecularWeight: 105.09, isoElectricPoint: 5.68  },
        { oneLetterCode: "T", color: '#b982b5', name: "Threonine",     threeLetterCode: "Thr", polarity: 1, acidityBasicity: 0,  hydropathyIndex: -0.7, molecularWeight: 119.12, isoElectricPoint: 5.64  },
        { oneLetterCode: "G", color: '#747474', name: "Glycine",       threeLetterCode: "Gly", polarity: 0, acidityBasicity: 0,  hydropathyIndex: -0.4, molecularWeight: 75.07,  isoElectricPoint: 5.97  },
        { oneLetterCode: "P", color: '#9fa6ac', name: "Proline",       threeLetterCode: "Pro", polarity: 0, acidityBasicity: 0,  hydropathyIndex: -1.6, molecularWeight: 115.13, isoElectricPoint: 6.3   },
    ]);


