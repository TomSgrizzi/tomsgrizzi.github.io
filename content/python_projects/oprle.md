---
title: "Oprle v1.0" 
date: 2023-10-11
url: /oprle/
aliases:
tags: ["python3","oprle","game","programming"]
author: "Last update"
description: "This game - a mathematical expression generation and solving challenge - is modelled on the logic of Wordle. The objective is to work through a sequence of five numbers and perform operations (+, -, *) to obtain the final result. Every third number is the result of an operation between the first and second numbers before that. The user has nine tries available, and for each attempt the game will provide a feedback. A number is reprinted in: green if the user guesses it in the right position; yellow if the position is wrong; black if it's not present within the hidden expression. I hope it can be a fun and engaging way to test mathematical skills and simple logical thinking.
" 
summary: "A mathematical expression generation and solving challenge designed to be a fun and engaging way to test simple mathematical skills and simple logical thinking." 
cover:
    image: ""
    alt: ""
    relative: true
showToc: true
disableAnchoredHeadings: false

---

## Introduction

This game - a mathematical expression generation and solving challenge - is modelled on the logic of Wordle. The objective is to work through a sequence of five numbers and perform operations (+, -, *) to obtain the final result. Every third number is the result of an operation between the first and second numbers before that. The user has nine tries available, and for each attempt the game will provide a feedback. A number is reprinted in: green if the user guesses it in the right position; yellow if the position is wrong; black if it's not present within the hidden expression. I hope it can be a fun and engaging way to test mathematical skills and simple logical thinking.

##### Packages deployed

+ Random
+ Tkinter

##### Next improvements

I plan to keep working on the code as I dive deeper in my learning journey. More specifically, I'd like to carry out the following updates:

+ Three levels of difficulty: easy, medium, hard.
+ General GUI improvements.
+ General refactoring of the code.

---

## Screenshots

