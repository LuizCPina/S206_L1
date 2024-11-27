por favor installe o newman antes de testar os testes:
npm install -g newman

seu reporter htmlextra tambem:
npm install newman-reporter-htmlextra

caso deseje gerar um html:
newman run Prova_S206.postman_collection.json -r htmlextra

caso deseje apenas um report no cmd:
newman run Prova_S206.postman_collection.json