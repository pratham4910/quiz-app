const quizData = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Hyper Tool Markup Language",
        "Hyperlinks And Text Markup Language",
        "Hyper Text Markup Leveller",
      ],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Which programming language is commonly used for web development?",
      options: ["Java", "Python", "JavaScript", "C++"],
      answer: "JavaScript"
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets",
        "Creative Style Sheets",
      ],
      answer: "Cascading Style Sheets"
    },
    {
      question: "What is the output of the following code?\n\n```python\nprint(2 + 2 * 3 - 1)\n```",
      options: ["4", "5", "6", "7"],
      answer: "7"
    },
    {
      question: "What is the purpose of an 'if' statement in programming?",
      options: [
        "To loop over a block of code",
        "To execute a block of code multiple times",
        "To make decisions based on conditions",
        "To define a function"
      ],
      answer: "To make decisions based on conditions"
    },
    {
      question: "Which data structure operates on a 'last in, first out' (LIFO) principle?",
      options: ["Queue", "Stack", "LinkedList", "Heap"],
      answer: "Stack"
    },
    {
      question: "In object-oriented programming, what is the process of creating an instance of a class called?",
      options: ["Inheritance", "Encapsulation", "Abstraction", "Instantiation"],
      answer: "Instantiation"
    },
    {
      question: "What is the time complexity of adding or removing elements from a JavaScript Set?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      answer: "O(1)"
    },
    {
      question: "Which sorting algorithm has an average time complexity of O(n log n)?",
      options: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Selection Sort"],
      answer: "Quick Sort"
    },
    {
      question: "What is the binary representation of the decimal number 10?",
      options: ["1010", "1100", "1111", "1001"],
      answer: "1010"
    },
    {
      question: "Which of the following is NOT a SQL database management system?",
      options: ["MySQL", "Oracle", "MongoDB", "SQLite"],
      answer: "MongoDB"
    },
    {
      question: "What is the purpose of the 'finally' block in a try-catch-finally statement?",
      options: [
        "To specify the code that should be executed if an exception is thrown",
        "To catch and handle specific types of exceptions",
        "To ensure that a block of code is always executed, regardless of whether an exception is thrown",
        "To define a function that can be called after an exception is thrown"
      ],
      answer: "To ensure that a block of code is always executed, regardless of whether an exception is thrown"
    },
    {
      question: "What is the maximum number of nodes at level 'k' in a binary tree?",
      options: ["k", "2^k", "2^(k-1)", "2^(k+1) - 1"],
      answer: "2^k"
    },
    {
      question: "What does the acronym 'URL' stand for?",
      options: [
        "Universal Resource Locator",
        "Uniform Resource Locator",
        "Unique Resource Locator",
        "Universal Reference Locator"
      ],
      answer: "Uniform Resource Locator"
    },
    {
      question: "What is the purpose of the 'git clone' command?",
      options: [
        "To create a new branch in a Git repository",
        "To commit changes to a Git repository",
        "To download a copy of a Git repository to your local machine",
        "To merge branches in a Git repository"
      ],
      answer: "To download a copy of a Git repository to your local machine"
    },
    {
      question: "Which HTTP method is used to retrieve data from a server?",
      options: ["GET", "POST", "PUT", "DELETE"],
      answer: "GET"
    },
    {
      question: "In the context of databases, what does the acronym 'SQL' stand for?",
      options: [
        "Structured Query Language",
        "Sequential Query Language",
        "Standard Query Language",
        "System Query Language"
      ],
      answer: "Structured Query Language"
    },
    {
      question: "What is the time complexity of a binary search algorithm?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      answer: "O(log n)"
    },
    {
      question: "What is the purpose of the 'super' keyword in Java?",
      options: [
        "To access the parent class constructor",
        "To declare a superclass",
        "To override a method in the parent class",
        "To specify the visibility of a class member"
      ],
      answer: "To access the parent class constructor"
    },
    {
      question: "What does the acronym 'API' stand for?",
      options: [
        "Application Programming Interface",
        "Application Protocol Interface",
        "Application Parsing Interface",
        "Application Provisioning Interface"
      ],
      answer: "Application Programming Interface"
    },
        {
          question: "Which data structure is typically used to implement a LIFO (Last-In, First-Out) behavior?",
          options: ["Queue", "Stack", "Heap", "LinkedList"],
          answer: "Stack"
        },
        {
          question: "What is the purpose of the 'new' keyword in Java?",
          options: [
            "To create a new instance of a class",
            "To access a static method or variable",
            "To perform memory allocation",
            "To initialize an array"
          ],
          answer: "To create a new instance of a class"
        },
        {
          question: "Which sorting algorithm has a worst-case time complexity of O(n^2)?",
          options: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Merge Sort"],
          answer: "Bubble Sort"
        },
        {
          question: "What is the purpose of a foreign key in a relational database?",
          options: [
            "To ensure data integrity and enforce referential integrity",
            "To provide a unique identifier for each record",
            "To perform joins between tables",
            "To optimize query performance"
          ],
          answer: "To ensure data integrity and enforce referential integrity"
        },
        {
          question: "Which of the following is NOT a fundamental data type in C++?",
          options: ["int", "float", "boolean", "string"],
          answer: "string"
        },
        {
          question: "What does the acronym 'HTTP' stand for?",
          options: [
            "Hypertext Transfer Protocol",
            "Hypertext Transport Protocol",
            "Hypertext Transfer Process",
            "Hypertext Transmission Protocol"
          ],
          answer: "Hypertext Transfer Protocol"
        },
        {
          question: "Which operator is used to access a member of a structure or class in C++?",
          options: [".", "->", "::", "*"],
          answer: "."
        },
        {
          question: "What is the maximum number of bits that can be represented by 1 byte?",
          options: ["4", "8", "16", "32"],
          answer: "8"
        },
        {
          question: "Which of the following is NOT a valid loop control statement in Java?",
          options: ["for", "while", "do-while", "until"],
          answer: "until"
        },
        {
          question: "What is the purpose of the 'break' statement in a loop?",
          options: [
            "To exit the loop and resume execution at the next iteration",
            "To skip the current iteration and move to the next iteration",
            "To terminate the loop and transfer control to the loop's enclosing statement",
            "To restart the loop from the beginning"
          ],
          answer: "To terminate the loop and transfer control to the loop's enclosing statement"
        },
      
        {
            question: "Which data structure uses First-In, First-Out (FIFO) ordering?",
            options: ["Queue", "Stack", "Heap", "LinkedList"],
            answer: "Queue"
          },
          {
            question: "What is the time complexity of searching for an element in a hash table (average case)?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
            answer: "O(1)"
          },
          {
            question: "What is the purpose of the 'this' keyword in JavaScript?",
            options: [
              "To access the current object's properties and methods",
              "To define a new object",
              "To refer to the parent object",
              "To create a new instance of a class"
            ],
            answer: "To access the current object's properties and methods"
          },
          {
            question: "What is the difference between '=='' and '===' in JavaScript?",
            options: [
              "'==' performs type coercion, while '===' requires strict equality of both value and type",
              "'===' performs type coercion, while '==' requires strict equality of both value and type",
              "'==' performs type coercion, while '===' only compares the values",
              "'===' performs type coercion, while '==' only compares the values"
            ],
            answer: "'==' performs type coercion, while '===' requires strict equality of both value and type"
          },
          {
            question: "Which of the following is NOT a fundamental data type in Python?",
            options: ["int", "float", "boolean", "character"],
            answer: "character"
          },
          {
            question: "What does the acronym 'URL' stand for?",
            options: [
              "Universal Resource Locator",
              "Uniform Resource Locator",
              "Unique Resource Locator",
              "Universal Reference Locator"
            ],
            answer: "Uniform Resource Locator"
          },
          {
            question: "Which sorting algorithm has a best-case time complexity of O(n log n)?",
            options: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Merge Sort"],
            answer: "Merge Sort"
          },
          {
            question: "What is the purpose of the 'static' keyword in Java?",
            options: [
              "To create a new instance of a class",
              "To declare a superclass",
              "To access a member without creating an instance of a class",
              "To define a constant"
            ],
            answer: "To access a member without creating an instance of a class"
          },
          {
            question: "In the context of databases, what does the acronym 'ACID' stand for?",
            options: [
              "Atomicity, Consistency, Isolation, Durability",
              "Access, Control, Integrity, Data",
              "Association, Concurrency, Indexing, Distribution",
              "Availability, Completeness, Integrity, Durability"
            ],
            answer: "Atomicity, Consistency, Isolation, Durability"
          },
          {
            question: "What is the purpose of the 'void' keyword in C++ function declarations?",
            options: [
              "To indicate that the function returns no value",
              "To specify the return type of the function",
              "To indicate that the function takes no arguments",
              "To declare a function as a member of a class"
            ],
            answer: "To indicate that the function returns no value"
          },
          {
            question: "Which sorting algorithm has a worst-case time complexity of O(n log n)?",
            options: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Selection Sort"],
            answer: "Quick Sort"
          },
          {
            question: "What is the purpose of the 'typeof' operator in JavaScript?",
            options: [
              "To check the type of a variable or expression",
              "To convert a value to a specific type",
              "To perform arithmetic operations",
              "To create a new object"
            ],
            answer: "To check the type of a variable or expression"
          },
          {
            question: "What is the difference between a stack and a queue?",
            options: [
              "A stack is LIFO (Last-In, First-Out), while a queue is FIFO (First-In, First-Out)",
              "A stack is FIFO (First-In, First-Out), while a queue is LIFO (Last-In, First-Out)",
              "A stack can only add elements at the front, while a queue can only add elements at the end",
              "A stack can only remove elements from the front, while a queue can only remove elements from the end"
            ],
            answer: "A stack is LIFO (Last-In, First-Out), while a queue is FIFO (First-In, First-Out)"
          },
          {
            question: "Which data structure is used to implement a breadth-first search (BFS)?",
            options: ["Stack", "Queue", "Heap", "LinkedList"],
            answer: "Queue"
          },
          {
            question: "What is the purpose of the 'NaN' value in JavaScript?",
            options: [
              "To represent a non-existent or invalid value",
              "To represent a null or empty value",
              "To represent an infinite value",
              "To represent a boolean value"
            ],
            answer: "To represent a non-existent or invalid value"
          },
          {
            question: "What is the time complexity of adding or removing elements from a Java HashSet?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
            answer: "O(1)"
          },
          {
            question: "Which of the following is an example of an imperative programming language?",
            options: ["C", "Java", "Python", "SQL"],
            answer: "C"
          },
          {
            question: "What is the purpose of the 'elif' keyword in Python?",
            options: [
              "To specify a condition in a loop",
              "To handle exceptions",
              "To define a function",
              "To specify an alternative condition in an if-else statement"
            ],
            answer: "To specify an alternative condition in an if-else statement"
          },
          {
            question: "Which of the following is NOT a characteristic of an object-oriented programming language?",
            options: ["Encapsulation", "Inheritance", "Polymorphism", "Recursion"],
            answer: "Recursion"
          },
          {
            question: "What is the purpose of the 'public' keyword in Java?",
            options: [
              "To specify the visibility of a class member",
              "To create a new instance of a class",
              "To declare a superclass",
              "To define a constant"
            ],
            answer: "To specify the visibility of a class member"
          }
  ];
  