import fitz
from PIL import Image
import os
import glob

base_dir = r"d:\kerjaan\BGS\public\aset logo"

pdf_files = glob.glob(os.path.join(base_dir, "**", "*.pdf"), recursive=True)

for pdf_path in pdf_files:
    try:
        doc = fitz.open(pdf_path)
        if len(doc) > 0:
            page = doc.load_page(0)  # first page
            # render page to an image. Increase zoom for better resolution
            zoom = 2.0 
            mat = fitz.Matrix(zoom, zoom)
            pix = page.get_pixmap(matrix=mat, alpha=True)
            
            # create PIL image
            mode = "RGBA" if pix.alpha else "RGB"
            img = Image.frombytes(mode, [pix.width, pix.height], pix.samples)
            
            # save as webp
            webp_path = os.path.splitext(pdf_path)[0] + ".webp"
            img.save(webp_path, format="webp")
            print(f"Converted: {os.path.basename(pdf_path)} -> {os.path.basename(webp_path)}")
        doc.close()
    except Exception as e:
        print(f"Error converting {pdf_path}: {e}")

print("Done converting PDFs to WebP.")
