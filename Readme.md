# Veridion Interview App

## Instructiuni de functionare:

1. Interfata inititala foloseste datele Veridion
2. Pentru schimbarea companiei, se poate folosi butonul "Change Company" din meniul din stanga , acesta are 2 functii :
   - Schimba compania curenta cu una din lista de companii
   - Adauga o noua companie in lista de companii si o seteaza ca fiind compania curenta
   - Datele sunt salvate intr-o baza de date externa sql
3. Atat sectiunea reviews cat si sectiunea company revenue contin date "mock" pentru a putea fi testate functionalitatile aplicatiei (Nu am reusit din pacate sa folosesc api-ul openAI pentru a lua date reale de pe internet, asa ca acesta genereaza date de test daca nu are in baza lui de date)
4. Prompt-urile de GPT se afla in folderul server/index.js
5. Site-ul este hostat pe heroku la adresa https://aws-app-cc977b323bb4.herokuapp.com/ (nu am reusit sa adaug node in AWS , partea de front am reusit sa o adaug prin AWS Amplify dar pentru partea de backend nu am reusit , asa ca am folosit un alt provider)
6. Butoanele settings si instructions nu au functionalitate , sunt folosite doar de design

### Observatii

1. Uneori request-ul de la openAI mai da rezultate proaste sau nu da rezultate , un refresh rezolva problema.
2. Logo-ul din sectiunea din dreapta ar trebuii sa fie dinamic depinzand de companie dar nici api-ul veridion nici api-ul openAI nu ofera un logo pentru companie
