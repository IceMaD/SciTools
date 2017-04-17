<?php

namespace AppBundle\Model;

use Symfony\Component\HttpFoundation\File\UploadedFile;

class ExtractRequest
{
    /**
     * @var string
     */
    public $pattern;

    /**
     * @var UploadedFile
     */
    public $blastFile;

    /**
     * @return string
     */
    public function getRegexp()
    {
        $pattern = preg_replace('/[^A-Z*]/', '', strtoupper($this->pattern));

        $pattern = str_replace('*', '[A-Z]', $pattern);

        return sprintf('/%s/', $pattern);
    }
}
