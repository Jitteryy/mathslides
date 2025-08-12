const PROBLEMS_DATA = [
    {
        number: 1,
        statement: "$\\frac{3}{8} \\cdot \\left(-2\\frac{2}{3}\\right)$",
        given: "$\\frac{3}{8} \\cdot \\left(-2\\frac{2}{3}\\right)$",
        steps: [
            {
                content: "$-2\\frac{2}{3} = -\\frac{8}{3}$",
                explanation: "Аралас санды жай бөлшекке айналдырамыз, минус таңбасын сақтаймыз."
            },
            {
                content: "$\\frac{3}{8} \\cdot \\left(-\\frac{8}{3}\\right) = \\frac{3 \\cdot (-8)}{8 \\cdot 3}$",
                explanation: "Көбейту ережесі: алымдарды бірге, бөлімдерді бірге көбейтеміз."
            },
            {
                content: "$\\frac{-24}{24} = -1$",
                explanation: "Алым мен бөлімді қысқартып, нәтижені табамыз."
            }
        ],
        answer: "$-1$"
    },
    {
        number: 2,
        statement: "$-12 \\cdot \\left(-4\\frac{23}{24}\\right)$",
        given: "$-12 \\cdot \\left(-4\\frac{23}{24}\\right)$",
        steps: [
            {
                content: "$-4\\frac{23}{24} = -\\frac{119}{24}$",
                explanation: "Аралас санды жай бөлшекке айналдырамыз, минус таңбасын сақтаймыз."
            },
            {
                content: "$(-12) \\cdot \\left(-\\frac{119}{24}\\right) = \\frac{12 \\cdot 119}{24}$",
                explanation: "Екі минус көбейтілгенде плюс болады, бүтін санды бөлшекпен көбейтеміз."
            },
            {
                content: "$\\frac{1428}{24} = \\frac{119}{2} = 59\\frac{1}{2}$",
                explanation: "Қысқартып, аралас сан түріне келтіреміз."
            }
        ],
        answer: "$\\frac{119}{2}$"
    },
    {
        number: 3,
        statement: "$-1{,}6 \\cdot \\frac{5}{8}$",
        given: "$-1{,}6 \\cdot \\frac{5}{8}$",
        steps: [
            {
                content: "$-1{,}6 = -\\frac{16}{10} = -\\frac{8}{5}$",
                explanation: "Ондық бөлшекті қысқартылған жай бөлшекке айналдырамыз."
            },
            {
                content: "$-\\frac{8}{5} \\cdot \\frac{5}{8} = \\frac{-8 \\cdot 5}{5 \\cdot 8}$",
                explanation: "Көбейту ережесі: алымдарды және бөлімдерді бөлек көбейтеміз."
            },
            {
                content: "$\\frac{-40}{40} = -1$",
                explanation: "Алым мен бөлімді қысқартып, нәтижені аламыз."
            }
        ],
        answer: "$-1$"
    },
    {
        number: 4,
        statement: "$-7{,}5 \\cdot \\left(-2\\frac{2}{15}\\right)$",
        given: "$-7{,}5 \\cdot \\left(-2\\frac{2}{15}\\right)$",
        steps: [
            {
                content: "$-7{,}5 = -\\frac{15}{2}, \\quad -2\\frac{2}{15} = -\\frac{32}{15}$",
                explanation: "Ондық және аралас сандарды жай бөлшектерге айналдырамыз."
            },
            {
                content: "$-\\frac{15}{2} \\cdot \\left(-\\frac{32}{15}\\right) = \\frac{15 \\cdot 32}{2 \\cdot 15}$",
                explanation: "Екі минус көбейгенде плюс болады, көбейту ережесін қолданамыз."
            },
            {
                content: "$\\frac{480}{30} = 16$",
                explanation: "Қысқартып, нәтижені табамыз."
            }
        ],
        answer: "$16$"
    },
    {
        number: 5,
        statement: "$-\\frac{7}{8} \\cdot 1\\frac{1}{7}$",
        given: "$-\\frac{7}{8} \\cdot 1\\frac{1}{7}$",
        steps: [
            {
                content: "$1\\frac{1}{7} = \\frac{8}{7}$",
                explanation: "Аралас санды жай бөлшекке айналдырамыз."
            },
            {
                content: "$-\\frac{7}{8} \\cdot \\frac{8}{7} = \\frac{-7 \\cdot 8}{8 \\cdot 7}$",
                explanation: "Көбейту ережесін қолданамыз."
            },
            {
                content: "$\\frac{-56}{56} = -1$",
                explanation: "Алым мен бөлімді қысқартып, нәтижені табамыз."
            }
        ],
        answer: "$-1$"
    },
    {
        number: 6,
        statement: "$17\\frac{2}{3} : 8\\frac{5}{6}$",
        given: "$17\\frac{2}{3} : 8\\frac{5}{6}$",
        steps: [
            {
                content: "$17\\frac{2}{3} = \\frac{53}{3}, \\quad 8\\frac{5}{6} = \\frac{53}{6}$",
                explanation: "Аралас сандарды жай бөлшектерге айналдырамыз."
            },
            {
                content: "$\\frac{53}{3} : \\frac{53}{6} = \\frac{53}{3} \\cdot \\frac{6}{53}$",
                explanation: "Бөлу ережесі: екінші бөлшекті кері көбейтеміз."
            },
            {
                content: "$\\frac{6}{3} = 2$",
                explanation: "Қысқартып, нәтижені табамыз."
            }
        ],
        answer: "$2$"
    },
    {
        number: 7,
        statement: "$4\\frac{2}{3} \\cdot \\left(-\\frac{3}{14}\\right)$",
        given: "$4\\frac{2}{3} \\cdot \\left(-\\frac{3}{14}\\right)$",
        steps: [
            {
                content: "$4\\frac{2}{3} = \\frac{14}{3}$",
                explanation: "Аралас санды жай бөлшекке айналдырамыз."
            },
            {
                content: "$\\frac{14}{3} \\cdot \\left(-\\frac{3}{14}\\right) = \\frac{14 \\cdot (-3)}{3 \\cdot 14}$",
                explanation: "Көбейту ережесін қолданамыз."
            },
            {
                content: "$\\frac{-42}{42} = -1$",
                explanation: "Қысқартып, нәтижені табамыз."
            }
        ],
        answer: "$-1$"
    },
    {
        number: 8,
        statement: "$5\\frac{1}{7} : 2\\frac{2}{35}$",
        given: "$5\\frac{1}{7} : 2\\frac{2}{35}$",
        steps: [
            {
                content: "$5\\frac{1}{7} = \\frac{36}{7}, \\quad 2\\frac{2}{35} = \\frac{72}{35}$",
                explanation: "Аралас сандарды жай бөлшектерге айналдырамыз."
            },
            {
                content: "$\\frac{36}{7} : \\frac{72}{35} = \\frac{36}{7} \\cdot \\frac{35}{72}$",
                explanation: "Бөлу ережесі: екінші бөлшекті кері көбейтеміз."
            },
            {
                content: "$\\frac{36 \\cdot 35}{7 \\cdot 72} = \\frac{5}{2}$",
                explanation: "Қысқарту арқылы нәтижені табамыз."
            }
        ],
        answer: "$\\frac{5}{2}$"
    },
    {
        number: 9,
        statement: "$-3\\frac{8}{9} \\cdot \\left(-2\\frac{1}{7}\\right)$",
        given: "$-3\\frac{8}{9} \\cdot \\left(-2\\frac{1}{7}\\right)$",
        steps: [
            {
                content: "$-3\\frac{8}{9} = -\\frac{35}{9}, \\quad -2\\frac{1}{7} = -\\frac{15}{7}$",
                explanation: "Аралас сандарды жай бөлшектерге айналдырамыз."
            },
            {
                content: "$-\\frac{35}{9} \\cdot \\left(-\\frac{15}{7}\\right) = \\frac{35 \\cdot 15}{9 \\cdot 7}$",
                explanation: "Екі минус көбейгенде плюс болады, көбейту ережесін қолданамыз."
            },
            {
                content: "$\\frac{525}{63} = \\frac{25}{3} = 8\\frac{1}{3}$",
                explanation: "Қысқартып, аралас сан түрінде жазамыз."
            }
        ],
        answer: "$\\frac{25}{3}$"
    },
    {
        number: 10,
        statement: "$1\\frac{1}{7} \\cdot 0{,}25$",
        given: "$1\\frac{1}{7} \\cdot 0{,}25$",
        steps: [
            {
                content: "$1\\frac{1}{7} = \\frac{8}{7}, \\quad 0{,}25 = \\frac{1}{4}$",
                explanation: "Аралас санды және ондық санды жай бөлшекке айналдырамыз."
            },
            {
                content: "$\\frac{8}{7} \\cdot \\frac{1}{4} = \\frac{8 \\cdot 1}{7 \\cdot 4}$",
                explanation: "Көбейту ережесін қолданамыз."
            },
            {
                content: "$\\frac{8}{28} = \\frac{2}{7}$",
                explanation: "Қысқартып, нәтижені табамыз."
            }
        ],
        answer: "$\\frac{2}{7}$"
    },
    {
        number: 11,
        statement: "$8\\frac{1}{6} \\cdot \\left(-7\\frac{1}{5}\\right)$",
        given: "$8\\frac{1}{6} \\cdot \\left(-7\\frac{1}{5}\\right)$",
        steps: [
            {
                content: "$8\\frac{1}{6} = \\frac{49}{6}, \\quad -7\\frac{1}{5} = -\\frac{36}{5}$",
                explanation: "Аралас сандарды жай бөлшектерге айналдырамыз."
            },
            {
                content: "$\\frac{49}{6} \\cdot \\left(-\\frac{36}{5}\\right) = \\frac{49 \\cdot (-36)}{6 \\cdot 5}$",
                explanation: "Көбейту ережесін қолданамыз."
            },
            {
                content: "$\\frac{-1764}{30} = \\frac{-294}{5} = -58\\frac{4}{5}$",
                explanation: "Қысқартып, аралас сан түрінде жазамыз."
            }
        ],
        answer: "$-\\frac{294}{5}$"
    },
    {
        number: 12,
        statement: "$9{,}5 : 3\\frac{1}{3}$",
        given: "$9{,}5 : 3\\frac{1}{3}$",
        steps: [
            {
                content: "$9{,}5 = \\frac{19}{2}, \\quad 3\\frac{1}{3} = \\frac{10}{3}$",
                explanation: "Ондық және аралас сандарды жай бөлшектерге айналдырамыз."
            },
            {
                content: "$\\frac{19}{2} : \\frac{10}{3} = \\frac{19}{2} \\cdot \\frac{3}{10}$",
                explanation: "Бөлу ережесі: екінші бөлшекті кері көбейтеміз."
            },
            {
                content: "$\\frac{57}{20} = 2\\frac{17}{20}$",
                explanation: "Нәтижені аралас сан түрінде жазамыз."
            }
        ],
        answer: "$\\frac{57}{20}$"
    },
    {
        number: 13,
        statement: "$\\left(-6\\frac{7}{8}\\right) \\cdot \\left(-2\\frac{6}{11}\\right)$",
        given: "$\\left(-6\\frac{7}{8}\\right) \\cdot \\left(-2\\frac{6}{11}\\right)$",
        steps: [
            {
                content: "$-6\\frac{7}{8} = -\\frac{55}{8}, \\quad -2\\frac{6}{11} = -\\frac{28}{11}$",
                explanation: "Аралас сандарды жай бөлшектерге айналдырамыз."
            },
            {
                content: "$-\\frac{55}{8} \\cdot \\left(-\\frac{28}{11}\\right) = \\frac{55 \\cdot 28}{8 \\cdot 11}$",
                explanation: "Екі минус көбейгенде плюс болады, көбейту ережесін қолданамыз."
            },
            {
                content: "$\\frac{1540}{88} = \\frac{35}{2} = 17\\frac{1}{2}$",
                explanation: "Қысқартып, аралас сан түрінде жазамыз."
            }
        ],
        answer: "$\\frac{35}{2}$"
    },
    {
        number: 14,
        statement: "$-\\frac{2}{9} : \\frac{4}{27}$",
        given: "$-\\frac{2}{9} : \\frac{4}{27}$",
        steps: [
            {
                content: "$-\\frac{2}{9} : \\frac{4}{27} = -\\frac{2}{9} \\cdot \\frac{27}{4}$",
                explanation: "Бөлу ережесі: екінші бөлшекті кері көбейтеміз."
            },
            {
                content: "$\\frac{-54}{36}$",
                explanation: "Алым мен бөлімді көбейтеміз."
            },
            {
                content: "$\\frac{-54}{36} = -\\frac{3}{2}$",
                explanation: "Қысқартып, нәтижені табамыз."
            }
        ],
        answer: "$-\\frac{3}{2}$"
    },
    {
        number: 15,
        statement: "$10\\frac{2}{7} \\cdot 2\\frac{11}{12}$",
        given: "$10\\frac{2}{7} \\cdot 2\\frac{11}{12}$",
        steps: [
            {
                content: "$10\\frac{2}{7} = \\frac{72}{7}, \\quad 2\\frac{11}{12} = \\frac{35}{12}$",
                explanation: "Аралас сандарды жай бөлшектерге айналдырамыз."
            },
            {
                content: "$\\frac{72}{7} \\cdot \\frac{35}{12}$",
                explanation: "Көбейту ережесін қолданамыз: алымдарды бірге, бөлімдерді бірге көбейтеміз."
            },
            {
                content: "$\\text{Қысқартамыз: } 72:12=6, \\quad 35:7=5, \\quad 6 \\cdot 5 = 30$",
                explanation: "Қысқартуды қолданып, нәтижені табамыз."
            }
        ],
        answer: "$30$"
    },

    {
        "number": 16,
        "statement": "$-\\frac{9}{11} : \\left(-\\frac{3}{22}\\right)$",
        "given": "$-\\frac{9}{11} : \\left(-\\frac{3}{22}\\right)$",
        "steps": [
            {
                "content": "$-\\frac{9}{11} \\div \\left(-\\frac{3}{22}\\right)$",
                "explanation": "Бөлу амалы бар, сондықтан екінші бөлшекті кері аударамыз."
            },
            {
                "content": "$-\\frac{9}{11} \\cdot \\left(-\\frac{22}{3}\\right)$",
                "explanation": "Бөлу ережесі бойынша $a : b = a \\cdot \\frac{1}{b}$."
            },
            {
                "content": "$\\frac{9}{11} \\cdot \\frac{22}{3}$",
                "explanation": "Теріс таңбалар бір-бірін жойып, оң болады."
            },
            {
                "content": "$\\frac{9}{3} \\cdot \\frac{22}{11} = 3 \\cdot 2$",
                "explanation": "Алым мен бөлімді қысқартамыз."
            },
            {
                "content": "$3 \\cdot 2 = 6$",
                "explanation": "Көбейту амалын орындаймыз."
            }
        ],
        "answer": "$6$"
    },
    
    
        {
            "number": 17,
            "statement": "$5\\frac{5}{8} \\cdot 7\\frac{7}{15}$",
            "given": "$5\\frac{5}{8} \\cdot 7\\frac{7}{15}$",
            "steps": [
                {
                    "content": "$5\\frac{5}{8} = \\frac{45}{8}, \\quad 7\\frac{7}{15} = \\frac{112}{15}$",
                    "explanation": "Аралас сандарды жай бөлшекке айналдырамыз."
                },
                {
                    "content": "$\\frac{45}{8} \\cdot \\frac{112}{15}$",
                    "explanation": "Көбейту ережесін қолданамыз."
                },
                {
                    "content": "$45:15=3, \\quad 112:8=14, \\quad 3 \\cdot 14 = 42$",
                    "explanation": "Алым мен бөлімді қысқартып, нәтижені табамыз."
                }
            ],
            "answer": "$42$"
        },
        {
            "number": 18,
            "statement": "$-\\frac{9}{25} : \\left(-\\frac{4}{45}\\right)$",
            "given": "$-\\frac{9}{25} : \\left(-\\frac{4}{45}\\right)$",
            "steps": [
                {
                    "content": "$-\\frac{9}{25} \\div -\\frac{4}{45}$",
                    "explanation": "Бөлу амалы бар, екінші бөлшекті кері аударамыз."
                },
                {
                    "content": "$-\\frac{9}{25} \\cdot -\\frac{45}{4}$",
                    "explanation": "Бөлу ережесі бойынша $a : b = a \\cdot \\frac{1}{b}$."
                },
                {
                    "content": "$\\frac{9}{25} \\cdot \\frac{45}{4}$",
                    "explanation": "Теріс таңбалар бір-бірін жойып, оң болады."
                },
                {
                    "content": "$9 \\cdot 45 = 405, \\quad 25 \\cdot 4 = 100, \\quad \\frac{405}{100} = 4.05$",
                    "explanation": "Алым мен бөлімді көбейтеміз, бөлшекті ондыққа айналдырамыз."
                }
            ],
            "answer": "$4.05$"
        },
        {
            "number": 19,
            "statement": "$-7\\frac{5}{9} \\cdot 1\\frac{10}{17}$",
            "given": "$-7\\frac{5}{9} \\cdot 1\\frac{10}{17}$",
            "steps": [
                {
                    "content": "$-7\\frac{5}{9} = -\\frac{68}{9}, \\quad 1\\frac{10}{17} = \\frac{27}{17}$",
                    "explanation": "Аралас сандарды жай бөлшекке айналдырамыз."
                },
                {
                    "content": "$-\\frac{68}{9} \\cdot \\frac{27}{17}$",
                    "explanation": "Көбейту ережесін қолданамыз."
                },
                {
                    "content": "$68:17=4, \\quad 27:9=3, \\quad -4 \\cdot 3 = -12$",
                    "explanation": "Қысқартып, нәтижені табамыз."
                }
            ],
            "answer": "$-12$"
        },
        {
            "number": 20,
            "statement": "$-\\frac{3}{7} \\cdot \\frac{9}{14}$",
            "given": "$-\\frac{3}{7} \\cdot \\frac{9}{14}$",
            "steps": [
                {
                    "content": "$-\\frac{3}{7} \\cdot \\frac{9}{14}$",
                    "explanation": "Алымдарды бірге, бөлімдерді бірге көбейтеміз."
                },
                {
                    "content": "$-\\frac{27}{98}$",
                    "explanation": "Нәтижені қысқартуға келмейді."
                }
            ],
            "answer": "$-\\frac{27}{98}$"
        },
        {
            "number": 21,
            "statement": "$3\\frac{2}{3} \\cdot \\left(-1\\frac{1}{11}\\right)$",
            "given": "$3\\frac{2}{3} \\cdot \\left(-1\\frac{1}{11}\\right)$",
            "steps": [
                {
                    "content": "$3\\frac{2}{3} = \\frac{11}{3}, \\quad -1\\frac{1}{11} = -\\frac{12}{11}$",
                    "explanation": "Аралас сандарды жай бөлшекке айналдырамыз."
                },
                {
                    "content": "$\\frac{11}{3} \\cdot -\\frac{12}{11}$",
                    "explanation": "Көбейту ережесін қолданамыз."
                },
                {
                    "content": "$11$-дер қысқарады, $\\frac{-12}{3} = -4$",
                    "explanation": "Алым мен бөлімді қысқартып, нәтижені табамыз."
                }
            ],
            "answer": "$-4$"
        },
        {
            "number": 22,
            "statement": "$-\\frac{5}{17} : \\left(-\\frac{25}{34}\\right)$",
            "given": "$-\\frac{5}{17} : \\left(-\\frac{25}{34}\\right)$",
            "steps": [
                {
                    "content": "$-\\frac{5}{17} \\div -\\frac{25}{34}$",
                    "explanation": "Бөлу амалы бар, екінші бөлшекті кері аударамыз."
                },
                {
                    "content": "$-\\frac{5}{17} \\cdot -\\frac{34}{25}$",
                    "explanation": "Бөлу ережесі: $a : b = a \\cdot \\frac{1}{b}$."
                },
                {
                    "content": "Теріс таңбалар бір-бірін жойып, $\\frac{5}{17} \\cdot \\frac{34}{25}$",
                    "explanation": "Таңбаларды қысқартамыз."
                },
                {
                    "content": "$5$ пен $25$ қысқарады ($1$ және $5$), $34$ пен $17$ қысқарады ($2$ және $1$), нәтижесі $\\frac{2}{5}$",
                    "explanation": "Алым мен бөлімді қысқартып, бөлшекті табамыз."
                }
            ],
            "answer": "$\\frac{2}{5}$"
        },
        {
            "number": 23,
            "statement": "$1\\frac{3}{7} \\cdot 2\\frac{4}{5}$",
            "given": "$1\\frac{3}{7} \\cdot 2\\frac{4}{5}$",
            "steps": [
                {
                    "content": "$1\\frac{3}{7} = \\frac{10}{7}, \\quad 2\\frac{4}{5} = \\frac{14}{5}$",
                    "explanation": "Аралас сандарды жай бөлшекке айналдырамыз."
                },
                {
                    "content": "$\\frac{10}{7} \\cdot \\frac{14}{5}$",
                    "explanation": "Көбейту ережесін қолданамыз."
                },
                {
                    "content": "$10$ пен $5$ қысқарады ($2$ және $1$), $14$ пен $7$ қысқарады ($2$ және $1$), нәтижесі $4$",
                    "explanation": "Алым мен бөлімді қысқартып, нәтижені табамыз."
                }
            ],
            "answer": "$4$"
        },
        {
            "number": 24,
            "statement": "$-\\frac{39}{64} \\cdot \\frac{13}{32}$",
            "given": "$-\\frac{39}{64} \\cdot \\frac{13}{32}$",
            "steps": [
                {
                    "content": "$-\\frac{39}{64} \\cdot \\frac{13}{32}$",
                    "explanation": "Алымдарды бірге, бөлімдерді бірге көбейтеміз."
                },
                {
                    "content": "$-\\frac{507}{2048}$",
                    "explanation": "Көбейту нәтижесін жазамыз."
                }
            ],
            "answer": "$-\\frac{507}{2048}$"
        }
    

];

const TOPICS_DATA = {
    1: {
        id: 1,
        title: "Рационал сандарды көбейту және бөлу",
        problems: PROBLEMS_DATA
    },
    2: {
        id: 2,
        title: "Периодты бөлшектерге амалдар қолдану",
        problems: []
    }
};