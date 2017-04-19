module.exports = ['$scope', function ($scope) {

    $scope.$watch('query', (query) => {
        if (!query) {
            $scope.filtered_hits = $scope.blast.iteration.hits;

            return;
        }

        const pattern = new RegExp(query.replace(/\*/g, '[A-Z]'));

        $scope.filtered_hits = $scope.blast.iteration.hits
            .filter(function(hit) {
                return hit.hsp.hitSequence.match(pattern)
            })
    });

    $scope.blast = {
        "program": "blastp",
        "version": "BLASTP 2.6.1+",
        "reference": "Stephen F. Altschul, Thomas L. Madden, Alejandro A. Sch&auml;ffer, Jinghui Zhang, Zheng Zhang, Webb Miller, and David J. Lipman (1997), \"Gapped BLAST and PSI-BLAST: a new generation of protein database search programs\", Nucleic Acids Res. 25:3389-3402.",
        "database": "nr",
        "query": {
            "id": "Query_162680",
            "definition": "CopI",
            "length": "142"
        },
        "parameters": {
            "matrix": "BLOSUM62",
            "expect": "10",
            "gap": {
                "open": "11",
                "extend": "1"
            }
        },
        "iteration": {
            "number": "1",
            "query": {
                "id": "Query_162680",
                "definition": "CopI",
                "length": "142"
            },
            "hits": [{
                "accession": "AHK06047",
                "definition": "CopI [Rubrivivax gelatinosus S1]",
                "hsp": {
                    "number": "1",
                    "bitScore": "288.5",
                    "score": "737",
                    "evalue": "1.92118e-98",
                    "query": {
                        "frame": "0",
                        "from": "1",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "24",
                        "to": "165"
                    },
                    "identity": "142",
                    "positive": "142",
                    "gaps": "0",
                    "alignmentLeft": "142",
                    "querySequence": "DAGHDHGSAHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "DAGHDHGSAHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "midline": "DAGHDHGSAHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR"
                },
                "$$hashKey": "object:6"
            }, {
                "accession": "WP_009858954",
                "definition": "hypothetical protein [Rubrivivax benzoatilyticus] >gi|332112596|gb|EGJ12389.1| blue (type 1) copper domain protein [Rubrivivax benzoatilyticus JA2 = ATCC BAA-35]",
                "hsp": {
                    "number": "1",
                    "bitScore": "275.789",
                    "score": "704",
                    "evalue": "2.31542e-93",
                    "query": {
                        "frame": "0",
                        "from": "1",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "24",
                        "to": "168"
                    },
                    "identity": "137",
                    "positive": "141",
                    "gaps": "3",
                    "alignmentLeft": "145",
                    "querySequence": "DAGHDHGSAHAGAHA---HDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "DAGHEHGSAHAGAHAQDTHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRLEHEFVLGTTASLKAHAEEMRAMPDMQHADPGAVRVAAGASGEIVWQFTEAGSFEFGCLIPGHFEAGMVGKVVVR",
                    "midline": "DAGH+HGSAHAGAHA   HDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGR+EHEFVLGTTASLKAHA+EMRAMPDMQHADPGAVRVAAGASGEIVWQFT+AGSFEF CLIPGHFEAGMVGKVVVR"
                },
                "$$hashKey": "object:7"
            }, {
                "accession": "WP_043813344",
                "definition": "blue copper protein [Rubrivivax gelatinosus]",
                "hsp": {
                    "number": "1",
                    "bitScore": "273.863",
                    "score": "699",
                    "evalue": "1.24933e-92",
                    "query": {
                        "frame": "0",
                        "from": "1",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "24",
                        "to": "165"
                    },
                    "identity": "133",
                    "positive": "138",
                    "gaps": "0",
                    "alignmentLeft": "142",
                    "querySequence": "DAGHDHGSAHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "DAGHEHGGVHATAHAHDADTPYGRPGDAAKAQRTVRIVMSDTMRFDPATITVRRGETVRFVAANGGRVEHEFVLGSAASLKAHAEEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "midline": "DAGH+HG  HA AHAHDADTPYGRPGDAAKAQRTVR+VMSDTMRFDPATITVRRGETVRFVAANGGR+EHEFVLG+ ASLKAHA+EMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR"
                },
                "$$hashKey": "object:8"
            }, {
                "accession": "WP_014429819",
                "definition": "hypothetical protein [Rubrivivax gelatinosus] >gi|381380145|dbj|BAL96962.1| blue (type1) copper domain-containing protein [Rubrivivax gelatinosus IL144]",
                "hsp": {
                    "number": "1",
                    "bitScore": "245.743",
                    "score": "626",
                    "evalue": "1.61946e-81",
                    "query": {
                        "frame": "0",
                        "from": "1",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "24",
                        "to": "165"
                    },
                    "identity": "133",
                    "positive": "139",
                    "gaps": "0",
                    "alignmentLeft": "142",
                    "querySequence": "DAGHDHGSAHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "DAGHEHGGAHATAHAHDADTPYGRPGDAARAQRTVRIVMSDTMRFDPATITVRRGETVRFVAANGGRVEHEFVLGSAASLKAHAEEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "midline": "DAGH+HG AHA AHAHDADTPYGRPGDAA+AQRTVR+VMSDTMRFDPATITVRRGETVRFVAANGGR+EHEFVLG+ ASLKAHA+EMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR"
                },
                "$$hashKey": "object:9"
            }, {
                "accession": "WP_055800264",
                "definition": "hypothetical protein [Variovorax sp. Root318D1] >gi|945431403|gb|KQU87642.1| hypothetical protein ASC78_26060 [Variovorax sp. Root318D1]",
                "hsp": {
                    "number": "1",
                    "bitScore": "177.178",
                    "score": "448",
                    "evalue": "2.5308e-54",
                    "query": {
                        "frame": "0",
                        "from": "10",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "27",
                        "to": "158"
                    },
                    "identity": "81",
                    "positive": "100",
                    "gaps": "0",
                    "alignmentLeft": "132",
                    "querySequence": "HAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "HAGGHGHDADEAIGKPGVAAKATRTIHVDMTDGMRFNPASISVKQGETVRFVVKNSGQLKHELVLGTEKELKEHYEAMKKNPEMEHADPNMVTLAAGKSGEIVWQFTKAGKVDFACLQPGHYDAGMKGAVTV",
                    "midline": "HAG H HDAD   G+PG AAKA RT+ V M+D MRF+PA+I+V++GETVRFV  N G+++HE VLGT   LK H + M+  P+M+HADP  V +AAG SGEIVWQFTKAG  +FACL PGH++AGM G V V"
                },
                "$$hashKey": "object:10"
            }, {
                "accession": "OGP22423",
                "definition": "hypothetical protein A2X90_05640 [Deltaproteobacteria bacterium GWA2_65_63] >gi|1084681477|gb|OGP28712.1| hypothetical protein A2X91_08855 [Deltaproteobacteria bacterium GWB2_65_81] >gi|1084689340|gb|OGP36080.1| hypothetical protein A2X98_03175 [Deltaproteobacteria bacterium GWC2_66_88]",
                "hsp": {
                    "number": "1",
                    "bitScore": "175.252",
                    "score": "443",
                    "evalue": "1.47104e-53",
                    "query": {
                        "frame": "0",
                        "from": "5",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "27",
                        "to": "162"
                    },
                    "identity": "80",
                    "positive": "102",
                    "gaps": "7",
                    "alignmentLeft": "140",
                    "querySequence": "DHGSA---HAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "DHGKKEEQHADGHA----AALGKPGDSGKVTRSIQVEMNDTMRFKPASIKVKRGETIRFIVRNTGKLKHEMVLGTIKELKEHAESMRKFPEMEHADPNQVSVEPGKTGELIWQFTKAGTFDFACLVPGHFEAGMVGKVRV",
                    "midline": "DHG     HA  HA       G+PGD+ K  R+++V M+DTMRF PA+I V+RGET+RF+  N G+++HE VLGT   LK HA+ MR  P+M+HADP  V V  G +GE++WQFTKAG+F+FACL+PGHFEAGMVGKV V"
                },
                "$$hashKey": "object:11"
            }, {
                "accession": "AJP48707",
                "definition": "hypothetical protein PG1C_10190 [Rugosibacter aromaticivorans]",
                "hsp": {
                    "number": "1",
                    "bitScore": "174.866",
                    "score": "442",
                    "evalue": "1.73542e-53",
                    "query": {
                        "frame": "0",
                        "from": "5",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "26",
                        "to": "163"
                    },
                    "identity": "79",
                    "positive": "98",
                    "gaps": "0",
                    "alignmentLeft": "138",
                    "querySequence": "DHGSAHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "EHGSKDAMEHHEDHAAAIGKPGDAGKVNRTVEITMSDTMRFSPSSIAAKRGETIRFVLRNTGKIKHEMVLGSIKELKEHAAMMQKMPEMEHADANMASVEAGKTGELIWQFTKSGKFDFACLQPGHFEAGMKGKVVVK",
                    "midline": "+HGS  A  H  D     G+PGDA K  RTV + MSDTMRF P++I  +RGET+RFV  N G+I+HE VLG+   LK HA  M+ MP+M+HAD     V AG +GE++WQFTK+G F+FACL PGHFEAGM GKVVV+"
                },
                "$$hashKey": "object:12"
            }, {
                "accession": "WP_066113387",
                "definition": "hypothetical protein [Xylophilus ampelinus]",
                "hsp": {
                    "number": "1",
                    "bitScore": "174.096",
                    "score": "440",
                    "evalue": "4.16331e-53",
                    "query": {
                        "frame": "0",
                        "from": "10",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "27",
                        "to": "158"
                    },
                    "identity": "80",
                    "positive": "98",
                    "gaps": "0",
                    "alignmentLeft": "132",
                    "querySequence": "HAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "HAGGHGHDADEAIGKPGVASKATRTINVDMTDSMRFTPADITVKQGETVRFVIKNSGQIKHELVLGTEKELKEHYEVMKKNPEMEHADPNMVTLAGGKTGEIVWQFTKAGKVDFACLQPGHYDAGMKGAVKV",
                    "midline": "HAG H HDAD   G+PG A+KA RT+ V M+D+MRF PA ITV++GETVRFV  N G+I+HE VLGT   LK H + M+  P+M+HADP  V +A G +GEIVWQFTKAG  +FACL PGH++AGM G V V"
                },
                "$$hashKey": "object:13"
            }, {
                "accession": "WP_048441025",
                "definition": "hypothetical protein [Caenimonas sp. SL110]",
                "hsp": {
                    "number": "1",
                    "bitScore": "172.17",
                    "score": "435",
                    "evalue": "1.95978e-52",
                    "query": {
                        "frame": "0",
                        "from": "6",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "26",
                        "to": "166"
                    },
                    "identity": "85",
                    "positive": "99",
                    "gaps": "4",
                    "alignmentLeft": "141",
                    "querySequence": "HGSAHAGAHAHDAD----TPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "HGDAGKTAHKFDASQVEATPFGQQGDPKKVTRTIRVSMSDKMRFTPGDLTVRKGETVRFVVANKGAVLHEMVLGTAQALKDHAELMKKHPGMEHDEPSMAHVKPGASGEIVWQFTQAGEFQFACLIPGHFEAGMVGKVAVK",
                    "midline": "HG A   AH  DA     TP+G+ GD  K  RT+RV MSD MRF P  +TVR+GETVRFV AN G + HE VLGT  +LK HA+ M+  P M+H +P    V  GASGEIVWQFT+AG F+FACLIPGHFEAGMVGKV V+"
                },
                "$$hashKey": "object:14"
            }, {
                "accession": "WP_057591343",
                "definition": "hypothetical protein [Variovorax paradoxus] >gi|939490780|gb|KPU95687.1| hypothetical protein APR52_17470 [Variovorax paradoxus] >gi|939501897|gb|KPV06474.1| hypothetical protein APR49_19865 [Variovorax paradoxus] >gi|939504517|gb|KPV09035.1| hypothetical protein APR50_09800 [Variovorax paradoxus] >gi|939519159|gb|KPV22973.1| hypothetical protein APR51_08945 [Variovorax paradoxus] >gi|939530404|gb|KPV33950.1| hypothetical protein APR48_09215 [Variovorax paradoxus] >gi|939533785|gb|KPV37292.1| hypothetical protein APR47_08610 [Variovorax paradoxus]",
                "hsp": {
                    "number": "1",
                    "bitScore": "171.785",
                    "score": "434",
                    "evalue": "3.39962e-52",
                    "query": {
                        "frame": "0",
                        "from": "9",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "26",
                        "to": "158"
                    },
                    "identity": "77",
                    "positive": "98",
                    "gaps": "0",
                    "alignmentLeft": "133",
                    "querySequence": "AHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "THAGGHGHDADEAIGKPGVATKATRTINVDMTDSMRFTPANISVKQGETVRFVIKNSGQLKHELVIGTEKELKEHYEVMKKNPEMEHSDPNMVTLAAGKTGEIVWQFTKAGKVDFACLQPGHYDAGMKGAVNV",
                    "midline": "HAG H HDAD   G+PG A KA RT+ V M+D+MRF PA I+V++GETVRFV  N G+++HE V+GT   LK H + M+  P+M+H+DP  V +AAG +GEIVWQFTKAG  +FACL PGH++AGM G V V"
                },
                "$$hashKey": "object:15"
            }, {
                "accession": "SEF19229",
                "definition": "Uncharacterized copper-binding protein, cupredoxin-like subfamily [Variovorax sp. NFACC28] >gi|1090835592|emb|SEF75804.1| Uncharacterized copper-binding protein, cupredoxin-like subfamily [Variovorax sp. NFACC29] >gi|1099981917|emb|SFB79213.1| Uncharacterized copper-binding protein, cupredoxin-like subfamily [Variovorax sp. NFACC26] >gi|1100000567|emb|SFG78266.1| Uncharacterized copper-binding protein, cupredoxin-like subfamily [Variovorax sp. NFACC27]",
                "hsp": {
                    "number": "1",
                    "bitScore": "171.014",
                    "score": "432",
                    "evalue": "6.62446e-52",
                    "query": {
                        "frame": "0",
                        "from": "10",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "27",
                        "to": "158"
                    },
                    "identity": "77",
                    "positive": "98",
                    "gaps": "0",
                    "alignmentLeft": "132",
                    "querySequence": "HAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "HAGGHGHDANEAIGKPGVATKATRTINVDMTDSMRFTPADISVKQGETVRFVVKNSGQLKHELVIGTEKELKEHYEVMKKNPEMEHSDPNMVTLAAGKSGEIVWQFTKAGKVDFACLQPGHYDAGMKGAVNV",
                    "midline": "HAG H HDA+   G+PG A KA RT+ V M+D+MRF PA I+V++GETVRFV  N G+++HE V+GT   LK H + M+  P+M+H+DP  V +AAG SGEIVWQFTKAG  +FACL PGH++AGM G V V"
                }
            }, {
                "accession": "WP_057595434",
                "definition": "hypothetical protein [Variovorax paradoxus] >gi|939484436|gb|KPU89554.1| hypothetical protein APR52_38185 [Variovorax paradoxus] >gi|939494476|gb|KPU99323.1| hypothetical protein APR50_33615 [Variovorax paradoxus] >gi|939496206|gb|KPV01006.1| hypothetical protein APR49_32420 [Variovorax paradoxus] >gi|939512577|gb|KPV16666.1| hypothetical protein APR51_29705 [Variovorax paradoxus] >gi|939522761|gb|KPV26481.1| hypothetical protein APR48_31000 [Variovorax paradoxus] >gi|939524050|gb|KPV27729.1| hypothetical protein APR47_30340 [Variovorax paradoxus]",
                "hsp": {
                    "number": "1",
                    "bitScore": "170.629",
                    "score": "431",
                    "evalue": "8.99772e-52",
                    "query": {
                        "frame": "0",
                        "from": "10",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "27",
                        "to": "158"
                    },
                    "identity": "79",
                    "positive": "95",
                    "gaps": "0",
                    "alignmentLeft": "132",
                    "querySequence": "HAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "HAGGHGHDADEAIGKPGLAAKATRTINVDMADNMRFTPADISVTQGETVRFVIKNSGQIKHELVLGTEKELKEHYEAMKKNPEMEHADPNMVTLAGGKTGEIVWQFTKAGKVDFGCLQPGHYDAGMKGAVKV",
                    "midline": "HAG H HDAD   G+PG AAKA RT+ V M+D MRF PA I+V +GETVRFV  N G+I+HE VLGT   LK H + M+  P+M+HADP  V +A G +GEIVWQFTKAG  +F CL PGH++AGM G V V"
                }
            }, {
                "accession": "WP_007828402",
                "definition": "hypothetical protein [Variovorax sp. CF313] >gi|398089506|gb|EJL80022.1| putative copper-binding protein [Variovorax sp. CF313]",
                "hsp": {
                    "number": "1",
                    "bitScore": "170.244",
                    "score": "430",
                    "evalue": "1.15709e-51",
                    "query": {
                        "frame": "0",
                        "from": "9",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "26",
                        "to": "158"
                    },
                    "identity": "76",
                    "positive": "98",
                    "gaps": "0",
                    "alignmentLeft": "133",
                    "querySequence": "AHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "THAGGHGHDADEAIGKPGVATKATRTINVDMTDSMRFTPANISVKQGETVRFVIKNSGQLKHELVIGTEKELKEHYEVMKKNPEMEHSDPNMVTLAAGKTGEIVWQFTQAGKVDFACLQPGHYDAGMKGAVNV",
                    "midline": "HAG H HDAD   G+PG A KA RT+ V M+D+MRF PA I+V++GETVRFV  N G+++HE V+GT   LK H + M+  P+M+H+DP  V +AAG +GEIVWQFT+AG  +FACL PGH++AGM G V V"
                }
            }, {
                "accession": "WP_061542433",
                "definition": "hypothetical protein [Collimonas fungivorans]",
                "hsp": {
                    "number": "1",
                    "bitScore": "169.859",
                    "score": "429",
                    "evalue": "1.25047e-51",
                    "query": {
                        "frame": "0",
                        "from": "11",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "22",
                        "to": "154"
                    },
                    "identity": "76",
                    "positive": "98",
                    "gaps": "1",
                    "alignmentLeft": "133",
                    "querySequence": "AGAHAHDADTP-YGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "ANAFAHDEHAPSVGKPGDAGKVSKTVEIDMNDTMRFTPATILVKRGETVRFLVKNSGKVKHEMVLGSIKELQEHAALMQKFPEMEHSDPNQVSLAPGKSGELIWQFSKAGRFDFACLQPGHFEAGMRGDIVVK",
                    "midline": "A A AHD   P  G+PGDA K  +TV + M+DTMRF PATI V+RGETVRF+  N G+++HE VLG+   L+ HA  M+  P+M+H+DP  V +A G SGE++WQF+KAG F+FACL PGHFEAGM G +VV+"
                }
            }, {
                "accession": "OAK63621",
                "definition": "hypothetical protein A3K87_16170 [Variovorax paradoxus]",
                "hsp": {
                    "number": "1",
                    "bitScore": "169.088",
                    "score": "427",
                    "evalue": "2.99595e-51",
                    "query": {
                        "frame": "0",
                        "from": "10",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "27",
                        "to": "158"
                    },
                    "identity": "76",
                    "positive": "97",
                    "gaps": "0",
                    "alignmentLeft": "132",
                    "querySequence": "HAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "HAGGHGHEADEAIGKPGVASKTTRTINVDMADSMRFTPTDISVKQGETVRFVIKNSGQLKHELVLGTEKELKEHYEVMKKNPEMEHSDPNMVTLAAGKSGEIVWQFTKAGKVDFACLQPGHYDAGMKGAVNV",
                    "midline": "HAG H H+AD   G+PG A+K  RT+ V M+D+MRF P  I+V++GETVRFV  N G+++HE VLGT   LK H + M+  P+M+H+DP  V +AAG SGEIVWQFTKAG  +FACL PGH++AGM G V V"
                }
            }, {
                "accession": "WP_057390705",
                "definition": "hypothetical protein [Pseudomonas aeruginosa] >gi|943814250|gb|KQJ56549.1| hypothetical protein AN280_10080 [Pseudomonas aeruginosa]",
                "hsp": {
                    "number": "1",
                    "bitScore": "168.318",
                    "score": "425",
                    "evalue": "6.37089e-51",
                    "query": {
                        "frame": "0",
                        "from": "10",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "27",
                        "to": "158"
                    },
                    "identity": "77",
                    "positive": "98",
                    "gaps": "0",
                    "alignmentLeft": "132",
                    "querySequence": "HAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "HAGGHGHEADEAIGKPGVAAKATRTINVDMADSMRFTPADISVKQGETVRFVIKNSGQLKHELVIGTEKELKEHYEVMKKNPEMEHADPNMVTLAGGKTGEIVWQFTKAGKVDFACLQPGHYDAGMRGAVNV",
                    "midline": "HAG H H+AD   G+PG AAKA RT+ V M+D+MRF PA I+V++GETVRFV  N G+++HE V+GT   LK H + M+  P+M+HADP  V +A G +GEIVWQFTKAG  +FACL PGH++AGM G V V"
                }
            }, {
                "accession": "WP_021003599",
                "definition": "copper-binding protein [Variovorax paradoxus] >gi|537388394|gb|AGU52766.1| putative copper-binding protein [Variovorax paradoxus B4]",
                "hsp": {
                    "number": "1",
                    "bitScore": "168.703",
                    "score": "426",
                    "evalue": "6.39254e-51",
                    "query": {
                        "frame": "0",
                        "from": "17",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "36",
                        "to": "160"
                    },
                    "identity": "78",
                    "positive": "94",
                    "gaps": "0",
                    "alignmentLeft": "125",
                    "querySequence": "DADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "DADTAIGQPGVAAKATRTINVDMTDGMRFTPADIKVKQGETVRFVVKNSGQLKHELVLGTEKELKEHYEAMKKNPEMEHADPNMVTLAAGKSGEIVWQFTKAGKFDFACLQPGHYDAGMKGAVTV",
                    "midline": "DADT  G+PG AAKA RT+ V M+D MRF PA I V++GETVRFV  N G+++HE VLGT   LK H + M+  P+M+HADP  V +AAG SGEIVWQFTKAG F+FACL PGH++AGM G V V"
                }
            }, {
                "accession": "WP_026330412",
                "definition": "MULTISPECIES: hypothetical protein [Burkholderiales]",
                "hsp": {
                    "number": "1",
                    "bitScore": "168.703",
                    "score": "426",
                    "evalue": "7.10857e-51",
                    "query": {
                        "frame": "0",
                        "from": "2",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "30",
                        "to": "170"
                    },
                    "identity": "76",
                    "positive": "96",
                    "gaps": "0",
                    "alignmentLeft": "141",
                    "querySequence": "AGHDHGSAHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "AGHDMQGMHGSMHGGASHSNVGKPGDPAKVDRTIEVVMDDSMRFTPATITVKKGETIRFFVKNAGKVPHEMVVGSLQELKEHAEMMRKMPQMQHAEPNMVTLQPGQRGGLVWQFDQPGTVDFACLIPGHMEAGMVGKIVVE",
                    "midline": "AGHD    H   H   + +  G+PGD AK  RT+ VVM D+MRF PATITV++GET+RF   N G++ HE V+G+   LK HA+ MR MP MQHA+P  V +  G  G +VWQF + G+ +FACLIPGH EAGMVGK+VV"
                }
            }, {
                "accession": "WP_070525439",
                "definition": "hypothetical protein [Jeongeupia sp. USM3] >gi|1087789300|gb|AOX99055.1| hypothetical protein BJP62_00460 [Jeongeupia sp. USM3]",
                "hsp": {
                    "number": "1",
                    "bitScore": "167.548",
                    "score": "423",
                    "evalue": "9.43555e-51",
                    "query": {
                        "frame": "0",
                        "from": "7",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "22",
                        "to": "152"
                    },
                    "identity": "79",
                    "positive": "96",
                    "gaps": "4",
                    "alignmentLeft": "135",
                    "querySequence": "GSAHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "GGTHAGGH----DAAIGQPGSAAKVNRTVTVEMTDDMRYSPATITVRQGETIRFVAKNLGKVKHELVIGTEAELKAHYEQMKKFPDMEHEDPQTASVAPGKSGEVIWQFTKAGKVNFACLQPGHYDAGMKGYVDV",
                    "midline": "G  HAG H    D   G+PG AAK  RTV V M+D MR+ PATITVR+GET+RFVA N G+++HE V+GT A LKAH ++M+  PDM+H DP    VA G SGE++WQFTKAG   FACL PGH++AGM G V V"
                }
            }, {
                "accession": "WP_062471848",
                "definition": "hypothetical protein [Variovorax boronicumulans]",
                "hsp": {
                    "number": "1",
                    "bitScore": "167.933",
                    "score": "424",
                    "evalue": "1.00842e-50",
                    "query": {
                        "frame": "0",
                        "from": "10",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "27",
                        "to": "158"
                    },
                    "identity": "78",
                    "positive": "98",
                    "gaps": "0",
                    "alignmentLeft": "132",
                    "querySequence": "HAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "HAGGHGHDAEAAVGKPGVAAKVTRTVQVDMTDSMRFTPADIKVRQGETVRFVVKNSGVLKHELVLGTEKALLAHYEAMKKNPEMEHADPNMVTLAAGKTGEIVWQFTQAGKVDFGCLQPGHYDAGMKGAVLV",
                    "midline": "HAG H HDA+   G+PG AAK  RTV+V M+D+MRF PA I VR+GETVRFV  N G ++HE VLGT  +L AH + M+  P+M+HADP  V +AAG +GEIVWQFT+AG  +F CL PGH++AGM G V+V"
                }
            }, {
                "accession": "ODT34460",
                "definition": "hypothetical protein ABS55_11530 [Lautropia sp. SCN 70-15]",
                "hsp": {
                    "number": "1",
                    "bitScore": "167.933",
                    "score": "424",
                    "evalue": "1.19387e-50",
                    "query": {
                        "frame": "0",
                        "from": "6",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "26",
                        "to": "165"
                    },
                    "identity": "82",
                    "positive": "97",
                    "gaps": "4",
                    "alignmentLeft": "140",
                    "querySequence": "HGSAHAGAHAHDA----DTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "HGSSHDASHGRKALEVVETAFGRTGDPSKASRTIRVDMSDTMRFSPDAIQVRRGETVSFEIANAGRVLHEMVIGTEAELKAHAEMMKKFPGMEHEEPYMAHVDPGKSGRIVWQFTKPGEYRFACLIPGHFEAGMVGRITV",
                    "midline": "HGS+H  +H   A    +T +GR GD +KA RT+RV MSDTMRF P  I VRRGETV F  AN GR+ HE V+GT A LKAHA+ M+  P M+H +P    V  G SG IVWQFTK G + FACLIPGHFEAGMVG++ V"
                }
            }, {
                "accession": "ODU14541",
                "definition": "hypothetical protein ABS94_22145 [Variovorax sp. SCN 67-85] >gi|1064231157|gb|ODV26494.1| hypothetical protein ABT25_05955 [Variovorax sp. SCN 67-20] >gi|1113643738|gb|OJZ02459.1| hypothetical protein BGP22_16085 [Variovorax sp. 67-131]",
                "hsp": {
                    "number": "1",
                    "bitScore": "166.777",
                    "score": "421",
                    "evalue": "2.36598e-50",
                    "query": {
                        "frame": "0",
                        "from": "10",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "27",
                        "to": "158"
                    },
                    "identity": "75",
                    "positive": "97",
                    "gaps": "0",
                    "alignmentLeft": "132",
                    "querySequence": "HAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "HAGGHGHEADEAIGKPGVATKTTRTINVDMADSMRFTPADISVKQGETVRFVIKNSGQLKHELVIGTEKELKEHYEVMKKNPEMEHSDPNMVTLAAGKTGEIVWQFTKAGKVDFACLQPGHYDAGMKGAVNV",
                    "midline": "HAG H H+AD   G+PG A K  RT+ V M+D+MRF PA I+V++GETVRFV  N G+++HE V+GT   LK H + M+  P+M+H+DP  V +AAG +GEIVWQFTKAG  +FACL PGH++AGM G V V"
                }
            }, {
                "accession": "KRT73917",
                "definition": "hypothetical protein XU12_C0006G0084 [Deltaproteobacteria bacterium CSP1-8]",
                "hsp": {
                    "number": "1",
                    "bitScore": "169.474",
                    "score": "428",
                    "evalue": "3.14324e-50",
                    "query": {
                        "frame": "0",
                        "from": "6",
                        "to": "139"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "23",
                        "to": "160"
                    },
                    "identity": "77",
                    "positive": "94",
                    "gaps": "4",
                    "alignmentLeft": "138",
                    "querySequence": "HGSAHAGAHAHDADT----PYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKV",
                    "hitSequence": "HGDKHHDKQEDRADVGHEGALGRPGDPGKVTRNVEVEMSDAMRFNPESIRVKRGETIRFIVKNTGKLQHEMVLGTIMELKEHAELMRKFPEMEHADPNQVSVEPGKTGELIWQFTNAGTFDFACLVPGHFEAGMVGKV",
                    "midline": "HG  H       AD       GRPGD  K  R V V MSD MRF+P +I V+RGET+RF+  N G+++HE VLGT   LK HA+ MR  P+M+HADP  V V  G +GE++WQFT AG+F+FACL+PGHFEAGMVGKV"
                }
            }, {
                "accession": "WP_068607201",
                "definition": "hypothetical protein [Tepidimonas fonticaldi] >gi|1040038912|gb|OBS31583.1| hypothetical protein A9O67_12615 [Tepidimonas fonticaldi]",
                "hsp": {
                    "number": "1",
                    "bitScore": "166.392",
                    "score": "420",
                    "evalue": "4.76109e-50",
                    "query": {
                        "frame": "0",
                        "from": "6",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "38",
                        "to": "170"
                    },
                    "identity": "76",
                    "positive": "96",
                    "gaps": "4",
                    "alignmentLeft": "137",
                    "querySequence": "HGSAHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "HGSMHGGA----SHSNVGKPGDPAKVDRTIEVVMDDSMRFTPATITVKKGETIRFFVKNAGKVPHEMVVGSLQELKEHAEMMRKMPQMQHAEPNMVTLQPGQRGGLVWQFDQPGTVDFACLIPGHMEAGMVGKIVVE",
                    "midline": "HGS H GA    + +  G+PGD AK  RT+ VVM D+MRF PATITV++GET+RF   N G++ HE V+G+   LK HA+ MR MP MQHA+P  V +  G  G +VWQF + G+ +FACLIPGH EAGMVGK+VV"
                }
            }, {
                "accession": "WP_055795200",
                "definition": "hypothetical protein [Variovorax sp. Root318D1] >gi|945435297|gb|KQU91506.1| hypothetical protein ASC78_00775 [Variovorax sp. Root318D1]",
                "hsp": {
                    "number": "1",
                    "bitScore": "166.007",
                    "score": "419",
                    "evalue": "4.89832e-50",
                    "query": {
                        "frame": "0",
                        "from": "10",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "27",
                        "to": "157"
                    },
                    "identity": "79",
                    "positive": "96",
                    "gaps": "1",
                    "alignmentLeft": "132",
                    "querySequence": "HAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "HAGGHG-DADEAIGKPGAAAKATRTINVDMTDGMRFTPADVRVKQGETVRFVVKNSGQLKHELVLGTQKELKEHYEAMKKNPEMEHADPNMVTLAAGKSGEIVWQFTKAGKVDFACLQPGHYDAGMKGAVTV",
                    "midline": "HAG H  DAD   G+PG AAKA RT+ V M+D MRF PA + V++GETVRFV  N G+++HE VLGT   LK H + M+  P+M+HADP  V +AAG SGEIVWQFTKAG  +FACL PGH++AGM G V V"
                }
            }, {
                "accession": "WP_058616472",
                "definition": "hypothetical protein [Tepidimonas taiwanensis]",
                "hsp": {
                    "number": "1",
                    "bitScore": "166.392",
                    "score": "420",
                    "evalue": "4.91977e-50",
                    "query": {
                        "frame": "0",
                        "from": "6",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "38",
                        "to": "170"
                    },
                    "identity": "76",
                    "positive": "96",
                    "gaps": "4",
                    "alignmentLeft": "137",
                    "querySequence": "HGSAHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "HGSMHGGA----SHSNVGKPGDPAKVDRTIEVVMDDSMRFTPATITVKKGETIRFFVKNAGKVPHEMVVGSLQELKEHAEMMRKMPQMQHAEPNMVTLQPGQRGGLVWQFDRPGTVDFACLIPGHMEAGMVGKIVVE",
                    "midline": "HGS H GA    + +  G+PGD AK  RT+ VVM D+MRF PATITV++GET+RF   N G++ HE V+G+   LK HA+ MR MP MQHA+P  V +  G  G +VWQF + G+ +FACLIPGH EAGMVGK+VV"
                }
            }, {
                "accession": "WP_061959531",
                "definition": "copper-binding protein [Cupriavidus pauculus]",
                "hsp": {
                    "number": "1",
                    "bitScore": "165.622",
                    "score": "418",
                    "evalue": "6.32728e-50",
                    "query": {
                        "frame": "0",
                        "from": "23",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "37",
                        "to": "156"
                    },
                    "identity": "73",
                    "positive": "91",
                    "gaps": "0",
                    "alignmentLeft": "120",
                    "querySequence": "GRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "GQPGKLDKVSRTVNVTMSDTMRFAPDSIQVKRGETVRFVVSNVGKVEHEMVIGTAAELREHAQMMRSMPDTRHSNPNQITLAPGKQGTLVWQFDGTGTFEFACLVPGHFEAGMVGKVAVK",
                    "midline": "G+PG   K  RTV V MSDTMRF P +I V+RGETVRFV +N G++EHE V+GT A L+ HAQ MR+MPD +H++P  + +A G  G +VWQF   G+FEFACL+PGHFEAGMVGKV V+"
                }
            }, {
                "accession": "WP_034303648",
                "definition": "blue copper protein [Herbaspirillum sp. RV1423]",
                "hsp": {
                    "number": "1",
                    "bitScore": "165.622",
                    "score": "418",
                    "evalue": "6.42843e-50",
                    "query": {
                        "frame": "0",
                        "from": "4",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "27",
                        "to": "160"
                    },
                    "identity": "80",
                    "positive": "97",
                    "gaps": "5",
                    "alignmentLeft": "139",
                    "querySequence": "HDHGSAHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "HAHGAGH-----DDHASAIGKPGNPAKVTRTMTVDMSDAMRFTPATINVKRGETVKFIVKNSGKIKHEMVLGTMQELKEHAEVMRKNPEMEHADENQVSVDPGKTGEIVWQFTKAGTFDFACLQPGHFEAGMKGTVAVK",
                    "midline": "H HG+ H      D  +  G+PG+ AK  RT+ V MSD MRF PATI V+RGETV+F+  N G+I+HE VLGT   LK HA+ MR  P+M+HAD   V V  G +GEIVWQFTKAG+F+FACL PGHFEAGM G V V+"
                }
            }, {
                "accession": "SEB25649",
                "definition": "Uncharacterized copper-binding protein, cupredoxin-like subfamily [Variovorax sp. YR216]",
                "hsp": {
                    "number": "1",
                    "bitScore": "166.007",
                    "score": "419",
                    "evalue": "6.58017e-50",
                    "query": {
                        "frame": "0",
                        "from": "10",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "30",
                        "to": "166"
                    },
                    "identity": "79",
                    "positive": "95",
                    "gaps": "4",
                    "alignmentLeft": "137",
                    "querySequence": "HAGAHAHDAD----TPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "HAKAHVFDPSKVEATAFGQEGNPKKVSRIIHVGMSDNMRFSPASISVKRGETVKLLVRNDGRILHEMVLGTKEALREHAELMKKFPEMEHADPNMAHVKPGKSGEIVWQFTKAGEFEFACLQPGHFEAGMVGKVEVK",
                    "midline": "HA AH  D      T +G+ G+  K  R + V MSD MRF PA+I+V+RGETV+ +  N GRI HE VLGT  +L+ HA+ M+  P+M+HADP    V  G SGEIVWQFTKAG FEFACL PGHFEAGMVGKV V+"
                }
            }, {
                "accession": "WP_070059968",
                "definition": "hypothetical protein [Variovorax boronicumulans] >gi|1075008038|gb|OEZ31630.1| hypothetical protein AO062_05185 [Variovorax boronicumulans]",
                "hsp": {
                    "number": "1",
                    "bitScore": "165.622",
                    "score": "418",
                    "evalue": "7.13772e-50",
                    "query": {
                        "frame": "0",
                        "from": "10",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "27",
                        "to": "158"
                    },
                    "identity": "76",
                    "positive": "97",
                    "gaps": "0",
                    "alignmentLeft": "132",
                    "querySequence": "HAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "HAGGHGHDAEAAVGKPGVATKVTRTVQVDMTDSMRFTPADIKVKQGETVRFVVKNSGVLKHELVLGTEKALLAHYEAMKKNPEMEHADPNMVTLAAGKTGEIVWQFTQAGKVDFGCLQPGHYDAGMKGAVLV",
                    "midline": "HAG H HDA+   G+PG A K  RTV+V M+D+MRF PA I V++GETVRFV  N G ++HE VLGT  +L AH + M+  P+M+HADP  V +AAG +GEIVWQFT+AG  +F CL PGH++AGM G V+V"
                }
            }, {
                "accession": "WP_024978254",
                "definition": "hypothetical protein [Ralstonia pickettii]",
                "hsp": {
                    "number": "1",
                    "bitScore": "165.622",
                    "score": "418",
                    "evalue": "7.97487e-50",
                    "query": {
                        "frame": "0",
                        "from": "9",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "26",
                        "to": "158"
                    },
                    "identity": "84",
                    "positive": "95",
                    "gaps": "1",
                    "alignmentLeft": "134",
                    "querySequence": "AHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "SHAGGHDH-GDAAIGEPGDAAHITRTVRVDMTDTMRFTPAQITVQRGETIRFEVANSGQVRHEMTLGTPADLVAHAEQMRKHPEMEHADGNAVTVDPGQRGEIVWHFTRTGSVEFACLQPGHFEAGMRGAVQVR",
                    "midline": "+HAG H H  D   G PGDAA   RTVRV M+DTMRF PA ITV+RGET+RF  AN G++ HE  LGT A L AHA++MR  P+M+HAD  AV V  G  GEIVW FT+ GS EFACL PGHFEAGM G V VR"
                }
            }, {
                "accession": "WP_070289063",
                "definition": "hypothetical protein [Janthinobacterium sp. HH106] >gi|1078241852|gb|OEZ91405.1| plastocyanin [Janthinobacterium sp. HH106]",
                "hsp": {
                    "number": "1",
                    "bitScore": "165.622",
                    "score": "418",
                    "evalue": "1.01203e-49",
                    "query": {
                        "frame": "0",
                        "from": "2",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "34",
                        "to": "167"
                    },
                    "identity": "78",
                    "positive": "98",
                    "gaps": "6",
                    "alignmentLeft": "140",
                    "querySequence": "AGHDHGSAHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "SGHQHGANEQSA------SLVGKAGDPKKATRTVTVDMNDTMRFNPASIAVKRGETIRFVVNNSGKIKHEMVIGSESELKEHAQQMAKFPEMEHAEPNQVTLTPGKSGTIVWQFDKAGKVEFACLQPGHFEAGMKGQVVV",
                    "midline": "+GH HG+    A      +  G+ GD  KA RTV V M+DTMRF+PA+I V+RGET+RFV  N G+I+HE V+G+ + LK HAQ+M   P+M+HA+P  V +  G SG IVWQF KAG  EFACL PGHFEAGM G+VVV"
                }
            }, {
                "accession": "WP_051709832",
                "definition": "hypothetical protein [Andreprevotia chitinilytica]",
                "hsp": {
                    "number": "1",
                    "bitScore": "164.851",
                    "score": "416",
                    "evalue": "1.37117e-49",
                    "query": {
                        "frame": "0",
                        "from": "7",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "20",
                        "to": "158"
                    },
                    "identity": "75",
                    "positive": "103",
                    "gaps": "3",
                    "alignmentLeft": "139",
                    "querySequence": "GSAHAGAHA--HDADTP-YGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "GALASGNHAGGHDSETSALGQPGKAAKVKQTIEISLSDTMRFNPDTLTVKQGDTVRFVVKNDGKLKHELVLGTAKQLKEHAEMMRKFPEMEHADANQATVEPGKTGELIWQFTRKGTFDFACLQAGHFEAGMRGKVVVK",
                    "midline": "G+  +G HA  HD++T   G+PG AAK ++T+ + +SDTMRF+P T+TV++G+TVRFV  N G+++HE VLGT   LK HA+ MR  P+M+HAD     V  G +GE++WQFT+ G+F+FACL  GHFEAGM GKVVV+"
                }
            }, {
                "accession": "OGI53606",
                "definition": "hypothetical protein A3D32_04460 [Candidatus Muproteobacteria bacterium RIFCSPHIGHO2_02_FULL_60_13]",
                "hsp": {
                    "number": "1",
                    "bitScore": "164.851",
                    "score": "416",
                    "evalue": "1.46639e-49",
                    "query": {
                        "frame": "0",
                        "from": "7",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "20",
                        "to": "155"
                    },
                    "identity": "74",
                    "positive": "95",
                    "gaps": "0",
                    "alignmentLeft": "136",
                    "querySequence": "GSAHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "GGKHAGGHDDDHAMAYGAPSEAAQVSRVIEVQAADNMRYTPAAITVRRGETVKFVVKNTGKLPHEFVLGNAQSLKEHAEVMRRYPDMEHDDPNMVKMAPGGTGNLIWKFTRAGTVEFACLIPGHYEAGMKGRIRVN",
                    "midline": "G  HAG H  D    YG P +AA+  R + V  +D MR+ PA ITVRRGETV+FV  N G++ HEFVLG   SLK HA+ MR  PDM+H DP  V++A G +G ++W+FT+AG+ EFACLIPGH+EAGM G++ V"
                }
            }, {
                "accession": "WP_068675923",
                "definition": "hypothetical protein [Variovorax sp. WDL1] >gi|983054444|gb|KWT97261.1| Copper tolerance protein [Variovorax sp. WDL1]",
                "hsp": {
                    "number": "1",
                    "bitScore": "165.236",
                    "score": "417",
                    "evalue": "1.47498e-49",
                    "query": {
                        "frame": "0",
                        "from": "14",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "30",
                        "to": "157"
                    },
                    "identity": "75",
                    "positive": "93",
                    "gaps": "0",
                    "alignmentLeft": "128",
                    "querySequence": "HAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "HGHDAADAIGKPGVAAKATRTVKVDMTDNMRFTPASIDVKQNETVRLVVTNSGKIKHELVLGTEKELKEHYEAMKKNPEMEHADPNMVTLAAGKTGEVVWQFTKAGKIDFACLQPGHYDAGMKGAVNV",
                    "midline": "H HDA    G+PG AAKA RTV+V M+D MRF PA+I V++ ETVR V  N G+I+HE VLGT   LK H + M+  P+M+HADP  V +AAG +GE+VWQFTKAG  +FACL PGH++AGM G V V"
                }
            }, {
                "accession": "OGA99554",
                "definition": "hypothetical protein A3E25_12660 [Burkholderiales bacterium RIFCSPHIGHO2_12_FULL_69_20]",
                "hsp": {
                    "number": "1",
                    "bitScore": "164.851",
                    "score": "416",
                    "evalue": "1.5732e-49",
                    "query": {
                        "frame": "0",
                        "from": "22",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "41",
                        "to": "161"
                    },
                    "identity": "76",
                    "positive": "92",
                    "gaps": "0",
                    "alignmentLeft": "121",
                    "querySequence": "YGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "FGRAGDPRQVIRTIRLDMTDAFRFTPADITVKRGETVKFVVANRGKVLHEMVLGTTEDLKAHADMMRRFPDMEHADANMAHVKPGAKGEIVWQFTQAGEYQFACLLPGHYEAGMVGKVVVK",
                    "midline": "+GR GD  +  RT+R+ M+D  RF PA ITV+RGETV+FV AN G++ HE VLGTT  LKAHA  MR  PDM+HAD     V  GA GEIVWQFT+AG ++FACL+PGH+EAGMVGKVVV+"
                }
            }, {
                "accession": "WP_009240334",
                "definition": "MULTISPECIES: hypothetical protein [Ralstonia] >gi|308922168|gb|EFP67798.1| copper binding protein, plastocyanin/azurin family [Ralstonia sp. 5_7_47FAA] >gi|348614214|gb|EGY63770.1| hypothetical protein HMPREF0989_00484 [Ralstonia sp. 5_2_56FAA] >gi|674757175|gb|KFL22543.1| copper binding s, plastocyanin/azurin family protein [Ralstonia pickettii] >gi|1079660325|emb|SCW97810.1| Uncharacterized copper-binding protein, cupredoxin-like subfamily [Ralstonia sp. UNCCL144]",
                "hsp": {
                    "number": "1",
                    "bitScore": "164.466",
                    "score": "415",
                    "evalue": "2.2043e-49",
                    "query": {
                        "frame": "0",
                        "from": "10",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "27",
                        "to": "158"
                    },
                    "identity": "83",
                    "positive": "94",
                    "gaps": "1",
                    "alignmentLeft": "133",
                    "querySequence": "HAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "HAGGHDH-SDAAIGEPGDATRITRTVRVDMTDTMRFMPAQITVQRGETIRFEVINSGQVRHEMTLGTPADLVAHAEQMRKHPEMEHADANAVTVDPGQRGEIVWHFTHAGSIEFACLQPGHFEAGMRGAVQVR",
                    "midline": "HAG H H +D   G PGDA +  RTVRV M+DTMRF PA ITV+RGET+RF   N G++ HE  LGT A L AHA++MR  P+M+HAD  AV V  G  GEIVW FT AGS EFACL PGHFEAGM G V VR"
                }
            }, {
                "accession": "WP_071080251",
                "definition": "hypothetical protein [Janthinobacterium lividum] >gi|1092396901|gb|OHV93716.1| blue copper protein (plasmid) [Janthinobacterium lividum]",
                "hsp": {
                    "number": "1",
                    "bitScore": "164.081",
                    "score": "414",
                    "evalue": "2.44391e-49",
                    "query": {
                        "frame": "0",
                        "from": "5",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "16",
                        "to": "156"
                    },
                    "identity": "79",
                    "positive": "98",
                    "gaps": "4",
                    "alignmentLeft": "141",
                    "querySequence": "DHGSAHAGAHAHDAD----TPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "DSSPAAHGGHQHGANEQSVSLVGKAGDPKKATRTVTVDMNDTMRFNPASIAVKRGETIRFVVNNSGKIKHEMVIGSESELKEHAQQMAKFPEMEHAEPNQVTLTPGKSGTIVWQFDKAGKVEFACLQPGHFEAGMKGQVVV",
                    "midline": "D   A  G H H A+    +  G+ GD  KA RTV V M+DTMRF+PA+I V+RGET+RFV  N G+I+HE V+G+ + LK HAQ+M   P+M+HA+P  V +  G SG IVWQF KAG  EFACL PGHFEAGM G+VVV"
                }
            }, {
                "accession": "SFQ05878",
                "definition": "Uncharacterized copper-binding protein, cupredoxin-like subfamily [Ralstonia sp. NFACC01]",
                "hsp": {
                    "number": "1",
                    "bitScore": "164.081",
                    "score": "414",
                    "evalue": "2.83442e-49",
                    "query": {
                        "frame": "0",
                        "from": "9",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "26",
                        "to": "158"
                    },
                    "identity": "83",
                    "positive": "94",
                    "gaps": "1",
                    "alignmentLeft": "134",
                    "querySequence": "AHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "SHAGGHDHD-DAAIGEPGDAAHISRTVRVDMADTMRFTPAQITVQRGETIRFEVVNTGHVRHEMTLGTPADLAAHAEQMRKHPEMEHADGNAVTVDPGQRGEIVWHFTRTGSVDFACLQPGHFEAGMRGAVQVR",
                    "midline": "+HAG H HD D   G PGDAA   RTVRV M+DTMRF PA ITV+RGET+RF   N G + HE  LGT A L AHA++MR  P+M+HAD  AV V  G  GEIVW FT+ GS +FACL PGHFEAGM G V VR"
                }
            }, {
                "accession": "OGA83326",
                "definition": "hypothetical protein A2711_13705 [Burkholderiales bacterium RIFCSPHIGHO2_01_FULL_63_240] >gi|1082847671|gb|OGB61248.1| hypothetical protein A3G29_06145 [Burkholderiales bacterium RIFCSPLOWO2_12_FULL_64_99]",
                "hsp": {
                    "number": "1",
                    "bitScore": "164.081",
                    "score": "414",
                    "evalue": "3.02233e-49",
                    "query": {
                        "frame": "0",
                        "from": "1",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "17",
                        "to": "153"
                    },
                    "identity": "78",
                    "positive": "99",
                    "gaps": "4",
                    "alignmentLeft": "141",
                    "querySequence": "DAGHDHGSAHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "DHAHDHG---AGTQAAE-ETAIGKPGRASKVTRTIKVSMSDKMRFEPASIQVKQGETVRFVVRNAGQIKHEMNLGTEKELLEHLEVMKKFPNMEHDEPNKVTIAPGQQGEIVWQFTKAGTVNFACLVPGHYEAGMKGKVQV",
                    "midline": "D  HDHG   AG  A + +T  G+PG A+K  RT++V MSD MRF+PA+I V++GETVRFV  N G+I+HE  LGT   L  H + M+  P+M+H +P  V +A G  GEIVWQFTKAG+  FACL+PGH+EAGM GKV V"
                }
            }, {
                "accession": "WP_028197046",
                "definition": "hypothetical protein [Paraburkholderia fungorum] >gi|780551371|gb|AJZ56091.1| copper binding s, plastocyanin/azurin family protein (plasmid) [Paraburkholderia fungorum]",
                "hsp": {
                    "number": "1",
                    "bitScore": "164.081",
                    "score": "414",
                    "evalue": "3.19659e-49",
                    "query": {
                        "frame": "0",
                        "from": "8",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "16",
                        "to": "150"
                    },
                    "identity": "75",
                    "positive": "96",
                    "gaps": "0",
                    "alignmentLeft": "135",
                    "querySequence": "SAHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "SSAAYSHGDDETFPVGKPGNAANVTRTVNVEMSDLMRFSPSQLTVKRGETVKFVVKNTGKIRHEMMLGTEAGLKEHAALMRKFPEMEHAEANAVTVNAGKSAQVIWQFSKTGVVDFACLEPGHYEAGMVGRIAVR",
                    "midline": "S+ A +H  D   P G+PG+AA   RTV V MSD MRF P+ +TV+RGETV+FV  N G+I HE +LGT A LK HA  MR  P+M+HA+  AV V AG S +++WQF+K G  +FACL PGH+EAGMVG++ VR"
                }
            }, {
                "accession": "GAO21809",
                "definition": "blue copper domain-containing protein [Alicycliphilus sp. B1]",
                "hsp": {
                    "number": "1",
                    "bitScore": "163.696",
                    "score": "413",
                    "evalue": "3.21169e-49",
                    "query": {
                        "frame": "0",
                        "from": "10",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "16",
                        "to": "149"
                    },
                    "identity": "73",
                    "positive": "95",
                    "gaps": "2",
                    "alignmentLeft": "134",
                    "querySequence": "HAGAHAHD--ADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "HAGSHGHDEGGETAIGKPGVAAKASRTITIEMSDKMRFTPSDLTVKKGETVRFIVKNTGQVKHELSLGTQEELLEHLEQMRKFPDMEHDEPSKITLGPGKQGEIVWQFTKAGVVDFACLIPGHYEAGMKGAIKV",
                    "midline": "HAG+H HD   +T  G+PG AAKA RT+ + MSD MRF P+ +TV++GETVRF+  N G+++HE  LGT   L  H ++MR  PDM+H +P  + +  G  GEIVWQFTKAG  +FACLIPGH+EAGM G + V"
                }
            }, {
                "accession": "WP_059400739",
                "definition": "hypothetical protein [Alicycliphilus sp. B1]",
                "hsp": {
                    "number": "1",
                    "bitScore": "163.31",
                    "score": "412",
                    "evalue": "6.06143e-49",
                    "query": {
                        "frame": "0",
                        "from": "10",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "29",
                        "to": "162"
                    },
                    "identity": "73",
                    "positive": "95",
                    "gaps": "2",
                    "alignmentLeft": "134",
                    "querySequence": "HAGAHAHD--ADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "HAGSHGHDEGGETAIGKPGVAAKASRTITIEMSDKMRFTPSDLTVKKGETVRFIVKNTGQVKHELSLGTQEELLEHLEQMRKFPDMEHDEPSKITLGPGKQGEIVWQFTKAGVVDFACLIPGHYEAGMKGAIKV",
                    "midline": "HAG+H HD   +T  G+PG AAKA RT+ + MSD MRF P+ +TV++GETVRF+  N G+++HE  LGT   L  H ++MR  PDM+H +P  + +  G  GEIVWQFTKAG  +FACLIPGH+EAGM G + V"
                }
            }, {
                "accession": "WP_027679470",
                "definition": "hypothetical protein [Ralstonia sp. UNC404CL21Col]",
                "hsp": {
                    "number": "1",
                    "bitScore": "163.31",
                    "score": "412",
                    "evalue": "6.87071e-49",
                    "query": {
                        "frame": "0",
                        "from": "10",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "27",
                        "to": "158"
                    },
                    "identity": "82",
                    "positive": "95",
                    "gaps": "1",
                    "alignmentLeft": "133",
                    "querySequence": "HAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "HAGGHDH-GDAAIGEPGDAARITRTVRVDMADTMRFTPAQISVQRGETIRFEVVNSGQVRHEMTLGTPADLVAHAEQMRRHPEMEHADANAVTVDPGQRGEIVWRFTRPGSVEFACLQPGHFEAGMRGAVQVR",
                    "midline": "HAG H H  D   G PGDAA+  RTVRV M+DTMRF PA I+V+RGET+RF   N G++ HE  LGT A L AHA++MR  P+M+HAD  AV V  G  GEIVW+FT+ GS EFACL PGHFEAGM G V VR"
                }
            }, {
                "accession": "ACB12989",
                "definition": "putative blue (type 1) copper domain protein [Aquabacterium sp. PL1F5]",
                "hsp": {
                    "number": "1",
                    "bitScore": "162.925",
                    "score": "411",
                    "evalue": "8.85475e-49",
                    "query": {
                        "frame": "0",
                        "from": "1",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "28",
                        "to": "164"
                    },
                    "identity": "77",
                    "positive": "99",
                    "gaps": "4",
                    "alignmentLeft": "141",
                    "querySequence": "DAGHDHGSAHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "DHAHDHG---AGTQATE-ETAIGKPGRASKVTRTIKVSMNDKMRFEPASIQVKQGETVRFVVRNAGQIKHEMNLGTEKELLEHLEVMKKFPNMEHDEPNKVTIAPGQQGEIVWQFTKAGTVNFACLVPGHYEAGMKGKVQV",
                    "midline": "D  HDHG   AG  A + +T  G+PG A+K  RT++V M+D MRF+PA+I V++GETVRFV  N G+I+HE  LGT   L  H + M+  P+M+H +P  V +A G  GEIVWQFTKAG+  FACL+PGH+EAGM GKV V"
                }
            }, {
                "accession": "ODU59548",
                "definition": "hypothetical protein ABT02_10025 [Comamonadaceae bacterium SCN 68-20] >gi|1113454180|gb|OJX15643.1| hypothetical protein BGO75_06050 [Burkholderiales bacterium 68-20]",
                "hsp": {
                    "number": "1",
                    "bitScore": "162.925",
                    "score": "411",
                    "evalue": "9.21378e-49",
                    "query": {
                        "frame": "0",
                        "from": "10",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "29",
                        "to": "160"
                    },
                    "identity": "72",
                    "positive": "93",
                    "gaps": "0",
                    "alignmentLeft": "132",
                    "querySequence": "HAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "HAGGHGDEGETAIGKPGVAAKARRTITIEMSDNMRYTPSNIQVKQGETVRFVVKNVGQVKHELSLGTEKELLEHLEQMKKFPDMEHDEPGKVTLQPGKQGEIVWQFTKAGGVNFACLMPGHYEAGMKGTVQV",
                    "midline": "HAG H  + +T  G+PG AAKA+RT+ + MSD MR+ P+ I V++GETVRFV  N G+++HE  LGT   L  H ++M+  PDM+H +PG V +  G  GEIVWQFTKAG   FACL+PGH+EAGM G V V"
                }
            }, {
                "accession": "WP_063394047",
                "definition": "hypothetical protein [Ralstonia mannitolilytica] >gi|1021444612|gb|ANA35334.1| blue copper protein [Ralstonia mannitolilytica]",
                "hsp": {
                    "number": "1",
                    "bitScore": "162.54",
                    "score": "410",
                    "evalue": "1.07556e-48",
                    "query": {
                        "frame": "0",
                        "from": "10",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "27",
                        "to": "158"
                    },
                    "identity": "83",
                    "positive": "93",
                    "gaps": "1",
                    "alignmentLeft": "133",
                    "querySequence": "HAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "HAGGHDH-GDAAIGEPGDAARITRTVRVDMADTMRFTPAHITVQRGETIRFEVLNSGHVRHEMTLGTAADLVAHAEQMRQHPEMEHADANAVTVDPGQRGEIVWHFTRAGSVEFACLQPGHLEAGMRGAVRVR",
                    "midline": "HAG H H  D   G PGDAA+  RTVRV M+DTMRF PA ITV+RGET+RF   N G + HE  LGT A L AHA++MR  P+M+HAD  AV V  G  GEIVW FT+AGS EFACL PGH EAGM G V VR"
                }
            }, {
                "accession": "SDH68925",
                "definition": "Uncharacterized copper-binding protein, cupredoxin-like subfamily [Variovorax sp. OV700]",
                "hsp": {
                    "number": "1",
                    "bitScore": "162.155",
                    "score": "409",
                    "evalue": "1.57409e-48",
                    "query": {
                        "frame": "0",
                        "from": "10",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "27",
                        "to": "157"
                    },
                    "identity": "77",
                    "positive": "96",
                    "gaps": "1",
                    "alignmentLeft": "132",
                    "querySequence": "HAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "HAGGHA-DGDEAIGKPGTAARATRTIHVDMTDGMRFTPADLRVKQGETVRFVVKNSGQLKHELVLGTERELKEHYEAMKKNPEMEHADPNMVTLAAGKSGEIVWQFTRAGKVDFACLQPGHYDAGMKGAVTV",
                    "midline": "HAG HA D D   G+PG AA+A RT+ V M+D MRF PA + V++GETVRFV  N G+++HE VLGT   LK H + M+  P+M+HADP  V +AAG SGEIVWQFT+AG  +FACL PGH++AGM G V V"
                }
            }, {
                "accession": "WP_048933748",
                "definition": "blue copper protein [Ralstonia sp. MD27] >gi|891661971|gb|KMW46872.1| blue copper protein [Ralstonia sp. MD27]",
                "hsp": {
                    "number": "1",
                    "bitScore": "162.155",
                    "score": "409",
                    "evalue": "1.78839e-48",
                    "query": {
                        "frame": "0",
                        "from": "10",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "27",
                        "to": "158"
                    },
                    "identity": "80",
                    "positive": "95",
                    "gaps": "1",
                    "alignmentLeft": "133",
                    "querySequence": "HAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "HAGGHDH-GDAAIGEPGDAARVTRTVRVDMADTMRFTPAQITVQRGETIRLQVINSGRVRHEMTLGSPADLIAHAEQMRKHPEMEHADANAVTVDPGQTGEIVWRFTQAGTVEFGCLQPGHFEAGMRGAVQVQ",
                    "midline": "HAG H H  D   G PGDAA+  RTVRV M+DTMRF PA ITV+RGET+R    N GR+ HE  LG+ A L AHA++MR  P+M+HAD  AV V  G +GEIVW+FT+AG+ EF CL PGHFEAGM G V V+"
                }
            }, {
                "accession": "SHM36542",
                "definition": "Uncharacterized copper-binding protein, cupredoxin-like subfamily [Rhizobacter sp. OV335]",
                "hsp": {
                    "number": "1",
                    "bitScore": "164.466",
                    "score": "415",
                    "evalue": "2.28529e-48",
                    "query": {
                        "frame": "0",
                        "from": "4",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "27",
                        "to": "164"
                    },
                    "identity": "81",
                    "positive": "97",
                    "gaps": "0",
                    "alignmentLeft": "138",
                    "querySequence": "HDHGSAHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "EDHATPRRYDAAKVEETAFGHEGDPAKARRVIPLGMSDAMRFTPADISVRRGETVKFVVRNDGRLLHEMVLGTPADLKAHAALMQKFPEMEHASPNMAHVKPGASGEIVWQFTQAGEFQFACLQPGHFEAGMLGRVVV",
                    "midline": "DH +      A   +T +G  GD AKA+R + + MSD MRF PA I+VRRGETV+FV  N GR+ HE VLGT A LKAHA  M+  P+M+HA P    V  GASGEIVWQFT+AG F+FACL PGHFEAGM+G+VVV"
                }
            }, {
                "accession": "WP_073463551",
                "definition": "hypothetical protein [Rhizobacter sp. OV335]",
                "hsp": {
                    "number": "1",
                    "bitScore": "164.466",
                    "score": "415",
                    "evalue": "2.41637e-48",
                    "query": {
                        "frame": "0",
                        "from": "4",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "21",
                        "to": "158"
                    },
                    "identity": "81",
                    "positive": "97",
                    "gaps": "0",
                    "alignmentLeft": "138",
                    "querySequence": "HDHGSAHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "EDHATPRRYDAAKVEETAFGHEGDPAKARRVIPLGMSDAMRFTPADISVRRGETVKFVVRNDGRLLHEMVLGTPADLKAHAALMQKFPEMEHASPNMAHVKPGASGEIVWQFTQAGEFQFACLQPGHFEAGMLGRVVV",
                    "midline": "DH +      A   +T +G  GD AKA+R + + MSD MRF PA I+VRRGETV+FV  N GR+ HE VLGT A LKAHA  M+  P+M+HA P    V  GASGEIVWQFT+AG F+FACL PGHFEAGM+G+VVV"
                }
            }, {
                "accession": "WP_018904754",
                "definition": "hypothetical protein [Variovorax paradoxus]",
                "hsp": {
                    "number": "1",
                    "bitScore": "162.155",
                    "score": "409",
                    "evalue": "2.46875e-48",
                    "query": {
                        "frame": "0",
                        "from": "17",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "36",
                        "to": "160"
                    },
                    "identity": "75",
                    "positive": "92",
                    "gaps": "0",
                    "alignmentLeft": "125",
                    "querySequence": "DADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "DAEAAIGQPGVAAKATRTINVDMTDGMRFTPADIKVKQGETVRFVVKNSGQLKHELVLGTEKELKEHYEAMKKNPEMEHADPNMVTLAAGKSGEIVWQFTKAGKVDFACLQPGHYDAGMKGAVTV",
                    "midline": "DA+   G+PG AAKA RT+ V M+D MRF PA I V++GETVRFV  N G+++HE VLGT   LK H + M+  P+M+HADP  V +AAG SGEIVWQFTKAG  +FACL PGH++AGM G V V"
                }
            }, {
                "accession": "WP_035871659",
                "definition": "copper-binding protein [Cupriavidus sp. SK-3] >gi|645567871|gb|KDP84610.1| hypothetical protein CF70_018465 [Cupriavidus sp. SK-3]",
                "hsp": {
                    "number": "1",
                    "bitScore": "161.77",
                    "score": "408",
                    "evalue": "2.62481e-48",
                    "query": {
                        "frame": "0",
                        "from": "23",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "39",
                        "to": "158"
                    },
                    "identity": "74",
                    "positive": "88",
                    "gaps": "0",
                    "alignmentLeft": "120",
                    "querySequence": "GRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "GQPGKPAKVSRTVNVTMSDTMRFAPDSIQVKRGETVRFVVRNVGKVEHEMVIGTAAELKEHAQMMRSMPDAKHPTPNQITLAPGKQGTLVWQFDGPGTVEFACLVPGHFEAGMVGKVAVK",
                    "midline": "G+PG  AK  RTV V MSDTMRF P +I V+RGETVRFV  N G++EHE V+GT A LK HAQ MR+MPD +H  P  + +A G  G +VWQF   G+ EFACL+PGHFEAGMVGKV V+"
                }
            }, {
                "accession": "WP_021193013",
                "definition": "MULTISPECIES: hypothetical protein [Ralstonia] >gi|528188561|gb|EPX99459.1| hypothetical protein C404_02605 [Ralstonia sp. AU12-08] >gi|966730902|dbj|GAQ29333.1| blue (type 1) copper domain-containing protein [Ralstonia sp. NT80] >gi|1033684516|gb|ANH76395.1| copper binding, plastocyanin/azurin family protein [Ralstonia insidiosa]",
                "hsp": {
                    "number": "1",
                    "bitScore": "161.77",
                    "score": "408",
                    "evalue": "2.70903e-48",
                    "query": {
                        "frame": "0",
                        "from": "10",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "27",
                        "to": "158"
                    },
                    "identity": "80",
                    "positive": "96",
                    "gaps": "1",
                    "alignmentLeft": "133",
                    "querySequence": "HAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "HAGGHDH-GDAAIGEPGDAARVTRTVRVDMADTMRFTPAQITVQRGETIRFQVSNSGRVRHEMTLGSPADLIAHAEQMRKHPEMEHADANAVTVDPGQTGEIVWRFTQAGTVEFGCLQAGHFEAGMRGAVQVQ",
                    "midline": "HAG H H  D   G PGDAA+  RTVRV M+DTMRF PA ITV+RGET+RF  +N GR+ HE  LG+ A L AHA++MR  P+M+HAD  AV V  G +GEIVW+FT+AG+ EF CL  GHFEAGM G V V+"
                }
            }, {
                "accession": "WP_061496899",
                "definition": "hypothetical protein [Ramlibacter tataouinensis] >gi|1003118679|gb|AMO22426.1| hypothetical protein UC35_05325 [Ramlibacter tataouinensis]",
                "hsp": {
                    "number": "1",
                    "bitScore": "161.77",
                    "score": "408",
                    "evalue": "2.80929e-48",
                    "query": {
                        "frame": "0",
                        "from": "20",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "41",
                        "to": "163"
                    },
                    "identity": "75",
                    "positive": "90",
                    "gaps": "0",
                    "alignmentLeft": "123",
                    "querySequence": "TPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "TPFGQEGDPKKVTRTIRVEMNDRMRFVPDSITVRKGETVRFAVANKGAVLHEMVLGTAEDLAKHAEHMKKFPGMEHDEPSMVHVKPGARGEIVWQFTQPGNFSFACLIPGHYEAGMVGKVVVK",
                    "midline": "TP+G+ GD  K  RT+RV M+D MRF P +ITVR+GETVRF  AN G + HE VLGT   L  HA+ M+  P M+H +P  V V  GA GEIVWQFT+ G+F FACLIPGH+EAGMVGKVVV+"
                }
            }, {
                "accession": "WP_045219383",
                "definition": "blue copper protein [Ralstonia mannitolilytica] >gi|769536446|gb|AJW46974.1| blue copper protein [Ralstonia mannitolilytica]",
                "hsp": {
                    "number": "1",
                    "bitScore": "161.384",
                    "score": "407",
                    "evalue": "3.24387e-48",
                    "query": {
                        "frame": "0",
                        "from": "10",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "27",
                        "to": "158"
                    },
                    "identity": "82",
                    "positive": "92",
                    "gaps": "1",
                    "alignmentLeft": "133",
                    "querySequence": "HAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "HAGGHDH-GDAAIGEPGDAARITRTVRVDMTDTMRFTPARITVERGETIRFEVVNSGQVRHEMTLGTPADLVAHAEQMRRHPEMEHADANAVTVDPGQRGEIVWHFTRPGSVEFGCLQPGHFEAGMRGAVRVR",
                    "midline": "HAG H H  D   G PGDAA+  RTVRV M+DTMRF PA ITV RGET+RF   N G++ HE  LGT A L AHA++MR  P+M+HAD  AV V  G  GEIVW FT+ GS EF CL PGHFEAGM G V VR"
                }
            }, {
                "accession": "WP_015865736",
                "definition": "hypothetical protein [Variovorax paradoxus] >gi|239805209|gb|ACS22275.1| blue (type 1) copper domain protein [Variovorax paradoxus S110]",
                "hsp": {
                    "number": "1",
                    "bitScore": "161.77",
                    "score": "408",
                    "evalue": "3.464e-48",
                    "query": {
                        "frame": "0",
                        "from": "17",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "36",
                        "to": "160"
                    },
                    "identity": "75",
                    "positive": "92",
                    "gaps": "0",
                    "alignmentLeft": "125",
                    "querySequence": "DADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "DAEAAIGQPGVAAKATRTINVDMTDGMRFTPADIKVKQGETVRFVVKNSGQLKHELVLGTEKELKEHYEAMKKNPEMEHADPNMVTLAAGKSGEIVWQFTKAGKVDFACLQPGHYDAGMKGAVTV",
                    "midline": "DA+   G+PG AAKA RT+ V M+D MRF PA I V++GETVRFV  N G+++HE VLGT   LK H + M+  P+M+HADP  V +AAG SGEIVWQFTKAG  +FACL PGH++AGM G V V"
                }
            }, {
                "accession": "SFB79882",
                "definition": "Uncharacterized copper-binding protein, cupredoxin-like subfamily [Collimonas sp. OK412]",
                "hsp": {
                    "number": "1",
                    "bitScore": "161.384",
                    "score": "407",
                    "evalue": "3.82845e-48",
                    "query": {
                        "frame": "0",
                        "from": "3",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "23",
                        "to": "161"
                    },
                    "identity": "73",
                    "positive": "98",
                    "gaps": "1",
                    "alignmentLeft": "140",
                    "querySequence": "GHDHGSAHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "GDEAGSGAAQTHDEHASS-MGKPGDPGKVSKTMEIDMNDTMRFTPAAISIKRGETVRFIVKNSGKVKHEMVLGSIEELKEHAALMQKFPEMEHSDPNQVSLDPGKSGELIWQFSKAGRFDFACLQPGHFEAGMRGHIVVR",
                    "midline": "G + GS  A  H   A +  G+PGD  K  +T+ + M+DTMRF PA I+++RGETVRF+  N G+++HE VLG+   LK HA  M+  P+M+H+DP  V +  G SGE++WQF+KAG F+FACL PGHFEAGM G +VVR"
                }
            }, {
                "accession": "WP_045205426",
                "definition": "blue copper protein [Burkholderiaceae bacterium 26] >gi|770077800|gb|KJJ95334.1| blue copper protein [Burkholderiaceae bacterium 26]",
                "hsp": {
                    "number": "1",
                    "bitScore": "161.384",
                    "score": "407",
                    "evalue": "3.94914e-48",
                    "query": {
                        "frame": "0",
                        "from": "10",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "27",
                        "to": "158"
                    },
                    "identity": "82",
                    "positive": "93",
                    "gaps": "1",
                    "alignmentLeft": "133",
                    "querySequence": "HAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "HAGGHDH-GDAAIGEPGDAAHITRTVRVDMADTMRFTPAQITVQRGETIRFEVVNSGQVRHEMTLGTPADLAAHAEQMRRHPEMEHADGNAVTVDPGQRGEIVWHFTRTGSVDFACLQPGHFEAGMHGAVQVR",
                    "midline": "HAG H H  D   G PGDAA   RTVRV M+DTMRF PA ITV+RGET+RF   N G++ HE  LGT A L AHA++MR  P+M+HAD  AV V  G  GEIVW FT+ GS +FACL PGHFEAGM G V VR"
                }
            }, {
                "accession": "WP_040040425",
                "definition": "hypothetical protein [Herbaspirillum sp. TSA66] >gi|747177133|gb|KIF81604.1| hypothetical protein TSA66_13595 [Herbaspirillum sp. TSA66]",
                "hsp": {
                    "number": "1",
                    "bitScore": "161.77",
                    "score": "408",
                    "evalue": "4.08625e-48",
                    "query": {
                        "frame": "0",
                        "from": "1",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "31",
                        "to": "171"
                    },
                    "identity": "76",
                    "positive": "98",
                    "gaps": "3",
                    "alignmentLeft": "143",
                    "querySequence": "DAGHD-HGSAHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "DESHEMHGSSEH--HHSDDESDFGKPGNPTKATRTIAVDMTDAMRFGPSAITVKQGETIRFVVTNKGKVAHEMVLGTLNELKEHGEMMRMHPDMVHEDPSSVRVQPGEKKDMVWQFTQPGQFYFGCLIPGHFEAGMVGKLKVK",
                    "midline": "D  H+ HGS+    H  D ++ +G+PG+  KA RT+ V M+D MRF P+ ITV++GET+RFV  N G++ HE VLGT   LK H + MR  PDM H DP +VRV  G   ++VWQFT+ G F F CLIPGHFEAGMVGK+ V+"
                }
            }, {
                "accession": "WP_011805879",
                "definition": "hypothetical protein [Acidovorax sp. JS42] >gi|120607124|gb|ABM42864.1| blue (type 1) copper domain protein [Acidovorax sp. JS42]",
                "hsp": {
                    "number": "1",
                    "bitScore": "161.384",
                    "score": "407",
                    "evalue": "4.77312e-48",
                    "query": {
                        "frame": "0",
                        "from": "10",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "31",
                        "to": "163"
                    },
                    "identity": "71",
                    "positive": "92",
                    "gaps": "1",
                    "alignmentLeft": "133",
                    "querySequence": "HAGAHAHDAD-TPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "HTGGHGHDGDETAIGKPGVAAKASRTITIEMSDNMRYTPSNIQVKQGETVRFIVKNTGQVKHELSLGTEKELLEHLEQMKKFPDMEHDEPSKITLQPGKQGEIVWQFTKAGAVNFACLMPGHYEAGMKGVVQV",
                    "midline": "H G H HD D T  G+PG AAKA RT+ + MSD MR+ P+ I V++GETVRF+  N G+++HE  LGT   L  H ++M+  PDM+H +P  + +  G  GEIVWQFTKAG+  FACL+PGH+EAGM G V V"
                }
            }, {
                "accession": "WP_018228463",
                "definition": "hypothetical protein [Methyloversatilis universalis]",
                "hsp": {
                    "number": "1",
                    "bitScore": "160.999",
                    "score": "406",
                    "evalue": "5.50081e-48",
                    "query": {
                        "frame": "0",
                        "from": "1",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "28",
                        "to": "160"
                    },
                    "identity": "74",
                    "positive": "99",
                    "gaps": "9",
                    "alignmentLeft": "142",
                    "querySequence": "DAGHDHGSAHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "DAGHSH-SGHAAS--------IGKPGKASQVTRTVNVDMTDNMRFTPAKIEVKKGETIKFLVKNSGQVRHEMVLGSVAELKAHAEQMRKHPEMEHDDPNQVQVDPGKTGQFIWKFANAGTFDFACLQPGHFEAGMAGKVAVK",
                    "midline": "DAGH H S HA +         G+PG A++  RTV V M+D MRF PA I V++GET++F+  N G++ HE VLG+ A LKAHA++MR  P+M+H DP  V+V  G +G+ +W+F  AG+F+FACL PGHFEAGM GKV V+"
                }
            }, {
                "accession": "WP_047783899",
                "definition": "blue copper protein [Variovorax paradoxus] >gi|827512636|gb|KLN57357.1| plastocyanin [Variovorax paradoxus]",
                "hsp": {
                    "number": "1",
                    "bitScore": "160.614",
                    "score": "405",
                    "evalue": "8.37696e-48",
                    "query": {
                        "frame": "0",
                        "from": "23",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "44",
                        "to": "162"
                    },
                    "identity": "75",
                    "positive": "89",
                    "gaps": "0",
                    "alignmentLeft": "119",
                    "querySequence": "GRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "GRPGVAAKATRTINVDMTDGMRFTPADIKVKQGETVRFVVKNSGQIKHELVLGTEKELKEHYEAMKKNPEMEHADPNMVTLAAGKSGEIVWQFTKAGKVDFACLQPGHYDAGMKGAVTV",
                    "midline": "GRPG AAKA RT+ V M+D MRF PA I V++GETVRFV  N G+I+HE VLGT   LK H + M+  P+M+HADP  V +AAG SGEIVWQFTKAG  +FACL PGH++AGM G V V"
                }
            }, {
                "accession": "SDC02744",
                "definition": "Uncharacterized copper-binding protein, cupredoxin-like subfamily [Variovorax sp. CF079]",
                "hsp": {
                    "number": "1",
                    "bitScore": "160.229",
                    "score": "404",
                    "evalue": "8.50214e-48",
                    "query": {
                        "frame": "0",
                        "from": "11",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "23",
                        "to": "155"
                    },
                    "identity": "75",
                    "positive": "97",
                    "gaps": "2",
                    "alignmentLeft": "133",
                    "querySequence": "AGAHA--HDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "SGTHAGGHHSEALIGKPGVVAKATRTVKVDMTDGMRFSPASIDVKQGETVRFVVTNSGKLKHELVLGTEKELKEHYEVMKKNPEMEHADPNMVTLAAGKTGEIIWQFTKAGKVDFACLQPGHYDAGMKGAVNV",
                    "midline": "+G HA  H ++   G+PG  AKA RTV+V M+D MRF PA+I V++GETVRFV  N G+++HE VLGT   LK H + M+  P+M+HADP  V +AAG +GEI+WQFTKAG  +FACL PGH++AGM G V V"
                }
            }, {
                "accession": "WP_015913645",
                "definition": "hypothetical protein [Acidovorax ebreus] >gi|221730817|gb|ACM33637.1| blue (type 1) copper domain protein [Acidovorax ebreus TPSY]",
                "hsp": {
                    "number": "1",
                    "bitScore": "160.614",
                    "score": "405",
                    "evalue": "9.12835e-48",
                    "query": {
                        "frame": "0",
                        "from": "10",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "29",
                        "to": "161"
                    },
                    "identity": "71",
                    "positive": "92",
                    "gaps": "1",
                    "alignmentLeft": "133",
                    "querySequence": "HAGAHAHDAD-TPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "HTGGHGHDGDETAIGKPGVAAKASRTIAIEMSDNMRYTPSNIQVKQGETVRFIVKNAGQVKHELSLGTEKELLEHLEQMKKFPDMEHDEPSKVTLQPGKQGEIVWQFTKAGAVNFACLMPGHYEAGMKGAIKV",
                    "midline": "H G H HD D T  G+PG AAKA RT+ + MSD MR+ P+ I V++GETVRF+  N G+++HE  LGT   L  H ++M+  PDM+H +P  V +  G  GEIVWQFTKAG+  FACL+PGH+EAGM G + V"
                }
            }, {
                "accession": "WP_056470353",
                "definition": "plastocyanin [Rhizobacter sp. Root404] >gi|945581893|gb|KQW36857.1| plastocyanin [Rhizobacter sp. Root404]",
                "hsp": {
                    "number": "1",
                    "bitScore": "160.614",
                    "score": "405",
                    "evalue": "1.0106e-47",
                    "query": {
                        "frame": "0",
                        "from": "10",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "32",
                        "to": "168"
                    },
                    "identity": "75",
                    "positive": "96",
                    "gaps": "4",
                    "alignmentLeft": "137",
                    "querySequence": "HAGAHAHDAD----TPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "HAAARKFDASKVEATDFGQEGNPKKVTKTIKVDMSDAMRFTPSDVTVKRGETVKFVVHNDGKVLHEMVLGTKEAIKEHAELMKEFPEMEHADANMAHVKPGKAGEIVWQFTKPGEFQFACLQPGHFEAGMVGKVVVK",
                    "midline": "HA A   DA     T +G+ G+  K  +T++V MSD MRF P+ +TV+RGETV+FV  N G++ HE VLGT  ++K HA+ M+  P+M+HAD     V  G +GEIVWQFTK G F+FACL PGHFEAGMVGKVVV+"
                }
            }, {
                "accession": "WP_069103145",
                "definition": "hypothetical protein [Acidovorax sp. RAC01] >gi|1059940008|gb|AOG22148.1| copper binding s, plastocyanin/azurin family protein [Acidovorax sp. RAC01]",
                "hsp": {
                    "number": "1",
                    "bitScore": "160.229",
                    "score": "404",
                    "evalue": "1.04627e-47",
                    "query": {
                        "frame": "0",
                        "from": "18",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "41",
                        "to": "164"
                    },
                    "identity": "70",
                    "positive": "92",
                    "gaps": "0",
                    "alignmentLeft": "124",
                    "querySequence": "ADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "AESAIGQPGKAAKVTRTINVDMADTMRFTPAAISVKQGETVKFVIKNSGQVKHEFSLGTDAELKEHYETMKKFPDMEHDEPSKVSLAPGKQGEIIWQFTKAGEVKFACLYPGHYDAGMKGQVTV",
                    "midline": "A++  G+PG AAK  RT+ V M+DTMRF PA I+V++GETV+FV  N G+++HEF LGT A LK H + M+  PDM+H +P  V +A G  GEI+WQFTKAG  +FACL PGH++AGM G+V V"
                }
            }, {
                "accession": "WP_047489862",
                "definition": "hypothetical protein [Methylibium sp. CF059]",
                "hsp": {
                    "number": "1",
                    "bitScore": "160.229",
                    "score": "404",
                    "evalue": "1.05777e-47",
                    "query": {
                        "frame": "0",
                        "from": "6",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "26",
                        "to": "167"
                    },
                    "identity": "79",
                    "positive": "100",
                    "gaps": "5",
                    "alignmentLeft": "142",
                    "querySequence": "HGSAHAGA-HAHDAD----TPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "HGDEHAESPHHYDAAKVEATAFGQEGDPKKVTWTVQVHMADSMRFSPADVSVRRGETVRFVVSNDGKVLHEMVLGTPEAIKEHAELMKKFPEMEHADANMAHVKPGAKGEIVWQFTKPGVFQFACLQPGHFEAGMVGKLTVK",
                    "midline": "HG  HA + H +DA     T +G+ GD  K   TV+V M+D+MRF PA ++VRRGETVRFV +N G++ HE VLGT  ++K HA+ M+  P+M+HAD     V  GA GEIVWQFTK G F+FACL PGHFEAGMVGK+ V+"
                }
            }, {
                "accession": "WP_022965916",
                "definition": "hypothetical protein [Pseudomonas caeni]",
                "hsp": {
                    "number": "1",
                    "bitScore": "160.229",
                    "score": "404",
                    "evalue": "1.21212e-47",
                    "query": {
                        "frame": "0",
                        "from": "12",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "34",
                        "to": "170"
                    },
                    "identity": "74",
                    "positive": "92",
                    "gaps": "6",
                    "alignmentLeft": "137",
                    "querySequence": "GAHAHDADTP------YGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "GMEGHDMSTMSQATPIYGQPGDSSKVSRTIEVTMDDSMRFTPSQIDVKQGETVRFFIKNSGKIPHEMVIGSLGELKAHAAEMLAMPDMQHTDPSMITLNPGQRGGLVWQFDKATTVDFACLIPGHTEAGMVGKIQVK",
                    "midline": "G   HD  T       YG+PGD++K  RT+ V M D+MRF P+ I V++GETVRF   N G+I HE V+G+   LKAHA EM AMPDMQH DP  + +  G  G +VWQF KA + +FACLIPGH EAGMVGK+ V+"
                }
            }, {
                "accession": "WP_058089016",
                "definition": "hypothetical protein [Aquabacterium parvum]",
                "hsp": {
                    "number": "1",
                    "bitScore": "159.844",
                    "score": "403",
                    "evalue": "1.3574e-47",
                    "query": {
                        "frame": "0",
                        "from": "1",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "17",
                        "to": "153"
                    },
                    "identity": "76",
                    "positive": "98",
                    "gaps": "4",
                    "alignmentLeft": "141",
                    "querySequence": "DAGHDHGSAHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "DHAHDHG---AGTQATE-ETAIGKPGRASKVTRTIKVSMNDKMRFEPASIQVKQGETVRFVVRNAGQIKHEMNLGTEKEPLEHLEVMKKFPNMEHDEPNKVSIAPGQQGEIVWQFTKAGTVNFACLVPGHYEAGMKGKVQV",
                    "midline": "D  HDHG   AG  A + +T  G+PG A+K  RT++V M+D MRF+PA+I V++GETVRFV  N G+I+HE  LGT      H + M+  P+M+H +P  V +A G  GEIVWQFTKAG+  FACL+PGH+EAGM GKV V"
                }
            }, {
                "accession": "WP_065853949",
                "definition": "hypothetical protein [Ralstonia pickettii] >gi|1049888653|gb|OCS50002.1| hypothetical protein BEK67_17070 [Ralstonia pickettii]",
                "hsp": {
                    "number": "1",
                    "bitScore": "159.844",
                    "score": "403",
                    "evalue": "1.46574e-47",
                    "query": {
                        "frame": "0",
                        "from": "5",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "22",
                        "to": "158"
                    },
                    "identity": "81",
                    "positive": "93",
                    "gaps": "1",
                    "alignmentLeft": "138",
                    "querySequence": "DHGSAHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "DASGNHAGGHDH-GNAAIGEPGDATRITRTVRVDMTDTMRFMPAQITVQRGETIRFEVINSGQVRHEMTLGTPADLGAHAEQMRKHPEMEHADANAVTVDPGQRGEIVWHFTRTGPVEFACLQPGHFEAGMRGAVQVR",
                    "midline": "D    HAG H H  +   G PGDA +  RTVRV M+DTMRF PA ITV+RGET+RF   N G++ HE  LGT A L AHA++MR  P+M+HAD  AV V  G  GEIVW FT+ G  EFACL PGHFEAGM G V VR"
                }
            }, {
                "accession": "WP_053821774",
                "definition": "MULTISPECIES: copper-binding protein [Cupriavidus] >gi|927306175|gb|ALD90550.1| putative copper-binding protein [Cupriavidus gilardii CR3] >gi|1010932145|gb|AMR78383.1| copper-binding protein [Cupriavidus nantongensis]",
                "hsp": {
                    "number": "1",
                    "bitScore": "159.458",
                    "score": "402",
                    "evalue": "1.66491e-47",
                    "query": {
                        "frame": "0",
                        "from": "23",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "39",
                        "to": "158"
                    },
                    "identity": "73",
                    "positive": "89",
                    "gaps": "0",
                    "alignmentLeft": "120",
                    "querySequence": "GRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "GQPGKPAKVSRTVNVTMSDTMRFAPDSIQVKRGETVRFVVRNVGKVEHEMVIGTAAELKEHAQMMRSMPDAKHSIPNQIMLAPGKQGTLVWQFDGPGTVDFACLVPGHFEAGMVGKVAVK",
                    "midline": "G+PG  AK  RTV V MSDTMRF P +I V+RGETVRFV  N G++EHE V+GT A LK HAQ MR+MPD +H+ P  + +A G  G +VWQF   G+ +FACL+PGHFEAGMVGKV V+"
                }
            }, {
                "accession": "WP_063459327",
                "definition": "hypothetical protein [Acidovorax sp. GW101-3H11] >gi|1023220345|gb|KZT17368.1| hypothetical protein A1D30_03070 [Acidovorax sp. GW101-3H11]",
                "hsp": {
                    "number": "1",
                    "bitScore": "159.458",
                    "score": "402",
                    "evalue": "1.78764e-47",
                    "query": {
                        "frame": "0",
                        "from": "23",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "40",
                        "to": "158"
                    },
                    "identity": "68",
                    "positive": "90",
                    "gaps": "0",
                    "alignmentLeft": "119",
                    "querySequence": "GRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "GQPGTASKVSRTINVDMADTMRFTPAAISVKQGETIKFVIKNGGQVKHEFSLGTDAELKEHYETMKKFPDMEHDEPSKVSLAPGKQGEIIWQFTKAGEVKFACLYPGHYDAGMKGQVTV",
                    "midline": "G+PG A+K  RT+ V M+DTMRF PA I+V++GET++FV  NGG+++HEF LGT A LK H + M+  PDM+H +P  V +A G  GEI+WQFTKAG  +FACL PGH++AGM G+V V"
                }
            }, {
                "accession": "WP_009522628",
                "definition": "hypothetical protein [Ralstonia sp. PBA] >gi|392716307|gb|EIZ03887.1| blue (type1) copper domain-containing protein [Ralstonia sp. PBA]",
                "hsp": {
                    "number": "1",
                    "bitScore": "159.844",
                    "score": "403",
                    "evalue": "1.85017e-47",
                    "query": {
                        "frame": "0",
                        "from": "6",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "36",
                        "to": "166"
                    },
                    "identity": "76",
                    "positive": "95",
                    "gaps": "6",
                    "alignmentLeft": "137",
                    "querySequence": "HGSAHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "HGSTSAYASA------IGQPGDPAKVTRTVEITMDDTMRFTPASVEAKAGETIRFFLKNEGKVPHEMVIGTLSELQEHAEMMRKMPDMKHDDPNSATLAPGKRGGIVWQFTQAGTVDFACLIPGHFEAGMVGKVTVQ",
                    "midline": "HGS  A A A       G+PGD AK  RTV + M DTMRF PA++  + GET+RF   N G++ HE V+GT + L+ HA+ MR MPDM+H DP +  +A G  G IVWQFT+AG+ +FACLIPGHFEAGMVGKV V+"
                }
            }, {
                "accession": "WP_038213835",
                "definition": "blue copper protein [Xenophilus azovorans] >gi|31074963|gb|AAP42068.1| unknown [Xanthomonas euvesicatoria] >gi|1113419158|gb|OJW81473.1| hypothetical protein BGO66_19940 [Alicycliphilus sp. 69-12]",
                "hsp": {
                    "number": "1",
                    "bitScore": "159.844",
                    "score": "403",
                    "evalue": "1.87406e-47",
                    "query": {
                        "frame": "0",
                        "from": "19",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "40",
                        "to": "162"
                    },
                    "identity": "71",
                    "positive": "88",
                    "gaps": "0",
                    "alignmentLeft": "123",
                    "querySequence": "DTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "ETAIGKPGVAAKASRTITIEMSDTMRFTPSNIQVKQGETVRFIVKNAGKVKHELSLGTEKELLEHLEQMRKFPDMEHDEPGKVTLQPGKQGEIVWQFTKAGGVNFACLIPGHYEAGMKGLVQV",
                    "midline": "+T  G+PG AAKA RT+ + MSDTMRF P+ I V++GETVRF+  N G+++HE  LGT   L  H ++MR  PDM+H +PG V +  G  GEIVWQFTKAG   FACLIPGH+EAGM G V V"
                }
            }, {
                "accession": "WP_066710691",
                "definition": "hypothetical protein [Curvibacter delicatus]",
                "hsp": {
                    "number": "1",
                    "bitScore": "159.844",
                    "score": "403",
                    "evalue": "2.01527e-47",
                    "query": {
                        "frame": "0",
                        "from": "3",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "25",
                        "to": "167"
                    },
                    "identity": "76",
                    "positive": "96",
                    "gaps": "3",
                    "alignmentLeft": "143",
                    "querySequence": "GHDHGSAH---AGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "GHDMGAMHGNMAGMHQGEHNSAAGQAGDSAKVSRTIEVTMDDTMRFSPSQISVKAGETIRFFVKNVGKTQHEMVIGTADELKEHAEMMRKMPGMQHAEPNMVTLAPGKRGGIVWQFSKAGKVDFACLIPGHMEAGMKGMISVE",
                    "midline": "GHD G+ H   AG H  + ++  G+ GD+AK  RT+ V M DTMRF P+ I+V+ GET+RF   N G+ +HE V+GT   LK HA+ MR MP MQHA+P  V +A G  G IVWQF+KAG  +FACLIPGH EAGM G + V"
                }
            }, {
                "accession": "WP_077036321",
                "definition": "plastocyanin [Pelomonas sp. KK5]",
                "hsp": {
                    "number": "1",
                    "bitScore": "159.458",
                    "score": "402",
                    "evalue": "2.16417e-47",
                    "query": {
                        "frame": "0",
                        "from": "10",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "28",
                        "to": "164"
                    },
                    "identity": "75",
                    "positive": "96",
                    "gaps": "4",
                    "alignmentLeft": "137",
                    "querySequence": "HAGAHAHDA----DTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "HAKPRVYDAKKVESTAFGQEGDPKKAVRTIQVDMADNMRFTPSDLVVKRGETVKFVVHNGGQVLHEMVLGTKEAIKEHAALMKKFPEMEHADANMAHVKPGKTGEIVWQFTKAGEFQFACLQPGHFEAGMVGKLTVK",
                    "midline": "HA    +DA     T +G+ GD  KA RT++V M+D MRF P+ + V+RGETV+FV  NGG++ HE VLGT  ++K HA  M+  P+M+HAD     V  G +GEIVWQFTKAG F+FACL PGHFEAGMVGK+ V+"
                }
            }, {
                "accession": "WP_076568727",
                "definition": "hypothetical protein [Janthinobacterium sp. TND4EL3] >gi|1132052280|emb|SIR11150.1| Uncharacterized copper-binding protein, cupredoxin-like subfamily [Janthinobacterium sp. TND4EL3]",
                "hsp": {
                    "number": "1",
                    "bitScore": "159.458",
                    "score": "402",
                    "evalue": "2.38601e-47",
                    "query": {
                        "frame": "0",
                        "from": "2",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "34",
                        "to": "167"
                    },
                    "identity": "76",
                    "positive": "94",
                    "gaps": "6",
                    "alignmentLeft": "140",
                    "querySequence": "AGHDHGSAHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "SGHQHGANEQSA------SLVGKAGDPKKVTRTVTVDMNDSMRFSPASIAVKRGEIIRFVVNNSGKIKHEMVIGSESELKEHAQQMAKFPEMEHAEPNQVTVTPGKSGTIVWQFDKAGKVEFACLQPGHFEAGMKGLVVV",
                    "midline": "+GH HG+    A      +  G+ GD  K  RTV V M+D+MRF PA+I V+RGE +RFV  N G+I+HE V+G+ + LK HAQ+M   P+M+HA+P  V V  G SG IVWQF KAG  EFACL PGHFEAGM G VVV"
                }
            }, {
                "accession": "WP_062738745",
                "definition": "hypothetical protein [Ralstonia mannitolilytica]",
                "hsp": {
                    "number": "1",
                    "bitScore": "159.458",
                    "score": "402",
                    "evalue": "2.39676e-47",
                    "query": {
                        "frame": "0",
                        "from": "3",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "30",
                        "to": "158"
                    },
                    "identity": "82",
                    "positive": "92",
                    "gaps": "11",
                    "alignmentLeft": "140",
                    "querySequence": "GHDHGSAHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "GHDHG-----------DAAIGEPGDAARITRTVRVDMTDTMRFTPARITVERGETIRFEVVNSGQVRHEMTLGTPADLVAHAEQMRRHPEMEHADANAVTVDPGQRGEIVWHFTRPGSVEFGCLQPGHFEAGMRGAVRVR",
                    "midline": "GHDHG           D   G PGDAA+  RTVRV M+DTMRF PA ITV RGET+RF   N G++ HE  LGT A L AHA++MR  P+M+HAD  AV V  G  GEIVW FT+ GS EF CL PGHFEAGM G V VR"
                }
            }, {
                "accession": "WP_056661184",
                "definition": "hypothetical protein [Pseudorhodoferax sp. Leaf265] >gi|944867018|gb|KQP17212.1| hypothetical protein ASF45_27265 [Pseudorhodoferax sp. Leaf265]",
                "hsp": {
                    "number": "1",
                    "bitScore": "159.458",
                    "score": "402",
                    "evalue": "2.49449e-47",
                    "query": {
                        "frame": "0",
                        "from": "19",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "41",
                        "to": "164"
                    },
                    "identity": "76",
                    "positive": "91",
                    "gaps": "0",
                    "alignmentLeft": "124",
                    "querySequence": "DTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "DTAFGRAGDPAKVVRTIQVAMADSMRFTPADITVRRGETVRIVAANKGQVLHEIVIGTPGELRKHAEMMKKFPGMEHDEAYMAHVKPGRRGEIVWQFTQAGEFAFACLLPGHFEAGMVGKVTVR",
                    "midline": "DT +GR GD AK  RT++V M+D+MRF PA ITVRRGETVR VAAN G++ HE V+GT   L+ HA+ M+  P M+H +     V  G  GEIVWQFT+AG F FACL+PGHFEAGMVGKV VR"
                }
            }, {
                "accession": "SCX65752",
                "definition": "Uncharacterized copper-binding protein, cupredoxin-like subfamily [Variovorax sp. EL159]",
                "hsp": {
                    "number": "1",
                    "bitScore": "159.073",
                    "score": "401",
                    "evalue": "2.50847e-47",
                    "query": {
                        "frame": "0",
                        "from": "9",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "25",
                        "to": "155"
                    },
                    "identity": "74",
                    "positive": "95",
                    "gaps": "2",
                    "alignmentLeft": "133",
                    "querySequence": "AHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "SHAGGHA--ADDAVGKPGVAAKVTRTVKVDMTDSMRFTPANIDVKQNETVRFIVSNSGNLKHELVLGTEKDLKAHYEAMKKNPEMEHAEPNMVTLAPGKTGEIVWQFTKAGKVDFGCLQPGHYDMGMKGAVSV",
                    "midline": "+HAG HA  AD   G+PG AAK  RTV+V M+D+MRF PA I V++ ETVRF+ +N G ++HE VLGT   LKAH + M+  P+M+HA+P  V +A G +GEIVWQFTKAG  +F CL PGH++ GM G V V"
                }
            }, {
                "accession": "WP_041682569",
                "definition": "hypothetical protein [Pusillimonas sp. T7-7]",
                "hsp": {
                    "number": "1",
                    "bitScore": "159.458",
                    "score": "402",
                    "evalue": "2.52189e-47",
                    "query": {
                        "frame": "0",
                        "from": "18",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "40",
                        "to": "163"
                    },
                    "identity": "73",
                    "positive": "89",
                    "gaps": "0",
                    "alignmentLeft": "124",
                    "querySequence": "ADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "APSPTGQPGDPAKVTRTIELTMDDTMRFTPSDIQVNAGETVRFFIKNTGKIPHEMVIGSIADLKAHAAEMQKMPGMQHAEPNMITLAPGKIGGLVWQFDQAGTVDFACLIPGHMEAGMVGKVKV",
                    "midline": "A +P G+PGD AK  RT+ + M DTMRF P+ I V  GETVRF   N G+I HE V+G+ A LKAHA EM+ MP MQHA+P  + +A G  G +VWQF +AG+ +FACLIPGH EAGMVGKV V"
                }
            }, {
                "accession": "CBA30406",
                "definition": "hypothetical protein Csp_C23390 [Curvibacter putative symbiont of Hydra magnipapillata]",
                "hsp": {
                    "number": "1",
                    "bitScore": "159.458",
                    "score": "402",
                    "evalue": "2.6039e-47",
                    "query": {
                        "frame": "0",
                        "from": "9",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "37",
                        "to": "166"
                    },
                    "identity": "73",
                    "positive": "96",
                    "gaps": "3",
                    "alignmentLeft": "133",
                    "querySequence": "AHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "SHSGGHGTEA---IGKPGVAAKVSRTVQIDMTDNMRFTPSTVTVRKGETVRFVVKNSGQLKHEFNLGTEKDLKAHYEMMKKFPEMEHDEPNIASVAPGKTGEVIWQFTKAGTVNFACLHPGHYEAGMKGAVKV",
                    "midline": "+H+G H  +A    G+PG AAK  RTV++ M+D MRF P+T+TVR+GETVRFV  N G+++HEF LGT   LKAH + M+  P+M+H +P    VA G +GE++WQFTKAG+  FACL PGH+EAGM G V V"
                }
            }, {
                "accession": "OGO94678",
                "definition": "hypothetical protein A2037_04375 [Curvibacter sp. GWA2_63_95] >gi|1084658502|gb|OGP06921.1| hypothetical protein A3E00_11575 [Curvibacter sp. RIFCSPHIGHO2_12_FULL_63_18]",
                "hsp": {
                    "number": "1",
                    "bitScore": "159.073",
                    "score": "401",
                    "evalue": "2.72269e-47",
                    "query": {
                        "frame": "0",
                        "from": "9",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "25",
                        "to": "154"
                    },
                    "identity": "76",
                    "positive": "95",
                    "gaps": "3",
                    "alignmentLeft": "133",
                    "querySequence": "AHAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "SHAGGHGTDA---IGKPGVAAKVTRTIAVDMSDAMRFTPSAVKVRRGETIRFVVTNSGQLKHEFNLGTEADLKAHYAQMLKFPEMEHDEPNLVSLAAGKTGEVVWQFTQAGTVHFACLHPGHYEAGMKGAVAV",
                    "midline": "+HAG H  DA    G+PG AAK  RT+ V MSD MRF P+ + VRRGET+RFV  N G+++HEF LGT A LKAH  +M   P+M+H +P  V +AAG +GE+VWQFT+AG+  FACL PGH+EAGM G V V"
                }
            }, {
                "accession": "WP_055394787",
                "definition": "hypothetical protein [Acidovorax sp. SD340] >gi|940794681|gb|KQB60329.1| hypothetical protein AE621_05550 [Acidovorax sp. SD340] >gi|1082768643|gb|OGA86711.1| hypothetical protein A2Z90_11720 [Burkholderiales bacterium GWA2_64_37]",
                "hsp": {
                    "number": "1",
                    "bitScore": "159.458",
                    "score": "402",
                    "evalue": "2.89005e-47",
                    "query": {
                        "frame": "0",
                        "from": "18",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "41",
                        "to": "164"
                    },
                    "identity": "69",
                    "positive": "92",
                    "gaps": "0",
                    "alignmentLeft": "124",
                    "querySequence": "ADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "AESAIGQPGKAAKVTRTINVDMADTMRFTPAAISVKQGETVKFVIKNSGQVKHEFSMGTDAELKEHYETMKKFPDMEHDEPSKVSLAPGKQGEIIWQFTKAGEVKFACLYPGHYDAGMKGQVTV",
                    "midline": "A++  G+PG AAK  RT+ V M+DTMRF PA I+V++GETV+FV  N G+++HEF +GT A LK H + M+  PDM+H +P  V +A G  GEI+WQFTKAG  +FACL PGH++AGM G+V V"
                }
            }, {
                "accession": "WP_066706947",
                "definition": "hypothetical protein [Curvibacter delicatus]",
                "hsp": {
                    "number": "1",
                    "bitScore": "159.458",
                    "score": "402",
                    "evalue": "2.91027e-47",
                    "query": {
                        "frame": "0",
                        "from": "3",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "25",
                        "to": "166"
                    },
                    "identity": "76",
                    "positive": "97",
                    "gaps": "3",
                    "alignmentLeft": "142",
                    "querySequence": "GHDHGSAH---AGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "GHDMGAMNGNMAGMHQGEHNSAAGRAGDPAKVSRTIEVTMDDTMRFSPNQVSVKAGETIRFFVKNAGKVPHEMVIGTTSELKAHAEMMRQMPGMKHAEANMVNLAAGKRGGIVWQFDKAGEVDFACLIPGHMEAGMKGQIKV",
                    "midline": "GHD G+ +   AG H  + ++  GR GD AK  RT+ V M DTMRF P  ++V+ GET+RF   N G++ HE V+GTT+ LKAHA+ MR MP M+HA+   V +AAG  G IVWQF KAG  +FACLIPGH EAGM G++ V"
                }
            }, {
                "accession": "WP_056744999",
                "definition": "hypothetical protein [Acidovorax sp. Root568] >gi|945961104|gb|KRA14207.1| hypothetical protein ASD75_06125 [Acidovorax sp. Root568]",
                "hsp": {
                    "number": "1",
                    "bitScore": "159.073",
                    "score": "401",
                    "evalue": "2.95529e-47",
                    "query": {
                        "frame": "0",
                        "from": "19",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "36",
                        "to": "158"
                    },
                    "identity": "69",
                    "positive": "91",
                    "gaps": "0",
                    "alignmentLeft": "123",
                    "querySequence": "DTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "DSAIGQPGKAAKVTRTINVDMADTMRFTPAAISVKQGETVKFVIKNSGQVKHEFSLGTDAELKEHYETMKKFPEMEHDEPSKVSLAPGKQGEIIWQFTKAGEVKFACLYPGHYDAGMKGQVTV",
                    "midline": "D+  G+PG AAK  RT+ V M+DTMRF PA I+V++GETV+FV  N G+++HEF LGT A LK H + M+  P+M+H +P  V +A G  GEI+WQFTKAG  +FACL PGH++AGM G+V V"
                }
            }, {
                "accession": "WP_011805845",
                "definition": "MULTISPECIES: hypothetical protein [Comamonadaceae] >gi|120607075|gb|ABM42815.1| blue (type 1) copper domain protein [Acidovorax sp. JS42] >gi|781560771|dbj|GAO24058.1| blue copper domain-containing protein [Alicycliphilus sp. B1]",
                "hsp": {
                    "number": "1",
                    "bitScore": "159.073",
                    "score": "401",
                    "evalue": "3.17834e-47",
                    "query": {
                        "frame": "0",
                        "from": "10",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "29",
                        "to": "160"
                    },
                    "identity": "71",
                    "positive": "92",
                    "gaps": "0",
                    "alignmentLeft": "132",
                    "querySequence": "HAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "HAGGHGDGGETAIGKPGVAAKAGRIITIEMSDNMRYTPSNIQVKQGETVRFVVKNVGQVKHELSLGTEKELLEHLEQMKKFPDMEHDEPGKVTLAPGKQGEIVWQFTKAGAVNFACLMPGHYEAGMKGAIQV",
                    "midline": "HAG H    +T  G+PG AAKA R + + MSD MR+ P+ I V++GETVRFV  N G+++HE  LGT   L  H ++M+  PDM+H +PG V +A G  GEIVWQFTKAG+  FACL+PGH+EAGM G + V"
                }
            }, {
                "accession": "WP_029306637",
                "definition": "MULTISPECIES: hypothetical protein [Cupriavidus] >gi|1092239285|gb|AOY97620.1| copper-binding protein (plasmid) [Cupriavidus sp. USMAA2-4]",
                "hsp": {
                    "number": "1",
                    "bitScore": "158.688",
                    "score": "400",
                    "evalue": "3.61752e-47",
                    "query": {
                        "frame": "0",
                        "from": "23",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "38",
                        "to": "157"
                    },
                    "identity": "73",
                    "positive": "91",
                    "gaps": "0",
                    "alignmentLeft": "120",
                    "querySequence": "GRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "GQPGDSAKATRTVDVTMNDTMRFSPNAIPVKAGETIRFQVRNAGKVEHEMVIGTTAELKEHAKMMREMAGEKHAAPNKLTLAPGAQGTLVWRFDKAGTVDFACLVPGHFEAGMVGKVVVK",
                    "midline": "G+PGD+AKA RTV V M+DTMRF P  I V+ GET+RF   N G++EHE V+GTTA LK HA+ MR M   +HA P  + +A GA G +VW+F KAG+ +FACL+PGHFEAGMVGKVVV+"
                }
            }, {
                "accession": "WP_028874276",
                "definition": "hypothetical protein [Tepidiphilus margaritifer]",
                "hsp": {
                    "number": "1",
                    "bitScore": "159.073",
                    "score": "401",
                    "evalue": "3.63072e-47",
                    "query": {
                        "frame": "0",
                        "from": "10",
                        "to": "142"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "41",
                        "to": "173"
                    },
                    "identity": "69",
                    "positive": "90",
                    "gaps": "0",
                    "alignmentLeft": "133",
                    "querySequence": "HAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVVR",
                    "hitSequence": "HGSMHGDTSPSEVGKPGDPAKVDRTIEVVMDDSMRFTPANIAVKKGETIRFFVKNTGKVPHEMVIGSMKELKAHAEMMRKMPQMQHAEPNMVTLQPGQRGGLVWQFDQPGTVDFACLVPGHMEAGMAGKIVVE",
                    "midline": "H   H   + +  G+PGD AK  RT+ VVM D+MRF PA I V++GET+RF   N G++ HE V+G+   LKAHA+ MR MP MQHA+P  V +  G  G +VWQF + G+ +FACL+PGH EAGM GK+VV"
                }
            }, {
                "accession": "OGP77197",
                "definition": "hypothetical protein A2Z13_03940 [Deltaproteobacteria bacterium RBG_16_64_85] >gi|1084758494|gb|OGP99744.1| hypothetical protein A2Z40_00380 [Deltaproteobacteria bacterium RBG_19FT_COMBO_60_16]",
                "hsp": {
                    "number": "1",
                    "bitScore": "158.688",
                    "score": "400",
                    "evalue": "4.42525e-47",
                    "query": {
                        "frame": "0",
                        "from": "22",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "46",
                        "to": "165"
                    },
                    "identity": "70",
                    "positive": "86",
                    "gaps": "0",
                    "alignmentLeft": "120",
                    "querySequence": "YGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "FGKPGDARKVSRTIDVGMGDDMRFKPANINVKRGETIRFVVKNNGRLKHEMVLGSMNELKEHAALMRKFPEMEHDDPNAVSVDPGKTGTLIWHFTKTGTFDFACLQPGHFEGGMVGKIWV",
                    "midline": "+G+PGDA K  RT+ V M D MRF PA I V+RGET+RFV  N GR++HE VLG+   LK HA  MR  P+M+H DP AV V  G +G ++W FTK G+F+FACL PGHFE GMVGK+ V"
                }
            }, {
                "accession": "WP_013742881",
                "definition": "hypothetical protein [Pusillimonas sp. T7-7] >gi|330429011|gb|AEC20345.1| blue (type1) copper domain-containing protein [Pusillimonas sp. T7-7]",
                "hsp": {
                    "number": "1",
                    "bitScore": "158.688",
                    "score": "400",
                    "evalue": "4.8629e-47",
                    "query": {
                        "frame": "0",
                        "from": "10",
                        "to": "141"
                    },
                    "hit": {
                        "frame": "0",
                        "from": "37",
                        "to": "168"
                    },
                    "identity": "73",
                    "positive": "91",
                    "gaps": "0",
                    "alignmentLeft": "132",
                    "querySequence": "HAGAHAHDADTPYGRPGDAAKAQRTVRVVMSDTMRFDPATITVRRGETVRFVAANGGRIEHEFVLGTTASLKAHAQEMRAMPDMQHADPGAVRVAAGASGEIVWQFTKAGSFEFACLIPGHFEAGMVGKVVV",
                    "hitSequence": "HDMSTMSNAPSPTGQPGDPAKVTRTIELTMDDTMRFTPGDIQVRAGETVRFFIKNTGKIPHEMVIGSMADLKAHAAEMQKMPGMQHSEPNMITLGPGKIGGLVWQFDQAGTVDFACLIPGHMEAGMVGKVKV",
                    "midline": "H  +   +A +P G+PGD AK  RT+ + M DTMRF P  I VR GETVRF   N G+I HE V+G+ A LKAHA EM+ MP MQH++P  + +  G  G +VWQF +AG+ +FACLIPGH EAGMVGKV V"
                }
            }]
        }
    };

}];
