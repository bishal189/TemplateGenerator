import fitz  # PyMuPDF
from PyPDF2 import PdfReader, PdfWriter

def extract_text_from_pdf(input_pdf_path):
    """Extracts text from a PDF using PyMuPDF."""
    pdf_document = fitz.open(input_pdf_path)
    text = ""
    for page in pdf_document:
        text += page.get_text("text")  # Use "text" argument for plain text
    pdf_document.close()
    return text

def save_text_to_file(text, output_txt_path):
    """Saves text to a file with UTF-8 encoding."""
    with open(output_txt_path, 'w', encoding='utf-8') as file:
        file.write(text)

def fill_txt_template(input_txt_path, output_pdf_path, replacements):
    """Fills a text template with replacements and creates a new PDF."""
    with open(input_txt_path, 'r', encoding='utf-8') as file:
        text = file.read()

    # Improved replacement logic
    for placeholder, replacement in replacements.items():
        text = text.replace(placeholder, str(replacement))  # Ensure string conversion

    # Create PDF with PyPDF2
    pdf_writer = PdfWriter()
    with open(original_pdf_path, 'rb') as template_pdf:
        template_pdf_reader = PdfReader(template_pdf)
        for page_num in range(len(template_pdf_reader.pages)):
            page = template_pdf_reader.pages[page_num]
            pdf_writer.add_page(page)

    # Iterate through lines and write to PDF (improved formatting)
    for line in text.splitlines():
        pdf_writer.addPage()  # Create a new page for each line
        current_page = pdf_writer.pages[-1]  # Access the last added page
        current_page.merge_page(PdfReader(StringIO(line.encode('utf-8'))).getPage(0))  # Add line as page content

    with open(output_pdf_path, 'wb') as output_pdf:
        pdf_writer.write(output_pdf)

# Usage
original_pdf_path = 'template.pdf'
template_txt_path = 'template.txt'
output_pdf_path = 'filled_template.pdf'

# Step 1: Convert PDF to text
text_from_pdf = extract_text_from_pdf(original_pdf_path)

# Step 2: Save text to a file
save_text_to_file(text_from_pdf, template_txt_path)

# Step 3: Perform replacements and convert back to PDF
replacements = {
    "[client_first_name]": "John",
    "[client_address]": "123 Main St",
    "’": "'",  # Replace curly apostrophe with straight apostrophe
    "?": "'",   # Replace '?' with apostrophe
    "“": '"',  # Replace left double quote
    "”": '"',  # Replace right double quote
}
fill_txt_template(template_txt_path, output_pdf_path, replacements)

