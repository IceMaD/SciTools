<?php

namespace AppBundle\Manager;

use AppBundle\Model\AgeSliceModel;
use PHPExcel;
use PHPExcel_Style;
use PHPExcel_Style_Alignment;
use PHPExcel_Worksheet;
use PHPExcel_Writer_Excel2007;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\File\File;

/**
 * Class ExportService
 */
class XlsExportManager
{
    /**
     * @var string
     */
    private $rootDir;

    /**
     * ExportService constructor.
     *
     * @param string                 $rootDir
     */
    public function __construct(string $rootDir)
    {
        $this->rootDir = sprintf('%s/../var/export', $rootDir);
    }

    /**
     * @param PHPExcel_Worksheet $sheet
     * @param string              $range
     *
     * @return PHPExcel_Style
     */
    private function centerBold(PHPExcel_Worksheet $sheet, string $range)
    {
        $style = $sheet->getStyle($range);
        $style->getFont()->setBold(true);
        $style->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);

        return $style;
    }

    /**
     * @param PHPExcel_Worksheet $sheet
     */
    private function autoSize(PHPExcel_Worksheet $sheet)
    {
        foreach ($sheet->getColumnIterator() as $column) {
            $sheet->getColumnDimension($column->getColumnIndex())->setAutoSize(true);
        };

        foreach ($sheet->getRowIterator() as $row) {
            $sheet->getRowDimension($row->getRowIndex())->setRowHeight(-1);
        }
    }

    /**
     * @param array  $headers
     * @param array  $data
     *
     * @return File
     */
    public function generateXlsx(array $headers, array $data)
    {
        $path = sprintf('%s/tmp.xlsx', $this->rootDir);

        $book = new PHPExcel();

        $sheet = $book->getActiveSheet();
        $sheet->fromArray($headers);
        $this->centerBold($sheet, '1');
        $sheet->fromArray($data, null, 'A2', true);

        $this->autoSize($sheet);

        $fileSystem = new Filesystem();

        if ($fileSystem->exists($path)) {
            $fileSystem->remove($path);
        }

        $writer = new PHPExcel_Writer_Excel2007($book);
        $writer->save($path);

        return new File($path);
    }
}
