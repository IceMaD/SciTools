<?php

namespace AppBundle\Model;

use SimpleXMLElement;

class Hit
{
    /**
     * @var string
     */
    public $id;

    /**
     * @var string
     */
    public $specy;

    /**
     * @var string
     */
    public $reference;

    /**
     * @var string
     */
    public $accession;

    /**
     * @var int
     */
    public $length;

    /**
     * @var SimpleXMLElement
     */
    public $hsp;

    /**
     * @var float
     */
    public $identity;

    /**
     * @var string
     */
    public $matchedSequence;

    /**
     * Hit constructor.
     *
     * @param SimpleXMLElement $hit
     */
    public function __construct(\SimpleXMLElement $hit)
    {
        $this->id = $hit->Hit_id->__toString();
        $this->reference = $hit->Hit_def->__toString();
        $this->accession = $hit->Hit_accession->__toString();
        $this->length = (int) $hit->Hit_len->__toString();
        $this->hsp = new Hsp($hit->Hit_hsps->Hsp);
        $this->identity = round((int) $this->hsp->identity * 100 / (int) $this->hsp->alignmentLeft);
    }
}
