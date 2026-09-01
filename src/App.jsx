import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';
import './App.css'


function App() {
  return (
    <><br></br><br></br><br></br>
    <PdfViewerComponent id="container"
      // Specifies the URL (for example, a file from the public folder) or a Base64-encoded PDF.
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      // Specifies the path to the PDFium resource files required for the PDF Viewer to function.
      resourceUrl="https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2-pdfviewer-lib" style={{ 'height': '640px' }}>

      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
        BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
        FormFields, FormDesigner, PageOrganizer]} />
    </PdfViewerComponent></>
  )
}

export default App
