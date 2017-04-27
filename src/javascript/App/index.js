let angular = require('angular');

require('angular-utils-pagination');
require('ngstorage');
require('ng-file-upload');
require('./Routing');
require('./Directive/BlastUploader');
require('./Directive/Hit');
require('./Directive/SequencePreview');
require('./Directive/Dropdown');
require('./Storage/App');

angular
    .module('sci_tools.app', [
        'sci_tools.routing',
        'sci_tools.directive.blast_uploader',
        'sci_tools.directive.hit',
        'sci_tools.directive.sequence_preview',
        'sci_tools.directive.dropdown',
        'ngFileUpload',
        'ngStorage',
        'angularUtils.directives.dirPagination',
        'sci_tools.storage.app',
    ])

    .controller('AppController', ['$scope', 'AppStorage', ($scope, AppStorage) =>{
        AppStorage.autoBind($scope, 'app')
    }])

    .config(['$localStorageProvider', $localStorageProvider => {
        $localStorageProvider.setKeyPrefix('SciTools-');
    }])
;

(function () {
    const counter = {
        D: 0,
        E: 0,
        C: 0,
        Y: 0,
        H: 0,
        K: 0,
        R: 0,
    };

    const sequence = 'MKNRILRPALLCVAALFATTAQADAGHDHGSAHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR';

    sequence.split('').forEach((character) => counter[character]++);

    let netCharge = 0.0;

    let charge = {
        D: 0,
        E: 0,
        C: 0,
        Y: 0,
        H: 0,
        K: 0,
        R: 0,
        CTerm: 0,
        NTerm: 0,
    };

    // /**
    //  * @see https://en.wikipedia.org/wiki/Protein_pKa_calculations
    //  */
    // let pKa = {
    //     D: 4.0,
    //     E: 4.4,
    //     C: 8.3,
    //     Y: 9.6,
    //     H: 6.8,
    //     K: 10.4,
    //     R: 13.5,
    //     CTerm: 3.6,
    //     NTerm: 8.0,
    // };

    let pKa = {
        D: 3.90,
        E: 4.07,
        C: 8.18,
        Y: 10.46,
        H: 6.04,
        K: 10.54,
        R: 12.48,
        CTerm: 3.65,
        NTerm: 8.20,
    };

    let pH = {
        from: 6.5,
        prev: 0,
        next: 14,
        precision: 0.01,
    };

    pH.current = pH.from;
    
    let iteration = 100;
    
    while (--iteration > 0) {
        charge.CTerm = -1/(1+Math.pow(10, (pKa.CTerm - pH.current)));
        charge.D = -counter.D/(1+Math.pow(10, (pKa.D - pH.current)));
        charge.E = -counter.E/(1+Math.pow(10, (pKa.E - pH.current)));
        charge.C = -counter.C/(1+Math.pow(10, (pKa.C - pH.current)));
        charge.Y = -counter.Y/(1+Math.pow(10, (pKa.Y - pH.current)));
        charge.H = counter.H/(1+Math.pow(10, (pH.current - pKa.H)));
        charge.NTerm = 1/(1+Math.pow(10, (pH.current - pKa.NTerm)));
        charge.K = counter.K/(1+Math.pow(10, (pH.current - pKa.K)));
        charge.R = counter.R/(1+Math.pow(10, (pH.current - pKa.R)));

        netCharge = charge.D + charge.E + charge.C + charge.Y + charge.H + charge.K + charge.R + charge.CTerm + charge.NTerm;

        if (isNaN(netCharge)) {
            console.error('netCharge is NaN');
            break;
        }

        if (pH.current >= 14) {
            console.error('pH reached 14');
            break;
        }

        if(netCharge < 0) {
            let tmp = pH.current;
            pH.current = pH.current - ((pH.current-pH.prev)/2);
            pH.next = tmp;

            console.log(`pH: ${pH.current}, next: ${pH.next}`);
        } else {
            let tmp = pH.current;
            pH.current = pH.current + ((pH.next-pH.current)/2);
            pH.prev = tmp;

            console.log(`pH: ${pH.current}, prev: ${pH.prev}`);
        }

        if ((pH.current - pH.prev < pH.precision) && (pH.next - pH.current < pH.precision)) {
            console.info(`Found pH: ${pH.current}, charge: ${netCharge}`);
            console.log(counter);

            break;
        }
    }
})();
