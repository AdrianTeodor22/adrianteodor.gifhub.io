# Joc de ghicire a personalitatilor stiintifice

personalitati_stiintifice = [    {"nume": "Isaac Newton", "perioada": "secolul 17", "domeniu": "fizica, matematica"},    {"nume": "Albert Einstein", "perioada": "secolul 20", "domeniu": "fizica"},    {"nume": "Stephen Hawking", "perioada": "secolul 20", "domeniu": "astrofizica, cosmologie"},    {"nume": "Galileo Galilei", "perioada": "secolul 17", "domeniu": "astronomie, fizica"},    {"nume": "Marie Curie", "perioada": "secolul 19 si 20", "domeniu": "chimie, fizica, medicina"},    {"nume": "Nikola Tesla", "perioada": "secolul 19 si 20", "domeniu": "electrotehnica, fizica"}]

import random

def ghiceste_personalitatea(personalitati_stiintifice):
    personalitate = random.choice(personalitati_stiintifice)
    nume = personalitate["nume"]
    perioada = personalitate["perioada"]
    domeniu = personalitate["domeniu"]
    
    print("Informatii despre o personalitate stiintifica:")
    print("Perioada:", perioada)
    print("Domeniu de activitate:", domeniu)
    
    incercare = input("Cine credeti ca este aceasta personalitate stiintifica? ")
    if incercare.lower() == nume.lower():
        print("Felicitari! Ati ghicit!")
    else:
        print("Din pacate, raspunsul este incorect. Personalitatea stiintifica era", nume)
        
ghiceste_personalitatea(personalitati_stiintifice)