import json
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate
import pdfplumber
from docx import Document
from django.template import loader
import os
import pdfkit
from django.http import FileResponse
from urllib.parse import quote

def replace_placeholder(doc, placeholder, replacement):
    for paragraph in doc.paragraphs:
        if placeholder in paragraph.text:
            paragraph.text = paragraph.text.replace(placeholder, replacement)

def pdf_to_docx(pdf_path, docx_path, replacements):
    # Open the PDF file
    with pdfplumber.open(pdf_path) as pdf:
        # Create a new Word document
        doc = Document()

        # Loop through each page in the PDF
        for page in pdf.pages:
            # Extract text and formatting from the PDF page
            text = page.extract_text()

            # Add extracted text to the Word document
            doc.add_paragraph(text)

        # Save the Word document
        doc.save(docx_path)

        # Open the saved document for replacing placeholders
        doc = Document(docx_path)

        # Replace placeholders with actual content
        for placeholder, replacement in replacements.items():
            replace_placeholder(doc, placeholder, replacement)
        # Save the updated Word document
        doc.save(docx_path)



@api_view(['POST'])
def pdf_generator_from_template(request):
    try:
        data=json.loads(request.body)
        combined_data = f"{data.get('account')} {data.get('dispute_reason_in_bullet_list')}"
        print(combined_data)
        replacements = {
        '[client_first_name]': data.get('client_first_name'),
        '[client_middle_name]': data.get('client_middle_name'),
        '[client_last_name]': data.get('client_last_name'),
        '[client_address]': data.get('client_address'),
        '[client_city]': data.get('client_city'),
        '[client_state]': data.get('client_state'),
        '[client_postal_code]': data.get('client_postal'),
        '[ss_number]': data.get('ss_number'),
        '[bdate]': data.get('bdate'),
        '[account , dispute_reason_in_bullet_list]':combined_data
            }
        pdf_path = 'template.pdf'
        docx_path = 'output.docx'
        output_pdf_path='output.pdf'
        pdf_to_docx(pdf_path, docx_path, replacements)
        # command = "abiword --to=pdf output.docx output.pdf"
        # os.system(command)
        context = {
        'client_first_name': data.get('client_first_name'),
        'client_middle_name': data.get('client_middle_name'),
        'client_last_name': data.get('client_last_name'),
        'client_address': data.get('client_address'),
        'client_city': data.get('client_city'),
        'client_state': data.get('client_state'),
        'client_postal_code': data.get('client_postal'),
        'ss_number': data.get('ss_number'),
        'bdate': data.get('bdate'),
        'account':data.get('account'),
        'dispute_reason_in_bullet_list':data.get('dispute_reason_in_bullet_list'),
            }
        template_to_pdf(context)


        return Response({'message':"Sucessfull"},status=200)

    except Exception as e:
        error=str(e)
        print(error)
        return Response({'error':f"Unexpected error occured {error}"},status=400)

@api_view(['GET'])
def download_file(request,filename):
    try:
            # Return a response to download the pdf file
        response = FileResponse(open(filename, 'rb'))
        response['Content-Disposition'] = 'attachment; filename="%s"' % quote(filename)

        return response
    except Exception as e:
        error=str(e)
        print(error)
        return Response({'error':f"unexpected errror{error}"},status=400)

def template_to_pdf(context):
    print(context)
    template = loader.get_template('template1.html')
    html_content = template.render(context)

    # Generate PDF from the HTML content
    pdf_file = pdfkit.from_string(html_content, False)
    file_path='./pdf_file.pdf'
    with open(file_path, 'wb') as f:
        f.write(pdf_file)

    # Create a response with the PDF content
    response = HttpResponse(pdf_file, content_type='application/pdf')

    # Set the filename for download
    response['Content-Disposition'] = f'attachment; filename="invoice_{order.order_number}.pdf"'

    return response
