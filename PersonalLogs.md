## Journal personel

Journal de bord du **test technique** de Charly

* __jeudi soir__
  * configuration de l'environnement de travail, installation Python 3 et Pip, installation du **code runner** pour VSCode

* __vendredi matin__
  * problemes a l'installation du projet. La source de l'erreur serait un **repertoire manquant**, malgre l'installation des dependances qui se passe sans soucis. Apres avoir questionne les collegues, et fait une rapide recherche sur _stackoverflow_, il semblerait que le soucis vienne bien de l'**installation des dependances**. Je decide donc de refaire celle-ci en utilisant _Yarn_ plutot que NPM. Le repertoire manquant est alors installe, et le build peut donc se faire.
  * recherche d'une fonction simple en _Python_ permettant de retourner des donnees en JSON. Apres quelques recherches, la fonction **json_dumps()** semble etre la bonne solution. J'effectue un simple _print_ , mais cela me retourne une _string_. J'utilise donc **json_dumps()** au sein d'une fonction que j'execute. Le script me retourne bien une liste d'objets avec les donnees saisies plus haut.
  * 