<?php

namespace AppBundle\Manager;

use AppBundle\Model\ExtractRequest;
use AppBundle\Model\Hit;
use DusanKasan\Knapsack\Collection;
use SimpleXMLElement;

class ExtractManager
{
    /**
     * @var string
     */
    private $rootDir;

    public function __construct(string $rootDir)
    {
        $this->rootDir = $rootDir;
    }

    /**
     * @param ExtractRequest $request
     *
     * @return Collection
     */
    public function extract(ExtractRequest $request)
    {
        $regexp = $request->getRegexp();

        return $this->getHits($request)
            ->map(function (Hit $hit) use ($regexp) {
                if (preg_match($regexp, $hit->hsp->hitSequence, $matches)) {
                    $hit->matchedSequence = $matches[0];

                    return $hit;
                };

                return null;
            })
            ->filter(function (Hit $hit = null) {
                return $hit;
            })
            ->map(function (Hit $hit) {
                return [
                    'specy' => $hit->specy,
                    'accession' => $hit->accession,
                    'query' => $hit->hsp->query,
                    'matchedSequence' => $hit->matchedSequence,
                    'identity' => $hit->identity,
                ];
            })
            ->sort(function ($a, $b) {
                return $b['identity'] <=> $a['identity'];
            })
            ->distinct();
    }

    private function getHits(ExtractRequest $request)
    {
        $blast = new SimpleXMLElement(file_get_contents($request->blastFile->getPathname()));

        $hits = $blast->BlastOutput_iterations->Iteration->Iteration_hits->Hit;

        $extract = [];

        foreach ($hits as $hit) {

            $hit = new Hit($hit);

            if ($hit->identity < 30) {
                continue;
            }

            preg_match_all('/\[([^\]]+)\]/', $hit->reference, $matches);

            foreach ($matches[1] as $match) {
                $hit->specy = $match;

                $extract[] = $hit;
            }
        }

        $this->hits = Collection::from($extract);

        return $this->hits;
    }
}
