---
title: "GeneraTreeX v1.0" 
date: 2024-05-13
url: /generatreex/
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
tags: ["python3","generatreex","latex","programming"]
author: "Last update"
description: "GeneraTreeX is a flask app deployed on Heroku.It converts in-line syntactic notation to tree diagrams using `forest` and `pdflatex` from TexLive.
" 
summary: "A user-friendly and simple tool that facilitates the representation of syntactic trees from in-line notation." 
cover:
    image: "/c1.png"
    alt: "Rationing and frictional unemployment in the United States, 1964–2009"
    relative: false
showToc: true
disableAnchoredHeadings: false

---

## Introduction

GeneraTreeX is a user-friendly web application designed to simplify the creation of syntactic tree diagrams for linguistic analysis. With an intuitive interface, GeneraTreeX allows linguists, educators, and students to input specific in-line notation syntax and instantly generate the relevant syntactic tree diagrams. By adhering to a structured input format enclosed within square brackets, users define the structure of their trees. GeneraTreeX offers validation checks to ensure proper bracket balance and provides optional features like movement lines to enhance diagram clarity. Error handling mechanisms guide users through input corrections, while server-side error messages explain issues encountered during PDF generation. GeneraTreeX is a `flask` app deployed on Heroku. The core packages of GeneraTreeX are `forest` and `pdflatex` from TeXLive.

##### Packages deployed

+ Flask
+ matplotlib

##### Next improvements

Future improvements will probably affect the following aspects:

+ A better customization of movement lines (based on the size of the structure as well).
+ Bug fixes and better visualization of error feedbacks.
+ General refactoring of the code.

---

## Screenshots

![Alt text](/oprle1.png/ "")
![Alt text](/oprle2.png/ "")
![Alt text](/oprle3.png/ "")

## Python code

The full code is available on [GitHub](https://github.com/TomSgrizzi/generatreex).
