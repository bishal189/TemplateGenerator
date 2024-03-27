import fitz  # PyMuPDF
from fpdf import FPDF

def extract_text_from_pdf(input_pdf_path):
    pdf_document = fitz.open(input_pdf_path)
    text = ""
    for page in pdf_document:
        text += page.get_text()
    pdf_document.close()
    return text

def save_text_to_file(text, output_txt_path):
    with open(output_txt_path, 'w', encoding='utf-8') as file:
        file.write(text)

def fill_txt_template(input_txt_path, output_pdf_path, replacements):
    with open(input_txt_path, 'r', encoding='utf-8') as file:
        text = file.read()

    # Perform replacements
    for placeholder, replacement in replacements.items():
        text = text.replace(placeholder, replacement)

    # Create PDF
    pdf = FPDF()
    pdf.add_page()
    pdf.set_auto_page_break(auto=True, margin=15)
    pdf.set_font("Arial", size=12)

    for line in text.split('\n'):
        pdf.cell(200, 10, txt=line.encode('latin-1', 'replace').decode('latin-1'), ln=True)

    pdf.output(output_pdf_path)

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
    '[client_first_name]': 'John',
    '[client_address]': '123 Main St',
    "'": "'",
        '?': '',  # Replace '?' with an empty string
    '"': '"'
}  # Adjust as needed
fill_txt_template(template_txt_path, output_pdf_path, replacements)

