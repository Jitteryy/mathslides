const FACTORIZATION_PROBLEMS = [
    
        {
          "number": 1,
          "statement": "Көбейткіштерге жіктеңіз: $-m^2 + 2m - 1$",
          "given": "$-m^2 + 2m - 1$",
          "type": "multiple_choice",
          "options": [
            { "label": "A)", "value": "$-(m-1)(m+1)$" },
            { "label": "B)", "value": "$-(m-1)^2$" },
            { "label": "C)", "value": "$(1+m)(m+1)$" },
            { "label": "D)", "value": "$(m-1)(m+1)$" },
            { "label": "E)", "value": "$(2+m)(m-1)$" }
          ],
          "steps": [
            {
              "content": "$-m^2 + 2m - 1 = -\\big(m^2 - 2m + 1\\big)$",
              "explanation": "Ортақ $-1$ коэффициентін жақша сыртына шығарамыз."
            },
            {
              "content": "$m^2 - 2m + 1 = (m-1)^2$",
              "explanation": "Квадратты толықтырамыз, бұл толық квадраттың формуласы."
            },
            {
              "content": "$-\\big(m^2 - 2m + 1\\big) = -\\,(m-1)^2$",
              "explanation": "Алынған толық квадратты орнына қоямыз."
            }
          ],
          "answer": "$-(m-1)^2$",
          "correct_option": "B"
        },
{
  "number": 9,
  "statement": "Көбейткіштерге жіктеңіз: $6p^2 + 24q^2 + 24pq$",
  "given": "$6p^2 + 24pq + 24q^2$",
  "type": "multiple_choice",
  "options": [
    { "label": "A)", "value": "$-(2q+p)^2$" },
    { "label": "B)", "value": "$-4(q-2p)^2$" },
    { "label": "C)", "value": "$(1+q)(p+1)$" },
    { "label": "D)", "value": "$6(p+2q)^2$" },
    { "label": "E)", "value": "$(2q+p)(q-1)$" }
  ],
  "steps": [
    {
      "content": "$6p^2 + 24pq + 24q^2$",
      "explanation": "Алдымен ортақ көбейткішті іздейміз."
    },
    {
      "content": "$= 6(p^2 + 4pq + 4q^2)$",
      "explanation": "Ортақ көбейткіш $6$ шығарамыз."
    },
    {
      "content": "$p^2 + 4pq + 4q^2 = (p+2q)^2$",
      "explanation": "Бұл толық квадрат үшмүше екенін байқаймыз."
    },
    {
      "content": "$6(p^2 + 4pq + 4q^2) = 6(p+2q)^2$",
      "explanation": "Жақшаны ықшамдап жазамыз."
    }
  ],
  "answer": "$6(p+2q)^2$",
  "correct_option": "D"
}, 
            {
              "number": 3,
              "statement": "Көбейткіштерге жіктеңіз: $45x + 30ax + 5a^2x$",
              "given": "$45x + 30ax + 5a^2x$",
              "type": "multiple_choice",
              "options": [
                { "label": "A)", "value": "$(5x - a)(5x + a)$" },
                { "label": "B)", "value": "$5(x+a)^2$" },
                { "label": "C)", "value": "$5(x-3)(x+a)$" },
                { "label": "D)", "value": "$5(x-a)^2$" },
                { "label": "E)", "value": "$5x(3+a)$" }
              ],
              "steps": [
                {
                  "content": "$45x + 30ax + 5a^2x$",
                  "explanation": "Барлық мүшелерде ортақ көбейткіш бар."
                },
                {
                  "content": "$= 5x(9 + 6a + a^2)$",
                  "explanation": "Ортақ $5x$ шығарамыз."
                },
                {
                  "content": "$9 + 6a + a^2 = (a+3)^2$",
                  "explanation": "Бұл толық квадрат екенін көреміз."
                },
                {
                  "content": "$5x(9 + 6a + a^2) = 5x(a+3)^2$",
                  "explanation": "Факторизацияны аяқтаймыз."
                }
              ],
              "answer": "$5x(a+3)^2$",
              "correct_option": "E"
            },
            {
              "number": 4,
              "statement": "Көбейткіштерге жіктеңіз: $4x^3 - 4y^3$",
              "given": "$4x^3 - 4y^3$",
              "type": "multiple_choice",
              "options": [
                { "label": "A)", "value": "$(4x-y)(16x^2 + 4xy + 1)$" },
                { "label": "B)", "value": "$4(x+y)^2$" },
                { "label": "C)", "value": "$4(x-y)(x+y)$" },
                { "label": "D)", "value": "$4(x-y)^2$" },
                { "label": "E)", "value": "$4(x-y)(x^2 + xy + y^2)$" }
              ],
              "steps": [
                {
                  "content": "$4x^3 - 4y^3 = 4(x^3 - y^3)$",
                  "explanation": "Ортақ көбейткіш $4$ шығарамыз."
                },
                {
                  "content": "$x^3 - y^3 = (x-y)(x^2 + xy + y^2)$",
                  "explanation": "Айырма кубының формуласын қолданамыз."
                },
                {
                  "content": "$4(x^3 - y^3) = 4(x-y)(x^2 + xy + y^2)$",
                  "explanation": "Факторизацияны аяқтаймыз."
                }
              ],
              "answer": "$4(x-y)(x^2 + xy + y^2)$",
              "correct_option": "E"
            }, {
                "number": 5,
                "statement": "Көбейткіштерге жіктеңіз: $a(m^3 - n^3)$",
                "given": "$a(m^3 - n^3)$",
                "type": "multiple_choice",
                "options": [
                  { "label": "A)", "value": "$(m-n)(m^2 - mn + n^2)$" },
                  { "label": "B)", "value": "$a(m-n)(m^2 + mn + n^2)$" },
                  { "label": "C)", "value": "$(m^3-a)(n^2 - m - n)$" },
                  { "label": "D)", "value": "$m(a+n)(m^2 + mn + n^2)$" },
                  { "label": "E)", "value": "$(a-b)(m+n+p)$" }
                ],
                "steps": [
                  {
                    "content": "$a(m^3 - n^3)$",
                    "explanation": "Ортақ көбейткіш $a$ бар, оны қалдырамыз."
                  },
                  {
                    "content": "$m^3 - n^3 = (m - n)(m^2 + mn + n^2)$",
                    "explanation": "Кубтар айырмасы формуласын қолданамыз."
                  },
                  {
                    "content": "$a(m^3 - n^3) = a(m - n)(m^2 + mn + n^2)$",
                    "explanation": "Факторизацияны біріктіріп жазамыз."
                  }
                ],
                "answer": "$a(m - n)(m^2 + mn + n^2)$",
                "correct_option": "B"
              },

  {
    "number": 6,
    "statement": "Көбейткіштерге жіктеңіз: $a^4 - 24 + 8a - 3a^3$",
    "given": "$a^4 - 3a^3 + 8a - 24$",
    "type": "multiple_choice",
    "options": [
      { "label": "A)", "value": "$(a+2)(a^2 - 2a + 4)(a-3)$" },
      { "label": "B)", "value": "$(2a-3)(a-1)$" },
      { "label": "C)", "value": "$a(a-1)(a+1)$" },
      { "label": "D)", "value": "$a^2(a+1)(a-1)$" },
      { "label": "E)", "value": "$(a-1)(a^2+2)$" }
    ],
    "steps": [
      {
        "content": "$a^4 - 3a^3 + 8a - 24$",
        "explanation": "Мүшелерді реттейміз."
      },
      {
        "content": "$(a^4 - 3a^3) + (8a - 24)$",
        "explanation": "Топтастырамыз."
      },
      {
        "content": "$a^3(a-3) + 8(a-3)$",
        "explanation": "Ортақ көбейткіш $(a-3)$ шығарамыз."
      },
      {
        "content": "$(a^3+8)(a-3)$",
        "explanation": "Жақшаларды біріктірдік."
      },
      {
        "content": "$a^3+8 = (a+2)(a^2 - 2a + 4)$",
        "explanation": "Кубтар қосындысы формуласы."
      },
      {
        "content": "$(a+2)(a^2 - 2a + 4)(a-3)$",
        "explanation": "Факторизация толық."
      }
    ],
    "answer": "$(a+2)(a^2 - 2a + 4)(a-3)$",
    "correct_option": "A"
  },
  {
    "number": 7,
    "statement": "Көбейткіштерге жіктеңіз: \\(x^2 - y^2 - 1,5(x-y)\\)",
    "given": "$x^2 - y^2 - 1,5(x-y)$",
    "type": "multiple_choice",
    "options": [
      { "label": "A)", "value": "$(x-y)(x+xy+1,5)$" },
      { "label": "B)", "value": "$(x-y)(x+y-1,5)$" },
      { "label": "C)", "value": "$4x(x-y)(x+y)$" },
      { "label": "D)", "value": "$4(x-y+1,5)^2$" },
      { "label": "E)", "value": "$(x-y)(x+y)(x+1,5)$" }
    ],
    "steps": [
      {
        "content": "$x^2 - y^2 = (x-y)(x+y)$",
        "explanation": "Айырма квадрат формуласы."
      },
      {
        "content": "$(x-y)(x+y) - 1,5(x-y)$",
        "explanation": "Ортақ көбейткіш $(x-y)$ бар екенін көреміз."
      },
      {
        "content": "$(x-y)[(x+y) - 1,5]$",
        "explanation": "Ортақ көбейткіш $(x-y)$-ды жақша сыртына шығарамыз."
      }
    ],
    "answer": "$(x-y)(x+y-1,5)$",
    "correct_option": "B"
  }, 
    {
      "number": 8,
      "statement": "Көбейткіштерге жіктеңіз: $4a^2 - b^2 - 2a + b$",
      "given": "$4a^2 - b^2 - 2a + b$",
      "type": "multiple_choice",
      "options": [
        { "label": "A)", "value": "$(2a+b)(2a+b-1)$" },
        { "label": "B)", "value": "$(2a-b)(2a-b-1)$" },
        { "label": "C)", "value": "$(a-b)(4a+b-1)$" },
        { "label": "D)", "value": "$(a+b)(4a-b-1)$" },
        { "label": "E)", "value": "$(2a-b)(2a+b-1)$" }
      ],
      "steps": [
        {
          "content": "$4a^2 - b^2 - 2a + b = (4a^2 - b^2) + (-2a + b)$",
          "explanation": "Топтастырамыз, алдымен квадраттар айырмасын бөлеміз."
        },
        {
          "content": "$4a^2 - b^2 = (2a-b)(2a+b)$",
          "explanation": "Айырма квадрат формуласы."
        },
        {
          "content": "$-2a + b = -(2a-b)$",
          "explanation": "Қалған екі мүшені ортақ $(2a-b)$ түріне келтіреміз."
        },
        {
          "content": "$(2a-b)(2a+b) - (2a-b) = (2a-b)\\big[(2a+b) - 1\\big]$",
          "explanation": "Ортақ $(2a-b)$ көбейткішін жақша сыртына шығарамыз."
        },
        {
          "content": "$(2a-b)(2a+b-1)$",
          "explanation": "Жақшаны ықшамдаймыз."
        }
      ],
      "answer": "$(2a-b)(2a+b-1)$",
      "correct_option": "E"
    },
    {
      "number": 9,
      "statement": "Көбейткіштерге жіктеңіз: $p^2 - 16c^2 - p - 4c$",
      "given": "$p^2 - 16c^2 - p - 4c$",
      "type": "multiple_choice",
      "options": [
        { "label": "A)", "value": "$(p - 4c - 1)(p + 4c)$" },
        { "label": "B)", "value": "$(c + 1)(c + p - 1)$" },
        { "label": "C)", "value": "$(c + p)(c^2 - p - 1)$" },
        { "label": "D)", "value": "$(1 - p)(c + p - 1)$" },
        { "label": "E)", "value": "$(4p + 2)(1 - c)(1 + c + c^2)$" }
      ],
      "steps": [
        {
          "content": "$(p^2 - 16c^2) + (-p - 4c)$",
          "explanation": "Топтастырамыз, квадраттар айырмасын бөліп аламыз."
        },
        {
          "content": "$(p - 4c)(p + 4c) - (p + 4c)$",
          "explanation": "$p^2 - 16c^2 = (p - 4c)(p + 4c)$, ал $-p - 4c = -(p + 4c)$."
        },
        {
          "content": "$(p + 4c)\\big[(p - 4c) - 1\\big]$",
          "explanation": "Ортақ $(p + 4c)$ көбейткішін шығарамыз."
        },
        {
          "content": "$(p + 4c)(p - 4c - 1)$",
          "explanation": "Жақшаны ықшамдаймыз, көбейткіштер алынды."
        }
      ],
      "answer": "$(p - 4c - 1)(p + 4c)$",
      "correct_option": "A"
    }


          
];

