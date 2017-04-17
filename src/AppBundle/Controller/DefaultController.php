<?php

namespace AppBundle\Controller;

use AppBundle\Form\ExtractType;
use AppBundle\Model\ExtractRequest;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     *
     * @Template()
     */
    public function indexAction()
    {
        return [];
    }

    /**
     * @Route("/extract-pattern", name="extract_pattern")
     *
     * @Template()
     * @param Request $request
     *
     * @return array|BinaryFileResponse
     */
    public function extractPatternAction(Request $request)
    {
        $form = $this->createForm(ExtractType::class)->add('submit', SubmitType::class);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            /** @var ExtractRequest $extractRequest */
            $extractRequest = $form->getData();

            $hits = $this->get('app.manager.extract')->extract($extractRequest)->toArray();

            $headers = [
                'Specy',
                'Accession number',
                'Query',
                'Matched sequence',
                'Identity'
            ];

            $file = $this->get('app.manager.xls_export')->generateXlsx($headers, $hits);

            $response = new BinaryFileResponse($file);

            $response->setContentDisposition(ResponseHeaderBag::DISPOSITION_INLINE, sprintf('extract.%s', $file->guessExtension()));

            return $response;
        }

        return [
            'extract_form' => $form->createView()
        ];
    }
}