![Alt text](https://raw.githubusercontent.com/TomSgrizzi/tomsgrizzi.github.io/main/content/python_projects/oprle1.png)
![Alt text](https://raw.githubusercontent.com/TomSgrizzi/tomsgrizzi.github.io/main/content/python_projects/oprle2.png)
![Alt text](https://raw.githubusercontent.com/TomSgrizzi/tomsgrizzi.github.io/main/content/python_projects/oprle3.png)

## Python code

```
import tkinter as tk
from tkinter import *
from tkinter import ttk
from tkinter import Text
import random
from tkinter import messagebox

################ SETTING UP THE GUI ######################
root = Tk()
root.title("Oprle")
root.geometry('600x600')
initialize_frame = tk.Frame(root)
game_page = tk.Frame(root)

def initialize_the_frame ():
    initialize_frame = tk.Frame(root)
    return initialize_frame



#root.iconbitmap('./mathematics.ico') #attribution: <a href="https://www.flaticon.com/free-icons/mathematics" title="mathematics icons">Mathematics icons created by Rabit Jes - Flaticon</a>
#mainframe = ttk.Frame(root,padding = "3 3 12 12")

root.columnconfigure(0,weight=1)
root.columnconfigure(1,weight=1)
root.columnconfigure(2,weight=1)
initialize_frame.grid(column=1,row=0)



################ GAME LOGIC ##########################

operation_to_send = StringVar()
hidden_operation = []
operation_to_check = StringVar()

def create_operation():
    operation = []
    numbers = [1,2,3,4,5,6,7,8,9]
    operators = ['+', '-', '*']

    a = random.choice(numbers)
    b = random.choice(numbers)
    c= random.choice(numbers)
    d = random.choice(numbers)
    e = random.choice(numbers)
    f = random.choice(numbers)
    g = random.choice(numbers)
    h = random.choice(numbers)


    random_numbers = [a,b]

    i = 1

    operation.append(a) #number
    operation.append(random.choice(operators))
    operation.append(b) #number
    first_operator = eval(''.join(map(str, str(a)+ str(operation[1]) + str(b))))
    operation.append(random.choice(operators))
    operation.append(first_operator) #number
    operation.append(random.choice(operators))
    second_operator = eval(''.join(map(str, str(b)+ str(operation[3]) + str(first_operator))))
    operation.append(second_operator) #number
    operation.append(random.choice(operators))
    third_operator = eval(''.join(map(str, str(first_operator)+ str(operation[5]) + str(second_operator))))
    operation.append(third_operator)
    operation.append("=")
    result_ = eval(''.join(map(str, str(second_operator)+ str(operation[7]) + str(third_operator))))
    operation.append(result_)

    empty_space = " _"

    operation_to_check.set(''.join(map(str,operation)))
    hidden_operation.append(str(operation[0]) + empty_space + " " + str(operation[2]) + empty_space + empty_space + empty_space + empty_space + empty_space + empty_space + " = " + "_ ")
    print(operation)
    print(operation_to_send.get())
    return operation_to_send.set(''.join(map(str, hidden_operation)))


create_operation()



operation_widget = Label(game_page, text=operation_to_send.get(),foreground="black",font=('Calibri',20))
text_widget = Text(game_page, height=10, width=40)


################### GUI ELEMENTS ######################

label = Label(initialize_frame, text="Oprle", foreground="black",font=('Calibri',40),pady=10)
rules = Label(initialize_frame, text="""
              
Welcome to Oprle!
The rules are the following: this program will generate a mathematical expression 
consisting of 5 (five) numbers and the following mathematical operators:
              
+, -, *
(i.e., addition, subtraction, moltiplication). 
              
The 3rd (third) number is the result of the operation between 
the 1st (first) and 2nd (second) number. 
In the following example 1 is the 1st number, 4 is the 2nd, and 5 is the 3rd, obtained 
by applying the operation between the first and the second number (+):
              
1 + 4 _ 5
              
Once you obtain the 3rd (third) number, you can proceed with finding the 4th (fourth) one,
which is the result of the operation between the 2nd (second)
and 3rd (third) number, for instance 12 is the result of 4 * 3:
              
1 + 4 * 3 _ 12
              
This goes on till you reach the 5th (fifth) number. Once you have it, you can find
the final result by guessing the
operation between the 4th (fourth) and the 5th (fifth) number, which you will need to 
add after the '=' symbol to complete the game.

""")




############## GUI FUNCTIONS ################

def initialize_clicked():
    # Hide label and rules
    label.grid_forget()
    rules.grid_forget()
    initialize.grid_forget()
    initialize_the_frame()

def show_frame(frame,current_frame):
    current_frame.grid_forget()
    frame.grid(column=1,row=0)
    frame.tkraise()


def show_message():
    question = messagebox.showinfo(title="Congrats!",message="Congrats! You got the right operation!")

def error():
    errore = messagebox.showinfo(title="Too many trials!",message="Oh no, it looks like this one was really difficult!\n Try again:)")


def reset_wigets():
    for widget in game_page.winfo_children:
        if isinstance(widget,tk.Entry):
            widget.delete(0,'end')
        if isinstance(widget, tk.StringVar):
            widget.set("")
        if isinstance(widget, tk.Label):
            widget.grid_forget()
        if isinstance(widget, tk.Text):
            widget.delete('1.0', tk.END)
        initialize_frame.grid(column=1,row=0)




############## GUI WORKFLOW ##################


guesses = []
extra_lines = []
current_guess_number = 0  # Initialize once outside the function

def restart_game():
    initialize_frame.grid(row=0, column=1, sticky="nsew")
    # Reset any variables or data structures
    guesses.clear()
    extra_lines.clear()
    current_guess_number = 0
    game_page.grid_forget()
    initialize_the_frame()
    print("cleared")


# Defining colors
correct_color = "green"
partial_match_color = "yellow"
default_color = "black"
labels = []

def submit_guess():
    global current_guess_number
    global extra_lines

    print("submit_guess called")
    guesses.append(attempt.get()[:10])

    if current_guess_number < len(guesses):
        entry_guess = guesses[current_guess_number]
        print("Length of extra_lines:", len(extra_lines))

        for i, line in enumerate(extra_lines):
            print(f"Updating line {i} with guess {current_guess_number}")
            if i == current_guess_number:
                # Remove the existing Label widget (line)
                line.grid_forget()

                # Create a Text widget
                text_widget = Text(game_page, height=1, width=40, font=('Calibri', 14))
                text_widget.grid(column=1,row=i+4)

                # Apply tags for coloring
                text_widget.tag_configure('correct', foreground='green')
                text_widget.tag_configure('partial_match', foreground='yellow')
                text_widget.tag_configure('default', foreground='black')

                for l in range(min(len(attempt.get()), len(operation_to_check.get()))):
                    if attempt.get()[l] == operation_to_check.get()[l]:
                        text_widget.insert('end', attempt.get()[l], 'correct')
                    elif attempt.get()[l] in operation_to_check.get():
                        text_widget.insert('end', attempt.get()[l], 'partial_match')
                    else:
                        text_widget.insert('end', attempt.get()[l], 'default')

                if attempt.get() == operation_to_check.get():
                    show_message()
                    quit.grid(column=1,row=16)
                    #guesses = []
                    #extra_lines = []
                    #current_guess_number = 0
                    #create_operation()

                # Save the new Text widget to the list
                extra_lines[i] = text_widget

        current_guess_number += 1
        print(current_guess_number)
        if current_guess_number == 9:
            error()
            quit.grid(column=1,row=16)

        content = text_widget.get("1.0", "end-1c")
        print(content)

    user_input_entry.delete(0, END)  # Clear the entry field



###### Buttons and fields Intro page ###

initialize = Button(initialize_frame, text="Let's play!", background="green",command=lambda: show_frame(game_page,initialize_frame), foreground="white")
quit = Button(game_page,text="Quit",background="red",foreground="white",command=lambda: root.destroy())


#### Buttons and fields Game page ####


entry_guess = ""
game_title = Label(game_page, text="Oprle", foreground="black",font=('Calibri',40),pady=10)
entry_intro = Label(game_page, text="Here's an operation for you to crack:",font=('Calibri',14))
equation_label = Label(game_page, textvariable=operation_to_send, padx=5,pady=10)
attempt = StringVar()
user_input_entry = ttk.Entry(game_page,  textvariable=attempt, font=('Calibri', 12))
submit_button = ttk.Button(game_page, text="Submit", command=submit_guess)

root.bind('<Return>', lambda event: submit_guess())

congrats = ttk.Button(game_page,text=f"\n Congrats! You got the right operation in {current_guess_number} trials!", command=show_message)


for _ in range(8):
    line = Label(game_page, text="_ _ _ _ _ _ _ _ _ _ _", font=('Calibri', 14), padx=5, pady=5)
    #text_widget = Text(game_page, height=1, width=40, font=('Calibri', 14))
    extra_lines.append(line)

empty_line = Label(game_page,text=" ",font=('Calibri', 14),padx=5,pady=2)


###### Intro Page #####

label.grid(column=1,row=0)
rules.grid(column=1,row=1)
print("")
initialize.grid(column=1,row=2)

###### Game Page #####
game_title.grid(column=1,row=0)
entry_intro.grid(column=1,row=1)
operation_widget.grid(column=1,row=2)
for i, line in enumerate(extra_lines):
    line.grid(column=1,row=i+3)  # Assuming you're using grid layout
empty_line.grid(column=1,row=12)
user_input_entry.grid(column=1,row=13)
user_input_entry.focus()
submit_button.grid(column=1,row=15)


root.mainloop()
```

