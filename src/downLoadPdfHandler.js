import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const pdhDownloadHandler = (id) => {
    const target = document.getElementById(id);
    if (target === null) return;

    html2canvas(target, { scale: 2.5 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png'); // PNG形式で画像データを取得
      const pdf = new jsPDF('landscape', 'pt', 'a4'); // 横向き、ポイント単位、A4サイズ

      // プレビュー画面のサイズを基にPDFのサイズを計算
      const imgWidth = pdf.internal.pageSize.getWidth(); // PDFの横幅を取得
      const imgHeight = pdf.internal.pageSize.getHeight(); // PDFの縦幅を取得

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight); // 画像をPDFに追加
      pdf.save('test.pdf'); // PDFを保存
    });
  };