const FRACTION_SIMPLIFICATION_PROBLEMS = [
        {
          "number": 1,
          "statement": "Бөлшекті қысқартыңыз: \\(\\dfrac{a^2-ab}{a^2-2ab+b^2}\\)",
          "given": "$\\dfrac{a^2-ab}{a^2-2ab+b^2}$",
          "type": "multiple_choice",
          "options": [
            { "label": "A)", "value": "$\\dfrac{a}{a-b}$" },
            { "label": "B)", "value": "$\\dfrac{b}{a+b}$" },
            { "label": "C)", "value": "$\\dfrac{a-b}{a+b}$" },
            { "label": "D)", "value": "$\\dfrac{b}{a-b}$" },
            { "label": "E)", "value": "$\\dfrac{a}{a+b}$" }
          ],
          "steps": [
            {
              "content": "$a^2-ab=a(a-b)$",
              "explanation": "Алымнан ортақ $a$ шығарамыз."
            },
            {
              "content": "$a^2-2ab+b^2=(a-b)^2$",
              "explanation": "Бөлім — толық квадрат."
            },
            {
              "content": "$\\dfrac{a(a-b)}{(a-b)^2}=\\dfrac{a}{a-b}$",
              "explanation": "Жалпы көбейткіш $(a-b)$ қысқарады, $a\\ne b$ шартымен."
            }
          ],
          "answer": "$\\dfrac{a}{a-b}$",
          "correct_option": "A"
        },
        {
          "number": 2,
          "statement": "Бөлшекті қысқартыңыз: \\(\\dfrac{m^2-n^2}{2m^2+4mn+2n^2}\\)",
          "given": "$\\dfrac{m^2-n^2}{2m^2+4mn+2n^2}$",
          "type": "multiple_choice",
          "options": [
            { "label": "A)", "value": "$\\dfrac{m+n}{m-n}$" },
            { "label": "B)", "value": "$\\dfrac{m-n}{m+n}$" },
            { "label": "C)", "value": "$\\dfrac{m-n}{2(m+n)}$" },
            { "label": "D)", "value": "$\\dfrac{m}{2(m-n)}$" },
            { "label": "E)", "value": "$\\dfrac{n}{m-n}$" }
          ],
          "steps": [
            {
              "content": "$m^2-n^2=(m-n)(m+n)$",
              "explanation": "Айырма квадрат формуласы."
            },
            {
              "content": "$2m^2+4mn+2n^2=2(m^2+2mn+n^2)=2(m+n)^2$",
              "explanation": "Бөлімнен ортақ $2$ шығарып, толық квадратқа келтіреміз."
            },
            {
              "content": "$\\dfrac{(m-n)(m+n)}{2(m+n)^2}=\\dfrac{m-n}{2(m+n)}$",
              "explanation": "Жалпы көбейткіш $(m+n)$ қысқарады, $m\\ne -n$ шартымен."
            }
          ],
          "answer": "$\\dfrac{m-n}{2(m+n)}$",
          "correct_option": "C"
        }, 
        {
            "number": 3,
            "statement": "Амалдарды орындаңыз: \\(\\dfrac{4x^{2}-6xy+9y^{2}}{2x-3y}\\cdot\\dfrac{9y^{2}-4x^{2}}{8x^{3}+27y^{3}}\\)",
            "given": "$\\dfrac{4x^{2}-6xy+9y^{2}}{2x-3y}\\cdot\\dfrac{9y^{2}-4x^{2}}{8x^{3}+27y^{3}}$",
            "type": "multiple_choice",
            "options": [
              { "label": "A)", "value": "$\\dfrac{2x-3y}{2x+3y}$" },
              { "label": "B)", "value": "$\\dfrac{2x+3y}{2}$" },
              { "label": "C)", "value": "$\\dfrac{2x+3y}{2x-3y}$" },
              { "label": "D)", "value": "$-1$" },
              { "label": "E)", "value": "$\\dfrac{2}{3y-2x}$" }
            ],
            "steps": [
              {
                "content": "$9y^{2}-4x^{2}=(3y)^{2}-(2x)^{2}=(3y-2x)(3y+2x)$",
                "explanation": "Айырма квадрат формуласын қолданамыз."
              },
              {
                "content": "$(3y-2x)=-(2x-3y), \\quad (3y+2x)=(2x+3y)$",
                "explanation": "Қарапайым түрлендіру, таңба ауысады."
              },
              {
                "content": "$8x^{3}+27y^{3}=(2x)^{3}+(3y)^{3}=(2x+3y)(4x^{2}-6xy+9y^{2})$",
                "explanation": "Кубтар қосындысы формуласын қолданамыз."
              },
              {
                "content": "Орнына қойсақ: $\\dfrac{4x^{2}-6xy+9y^{2}}{2x-3y}\\cdot\\dfrac{-\\,(2x-3y)(2x+3y)}{(2x+3y)(4x^{2}-6xy+9y^{2})}$",
                "explanation": "Факторланған түрін бастапқы өрнекке қойдық."
              },
              {
                "content": "Қысқарту: $(4x^{2}-6xy+9y^{2})$ қысқарады.",
                "explanation": "Алым мен бөлімде бірдей көбейткіш бар."
              },
              {
                "content": "Қысқарту: $(2x+3y)$ қысқарады.",
                "explanation": "Тағы бір ортақ көбейткіш бар."
              },
              {
                "content": "Қысқарту: $(2x-3y)$ қысқарады, бірақ $-$ қалады.",
                "explanation": "$(3y-2x)=-(2x-3y)$ болғандықтан, минус таңбасы сақталады."
              },
              {
                "content": "Қалғаны: $-1$",
                "explanation": "Барлық ортақ көбейткіштер жойылғаннан кейін нәтиже $-1$."
              },
              {
                "content": "$2x-3y\\neq0,\\;2x+3y\\neq0$",
                "explanation": "Анықталу облысын ескереміз: бөлім нөл болмауы керек."
              }
            ],
            "answer": "$-1$",
            "correct_option": "D"
          },

          {
            "number": 4,
            "statement": "Бөлшекті қысқартыңыз: \\(\\dfrac{10b^3 + 640}{b^3 - 4b^2 + 16b}\\)",
            "given": "$\\dfrac{10b^3 + 640}{b^3 - 4b^2 + 16b}$",
            "type": "multiple_choice",
            "options": [
              { "label": "A)", "value": "$\\dfrac{a}{a-b}$" },
              { "label": "B)", "value": "$\\dfrac{4b}{10+b}$" },
              { "label": "C)", "value": "$\\dfrac{4-b}{4+b}$" },
              { "label": "D)", "value": "$\\dfrac{10(b+4)}{b}$" },
              { "label": "E)", "value": "$\\dfrac{10b}{b+4}$" }
            ],
            "steps": [
              {
                "content": "$10b^3 + 640 = 10(b^3 + 64)$",
                "explanation": "Алымнан ортақ $10$ шығарамыз."
              },
              {
                "content": "$b^3 + 64 = b^3 + 4^3 = (b+4)(b^2 - 4b + 16)$",
                "explanation": "Кубтар қосындысы формуласы бойынша жіктейміз."
              },
              {
                "content": "Алым: $10(b+4)(b^2 - 4b + 16)$",
                "explanation": "Алым толық факторланған түрге келді."
              },
              {
                "content": "$b^3 - 4b^2 + 16b = b(b^2 - 4b + 16)$",
                "explanation": "Бөлімнен ортақ $b$ шығарамыз."
              },
              {
                "content": "$\\dfrac{10(b+4)(b^2 - 4b + 16)}{b(b^2 - 4b + 16)}$",
                "explanation": "Алым мен бөлімді факторланған түрде жаздық."
              },
              {
                "content": "Қысқартамыз: $b^2 - 4b + 16$",
                "explanation": "Алым мен бөлімдегі ортақ көбейткіш жойылады."
              },
              {
                "content": "Қалғаны: $\\dfrac{10(b+4)}{b}$",
                "explanation": "Қысқартудан кейінгі соңғы түрі."
              }
            ],
            "answer": "$\\dfrac{10(b+4)}{b}$",
            "correct_option": "D"
          },
  {
    "number": 5,
    "statement": "Бөлшекті қысқартыңыз: \\(\\dfrac{a^2 - 9b^2 - a + 3b}{a^2 - 9b^2}\\)",
    "given": "$\\dfrac{a^2 - 9b^2 - a + 3b}{a^2 - 9b^2}$",
    "type": "multiple_choice",
    "options": [
      { "label": "A)", "value": "$\\dfrac{a+3b}{a-3b+1}$" },
      { "label": "B)", "value": "$\\dfrac{3b-1}{a+3b}$" },
      { "label": "C)", "value": "$\\dfrac{a-3b}{a+3b}$" },
      { "label": "D)", "value": "$\\dfrac{a+3b}{a-3b}$" },
      { "label": "E)", "value": "$\\dfrac{a+3b-1}{a+3b}$" }
    ],
    "steps": [
      {
        "content": "$a^2 - 9b^2 = (a - 3b)(a + 3b)$",
        "explanation": "Айырма квадрат формуласы."
      },
      {
        "content": "Жоғарғыны топтастырамыз: $a^2 - 9b^2 - a + 3b = (a^2 - 9b^2) - (a - 3b)$",
        "explanation": "Тиісті екі мүшені біріктіреміз."
      },
      {
        "content": "$(a^2 - 9b^2) - (a - 3b) = (a - 3b)(a + 3b) - (a - 3b)$",
        "explanation": "Алдыңғы қадамды факторланған түрге ауыстырамыз."
      },
      {
        "content": "$(a - 3b)\\big[(a + 3b) - 1\\big] = (a - 3b)(a + 3b - 1)$",
        "explanation": "Ортақ $(a - 3b)$ шығарамыз."
      },
      {
        "content": "$\\dfrac{(a - 3b)(a + 3b - 1)}{(a - 3b)(a + 3b)} = \\dfrac{a + 3b - 1}{a + 3b}$",
        "explanation": "Ортақ көбейткіш қысқарады, $a\\neq\\pm3b$."
      }
    ],
    "answer": "$\\dfrac{a+3b-1}{a+3b}$",
    "correct_option": "E"
  }

    
];

