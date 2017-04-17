<?php

namespace AppBundle\Model;

class Range
{
    public $from;
    public $to;
    public $frame;

    /**
     * Range constructor.
     *
     * @param \SimpleXMLElement|string $from
     * @param \SimpleXMLElement|string $to
     * @param \SimpleXMLElement|string $frame
     */
    public function __construct($from, $to, $frame = null)
    {
        $this->from = (string) $from;
        $this->to = (string) $to;

        if ($frame) {
            $this->frame = (string) $frame;
        }
    }

    /**
     * @return string
     */
    public function __toString()
    {
        return sprintf('%s-%s', $this->from, $this->to);
    }
}
