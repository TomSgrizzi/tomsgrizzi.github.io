---
title: "CiteBuzz v1.0" 
date: 2024-07-30
url: /citebuzz/
aliases:
    - /t1.html
    - /v11.html
    - /v9.html
    - /v8.html
    - /v10.html
    - /v5.html
    - /v6.html
    - /v3.html
    - /v4.html
    - /v37.html
    - /v114.html
    - /v102.html
    - /v7.html
    - /v54.html
    - /v55.html
    - /v58.html
    - /v62.html
    - /v116.html
    - /v123.html
    - /v124.html
    - /v125.html
    - /v132.html
    - /v137.html
    - /v119.html
    - /v108.html
    - /v104.html
    - /v101.html
    - /v48.html
    - /v49.html
    - /v79.html
    - /v86.html
    - /v41.html
    - /v22.html
    - /v18.html
    - /uploads/7/0/2/0/70200055/t1a.pdf
    - /uploads/7/0/2/0/70200055/t1b.pdf
tags: ["python3","citebuzz","flask","programming","lingbuzz"]
author: "Last update"
description: "CiteBuzz is a Flask-based web application designed to generate citations in BibTeX and APA formats for papers hosted on the LingBuzz website."
summary: "A tool to export BIBTEX and APA citations from LingBuzz." 
cover:
    image: "/c1.png"
    alt: "Rationing and frictional unemployment in the United States, 1964–2009"
    relative: false
showToc: true
disableAnchoredHeadings: false

---
## Introduction

[CiteBuzz](https://citebuzz-d5c49bc031a5.herokuapp.com/) is a Flask-based web application designed to generate citations in BibTeX and APA formats for papers hosted on the LingBuzz website. The app scrapes the necessary details from the provided LingBuzz URL and returns formatted citations.


### GitHub repository 
+ [CiteBuzz repository](https://github.com/TomSgrizzi/CiteBuzz/)

### New features and improvements
+ Adding more citation styles

### Screenshots

![Alt text](https://github.com/TomSgrizzi/tomsgrizzi.github.io/blob/main/content/python_projects/citebuzz_preview.png?raw=true)

## Features

- **Generate BibTeX Citation:** Retrieve a BibTeX citation from a LingBuzz paper URL.
- **Generate APA Citation:** Retrieve an APA citation from a LingBuzz paper URL.
- **Mobile-friendly Interface:** Simple mobile interface available on mobile devices.

## Installation

To run this application locally, follow these steps:

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/TomSgrizzi/CiteBuzz.git
    ```

2. **Install Dependencies:**

    Make sure you have Python 3 installed. Install the required packages using pip:

    ```bash
    pip install -r requirements.txt
    ```

    Create a `requirements.txt` file with the following contents:

    ```text
    Flask==2.3.4
    requests==2.31.0
    beautifulsoup4==4.12.2
    ```

3. **Run the Application:**

    Start the Flask server:

    ```bash
    python app.py
    ```

    The application will be available at `http://127.0.0.1:5000/`.

**Usage**
    Simply paste your LingBuzz link in the input field and select your preferred citation style.
    
- **Generate BibTeX Citation:**
-
    Example response:

    ```json
    "@article{author_year,\n    title={Paper Title},\n    doi={some-doi},\n    year={2024},\n    author={Author, A.},\n    link={https://lingbuzz.net/some-paper},\n    note = {Published in: Some Journal},\n    journal=LingBuzz\n}"
    ```

- **Generate APA Citation:**

    Example response:

    ```json
    "Author, A. (2024). Paper Title. Some Journal. Retrieved from https://lingbuzz.net/some-paper"
    ```

## Error Handling

The application handles the following errors:

- **Invalid URL:** If the provided URL does not start with `https://lingbuzz.net/`, an error message is returned:

    ```json
     "Not a LingBuzz link"
    ```

- **Failed Retrieval:** If the request to the LingBuzz URL fails (e.g., non-200 HTTP status code), an error message is returned:

    ```json
        "error": "Failed to retrieve the webpage. Status code: [status_code]"
    ```

- **Missing Content:** If required content cannot be found on the page, an error message is returned:

    ```json
        "error": "The required content could not be found on the page."
    ```

- **Missing URL Parameter:** If the `url` parameter is not provided in the request, a 400 Bad Request error is returned:

    ```json
        "error": "URL is required"
    ```

## Development

Feel free to contribute to this project by submitting issues or pull requests. For local development, ensure that you follow best practices for Python and Flask application development.


## Acknowledgments

- [Flask](https://flask.palletsprojects.com/) - The web framework I used.
- [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/) - For HTML parsing.