const EQUATION_SOLVING_PROBLEMS = [
    {
        "number": 1,
        "statement": "Теңдеуді шешіңіз: \\(2x^2 - 7x + 5 = 0\\)",
        "given": "$2x^2 - 7x + 5 = 0$",
        "type": "multiple_choice",
        "options": [
          { "label": "A)", "value": "5" },
          { "label": "B)", "value": "5; 2" },
          { "label": "C)", "value": "2.5; 1" },
          { "label": "D)", "value": "0; 1.5" },
          { "label": "E)", "value": "1.8; 2" }
        ],
        "steps": [
          {
            "content": "Квадраттық теңдеу: $2x^2 - 7x + 5 = 0$",
            "explanation": "Бұл — стандартты түрдегі квадраттық теңдеу."
          },
          {
            "content": "Формула: $D = b^2 - 4ac$, мұнда $a=2$, $b=-7$, $c=5$",
            "explanation": "Дискриминантты есептеу үшін коэффициенттерді анықтаймыз."
          },
          {
            "content": "$D = (-7)^2 - 4 \\cdot 2 \\cdot 5 = 49 - 40 = 9$",
            "explanation": "Дискриминантты есептейміз."
          },
          {
            "content": "$x = \\dfrac{-b \\pm \\sqrt{D}}{2a} = \\dfrac{7 \\pm 3}{4}$",
            "explanation": "Квадраттық теңдеу түбірлерінің формуласын қолданамыз."
          },
          {
            "content": "$x_1 = \\dfrac{7 - 3}{4} = 1$, $x_2 = \\dfrac{7 + 3}{4} = 2.5$",
            "explanation": "Екі түбірді есептеп аламыз."
          }
        ],
        "answer": "2.5; 1",
        "correct_option": "C"
      }, 
        {
          "number": 2,
          "statement": "Теңдеуді шешіңіз: \\(x^2 - 16 = 0\\)",
          "given": "$x^2 - 16 = 0$",
          "type": "multiple_choice",
          "options": [
            { "label": "A)", "value": "$\\pm 2$" },
            { "label": "B)", "value": "$\\pm 4$" },
            { "label": "C)", "value": "$\\varnothing$" },
            { "label": "D)", "value": "$0; 4$" },
            { "label": "E)", "value": "$\\pm 256$" }
          ],
          "steps": [
            {
              "content": "$x^2 - 16 = 0$",
              "explanation": "Бұл теңдеу айырма квадрат түрінде жазылған."
            },
            {
              "content": "$x^2 = 16$",
              "explanation": "Екі жаққа 16 қосамыз."
            },
            {
              "content": "$x = \\pm 4$",
              "explanation": "Квадрат түбірін табамыз."
            }
          ],
          "answer": "$x = \\pm 4$",
          "correct_option": "B"
        },
        {
            "number": 3,
            "statement": "Теңдеуді шешіңіз: \\(0.7x^2 - x^3 = 0\\)",
            "given": "$0.7x^2 - x^3 = 0$",
            "type": "multiple_choice",
            "options": [
              { "label": "A)", "value": "$0; \\tfrac{7}{10}$" },
              { "label": "B)", "value": "$5; 2$" },
              { "label": "C)", "value": "$5; 1$" },
              { "label": "D)", "value": "$0; 1.5$" },
              { "label": "E)", "value": "$0; 2$" }
            ],
            "steps": [
              {
                "content": "$0.7x^2 - x^3 = 0$",
                "explanation": "Берілген теңдеу."
              },
              {
                "content": "$x^2(0.7 - x) = 0$",
                "explanation": "Ортақ көбейткіш $x^2$-ті шығарамыз."
              },
              {
                "content": "$x^2 = 0 \\; \\Rightarrow \\; x = 0$",
                "explanation": "Бірінші түбір."
              },
              {
                "content": "$0.7 - x = 0 \\; \\Rightarrow \\; x = 0.7 = \\tfrac{7}{10}$",
                "explanation": "Екінші түбір."
              }
            ],
            "answer": "$x = 0$ немесе $x = \\tfrac{7}{10}$",
            "correct_option": "A"
          }, 
            {
              "number": 4,
              "statement": "Теңдеуді шешіңіз: \\(1.2x^2 + x = 0\\)",
              "given": "$1.2x^2 + x = 0$",
              "type": "multiple_choice",
              "options": [
                { "label": "A)", "value": "$0; \\tfrac{6}{5}$" },
                { "label": "B)", "value": "$0; 2$" },
                { "label": "C)", "value": "$0; -\\tfrac{5}{6}$" },
                { "label": "D)", "value": "$0; -1.2$" },
                { "label": "E)", "value": "$0; 0.8$" }
              ],
              "steps": [
                {
                  "content": "$1.2x^2 + x = 0$",
                  "explanation": "Бұл квадраттық теңдеу."
                },
                {
                  "content": "$x(1.2x + 1) = 0$",
                  "explanation": "Ортақ көбейткіш $x$-ті жақша сыртына шығарамыз."
                },
                {
                  "content": "$x = 0$ немесе $1.2x + 1 = 0$",
                  "explanation": "Әрбір көбейткішті нөлге теңейміз."
                },
                {
                  "content": "$1.2x + 1 = 0 \\; \\Rightarrow \\; x = -\\tfrac{1}{1.2} = -\\tfrac{5}{6}$",
                  "explanation": "Екінші түбірді табамыз."
                }
              ],
              "answer": "$x = 0$ немесе $x = -\\tfrac{5}{6}$",
              "correct_option": "C"
            },
            {
              "number": 5,
              "statement": "Теңдеуді шешіңіз: \\(x^2 - 4x + 3 = 0\\)",
              "given": "$x^2 - 4x + 3 = 0$",
              "type": "multiple_choice",
              "options": [
                { "label": "A)", "value": "$0; 7$" },
                { "label": "B)", "value": "$1; 2$" },
                { "label": "C)", "value": "$1; 3$" },
                { "label": "D)", "value": "$1; 4$" },
                { "label": "E)", "value": "$0; 3$" }
              ],
              "steps": [
                {
                  "content": "$x^2 - 4x + 3 = 0$",
                  "explanation": "Коэффициенттер: $a=1$, $b=-4$, $c=3$."
                },
                {
                  "content": "$D = b^2 - 4ac = (-4)^2 - 4\\cdot1\\cdot3 = 16 - 12 = 4$",
                  "explanation": "Дискриминантты есептейміз."
                },
                {
                  "content": "$x = \\dfrac{-b \\pm \\sqrt{D}}{2a} = \\dfrac{4 \\pm 2}{2}$",
                  "explanation": "Квадраттық теңдеудің формуласы."
                },
                {
                  "content": "$x_1 = \\dfrac{4-2}{2} = 1$, $x_2 = \\dfrac{4+2}{2} = 3$",
                  "explanation": "Екі түбірді табамыз."
                }
              ],
              "answer": "$x = 1$ немесе $x = 3$",
              "correct_option": "C"
            }, 
            {
                "number": 6,
                "statement": "Теңдеуді шешіңіз: \\(2x^2 - 98 = 0\\)",
                "given": "$2x^2 - 98 = 0$",
                "type": "multiple_choice",
                "options": [
                  { "label": "A)", "value": "$\\pm 14$" },
                  { "label": "B)", "value": "$\\pm 2$" },
                  { "label": "C)", "value": "$\\varnothing$" },
                  { "label": "D)", "value": "$0; 4$" },
                  { "label": "E)", "value": "$\\pm 7$" }
                ],
                "steps": [
                  {
                    "content": "$2x^2 - 98 = 0$",
                    "explanation": "Берілген теңдеуді жазып аламыз."
                  },
                  {
                    "content": "$2x^2 = 98$",
                    "explanation": "Буындарды бөлеміз."
                  },
                  {
                    "content": "$x^2 = 49$",
                    "explanation": "Екі жағын 2-ге бөлеміз."
                  },
                  {
                    "content": "$x = \\pm 7$",
                    "explanation": "Квадрат түбірін аламыз."
                  }
                ],
                "answer": "$x = \\pm 7$",
                "correct_option": "E"
              }, 
              {
                "number": 7,
                "statement": "Теңдеуді шешіңіз: \\(x^2 + 8x = 0\\)",
                "given": "$x^2 + 8x = 0$",
                "type": "multiple_choice",
                "options": [
                  { "label": "A)", "value": "5" },
                  { "label": "B)", "value": "5; 2" },
                  { "label": "C)", "value": "2.5; 1" },
                  { "label": "D)", "value": "0; -8" },
                  { "label": "E)", "value": "1.8; 2" }
                ],
                "steps": [
                  {
                    "content": "$x^2 + 8x = 0$",
                    "explanation": "Бұл квадраттық теңдеу."
                  },
                  {
                    "content": "$x(x + 8) = 0$",
                    "explanation": "Ортақ көбейткіш $x$-ті шығарамыз."
                  },
                  {
                    "content": "$x = 0$ немесе $x + 8 = 0$",
                    "explanation": "Әрбір көбейткішті нөлге теңейміз."
                  },
                  {
                    "content": "$x = -8$",
                    "explanation": "Екінші түбірді табамыз."
                  }
                ],
                "answer": "$x = 0$ немесе $x = -8$",
                "correct_option": "D"
              }
          
      
];

const TOPICS_DATA = {
    1: {
        id: 1,
        title: "Көбейткіштерге жіктеніз",
        problems: FACTORIZATION_PROBLEMS
    },
    2: {
        id: 2,
        title: "Бөлшекті қысқартыңыз",
        problems: FRACTION_SIMPLIFICATION_PROBLEMS
    },
    3: {
        id: 3,
        title: "Теңдеуді шешіңіз",
        problems: EQUATION_SOLVING_PROBLEMS
    }
};
