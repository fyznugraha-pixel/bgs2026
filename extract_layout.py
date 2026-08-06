import fitz

def extract():
    doc = fitz.open("NEW_BGS 2026.pdf")
    # Page 16 in PDF (0-indexed is 15) contains the Venue Layout
    page = doc.load_page(15)
    pix = page.get_pixmap(dpi=150)
    pix.save("public/venue-layout.png")
    print("Extracted public/venue-layout.png successfully!")

if __name__ == "__main__":
    extract()
