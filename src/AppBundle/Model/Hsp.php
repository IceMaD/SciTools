<?php

namespace AppBundle\Model;

class Hsp
{
    public $number;
    public $bitScore;
    public $score;
    public $evalue;
    public $query;
    public $hit;
    public $identity;
    public $positive;
    public $gaps;
    public $alignmentLeft;
    public $querySequence;
    public $hitSequence;
    public $midline;

    /**
     * Hsp constructor.
     *
     * @param \SimpleXMLElement $hsp
     */
    public function __construct(\SimpleXMLElement $hsp)
    {
        $this->number = $hsp->{'Hsp_num'};
        $this->bitScore = $hsp->{'Hsp_bit-score'};
        $this->score = $hsp->{'Hsp_score'};
        $this->evalue = $hsp->{'Hsp_evalue'};
        $this->query = new Range(
            $hsp->{'Hsp_query-from'},
            $hsp->{'Hsp_query-to'},
            $hsp->{'Hsp_query-frame'}
        );
        $this->hit = new Range(
            $hsp->{'Hsp_hit-from'},
            $hsp->{'Hsp_hit-to'},
            $hsp->{'Hsp_hit-frame'}
        );
        $this->identity = $hsp->{'Hsp_identity'};
        $this->positive = $hsp->{'Hsp_positive'};
        $this->gaps = $hsp->{'Hsp_gaps'};
        $this->alignmentLeft = $hsp->{'Hsp_align-len'};
        $this->querySequence = $hsp->{'Hsp_qseq'};
        $this->hitSequence = $hsp->{'Hsp_hseq'};
        $this->midline = $hsp->{'Hsp_midline'};
    }
}
