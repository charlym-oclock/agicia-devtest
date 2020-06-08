##### Journal personnel

Journal de bord du **test technique** de Charly

* __jeudi soir__
  
  * configuration de l'environnement de travail, installation Python 3 et Pip, installation du **code runner** pour VSCode

* __vendredi matin__
  
  * problemes a l'installation du projet. La source de l'erreur serait un **repertoire manquant**, malgre l'installation des dependances qui se passe sans soucis. Apres avoir questionne les collegues, et fait une rapide recherche sur _stackoverflow_, il semblerait que le soucis vienne bien de l'**installation des dependances**. Je decide donc de refaire celle-ci en utilisant _Yarn_ plutot que NPM. Le repertoire manquant est alors installe, et le build peut donc se faire.
  * recherche d'une fonction simple en _Python_ permettant de retourner des donnees en JSON. Apres quelques recherches, la fonction **json_dumps()** semble etre la bonne solution. J'effectue un simple _print_ , mais cela me retourne une _string_. J'utilise donc **json_dumps()** au sein d'une fonction que j'execute. Le script me retourne bien une liste d'objets avec les donnees saisies plus haut.
  * j'essaye de push mon travail en python sur une nouvelle branche, mais je n'ai pas les droits sur le repo. Sans reponse sur le Slack, je creer donc un nouveau repo sur mon compte Github.
  * recherches pour la creation d'une vue REST en python pour verifier l'affichage des mes donnees JSON. Plusieurs resultat recommandent le framework _Flask_. Je confirme cela aupres de Sylvain.

* __vendredi apres-midi__
  
  * prise en main de _Flask_. Je vais voir la documentation sur le site afin de me permettre de recuperer les donnees. Je me rend compte que la creation du fichier _data.py_ n'était pas indispensable, et qu'il est plus simple d'avoir mes donnees directement dans le fichier ou Flask sera importé. Je récupere bien mes _données en JSON_ dans mon navigateur au endpoint indiqué dans l'application Flask. La **vue REST fonctionne correctement**.
  * Apres avoir étudié la structure _AngularJS_ au sein du projet, je décide de créer un **nouveau component**. Apres avoir minutieusement vérifié tous les fichiers, aucune de mes modifications n'est prise en compte. J'essaye donc de refaire un build en utilisant _webpack_, mais celui-ci a de nouveau disparu. Je fais un point avec l'équipe, nous faisons **plusieurs déinstallations/réinstallations** de webpack, **sans succes**. Je recherche les _issues sur Github_ afin de trouver d'ou provient mon soucis, sans piste concrete. Sur **conseil de Nicolas**, je joue la carte du **changement de VM** et utilise une VM préconfigurée en _Debian_. Je passe donc la fin d'apres-midi a **reconfigurer la VM** pour un environnement fonctionnel _(NPM, Python, Pip, Git, clés SSH pour Github)_.
  * Une fois la réinstallation complétée, je clone a nouveau le projet et récupere le code écrit dans la matinée. Apres une _réinstallation de Flask_, je lance l'application en utilisant cette fois-ci un **environnement virtuel _venv_**. Apres avoir réglé un probleme d'espaces m'empechant de lancer l'application Flask, celle-ci fonctionne a nouveau, et webpack est toujours présent dans le dossier .bin/ . **Le travail va pouvoir reprendre**. Mais plus tard car il est deja 18h20.

* __samedi apres-midi__
  
  * aujourd'hui je commence par refaire des vérifications, afin d'etre sur que tout fonctionne dans ce **nouvel environnement**. Le _serveur HTTP_ se lance correctement, et les builds se font sans probleme avec __Webpack_. Mon _API Python_ fonctionne toujours avec Flask, et je récupere bien mes donnees en JSON a l'adresse **127.0.0.1:5000**. Je décide donc de me remettre a la ou je m'était arreté hier, faire une vue en _AngularJS_. Je vérifie la structure du dossier avec les 2 vues actuelles (home et todolist). Je vérifie également la version d'AngularJS via le package.json, et confirme que nous sommes en **version 1.7.8**.
  * Afin de comprendre comment réagit AngularJS, je décide d'apporter un petit changement a une vue déja créée. J'ajoute une **ligne test** dans la Todolist. Je relance le build via Webpack. Mais **pas de changement** sur le navigateur, y compris apres plusieurs rafraichissement de la page. Pensant a un **soucis de cache**, je vide celui-ci et rafraichi une nouvelle fois, sans succes. Je stoppe le serveur, et refait un nouveau build avec webpack. Le build se fait sans probleme, mais mauvaise surprise, la ligne ajoutée **n'apparait toujours pas** dans le navigateur ! Je décide d'aller plus loin et de **créer un nouveau composant**, sur le modele des composants d'origine, que j'appelle *oa_users*. J'ajoute la route _/#!/users_, ainsi que le require dans le fichier _main.js_. Je stoppe le serveur, supprime le dossier _dist/_, et relance un nouveau build. Je relance le serveur, mais **toujours rien n'apparait**, ni la ligne supplémentaire dans le todolist, ni le nouveau composant a l'adresse _/#!/users_. Apres plus d'une heure de lecture sur internet (_W3schools, stackoverflow, documentation d'angularJS_) je ne trouve aucune réponse concrete. J'arrete pour aujourd'hui, mon cerveau étouffe, **de nouvelles idées viendront d'elles-meme**.

* __dimanche apres-midi__
  
  * je démarre ma VM, et **surprise**, un message d'erreur de mon navigateur. Celui-ci se recharge, et les **modifications** apportées hier dans le build **apparaissent enfin**... Le cache n'a pas du se vider correctement, et c'est pour ca que le contenu n'était pas mis a jour dans le navigateur. C'est pourtant la premiere chose qui m'est venu a l'esprit hier. Fort de cette nouvelle avancée je vais donc commencer a préparer une vue en "dur" afin de faire un peu de CSS plus tard. 
  * Je fais un test pour **rajouter des items** pour la _homepage_, cela fonctionne désormais. J'ai créé un composant qui affiche une liste d'utilisateurs dans un tableau. La liste étant premierement **codée en dur** dans le HTML, je décide de faire passer les informations dans le fichier _TypeScript_ a l'instar de la homepage. Mes **informations sont bien récupérées et affichées**.
  * Je débute ma recheche pour réaliser une _requete HTTP_. Les docs que je trouve ne correspondent par au modele que j'ai sur ce projet (des composants _HTML/TypeScript_). Un _tutoriel Youtube_ m'apprend a **trier mes données**, et également a mettre un **champs de recherche** qui peut fonctionner avec le nom. On m'a demande d'effectuer la recherche en Python, mais j'utilise tout de meme cette fonction afin de mettre un CSS en place dans la soirée. Je continue ma recherche pour la requete HTTP. J'imagine que _Axios_ sera utilisé, mais je ne trouve aucune documentation pertinente pour le moment. On verra ca tout a l'heure !

* __dimanche soir__
  
  * on va terminer le weekend avec un peu de CSS tranquille ;) L'age s'affiche désormais en vers/rouge en fonction de la valeur, et les résultats sont triés en fonction de l'age.

* __lundi matin__
  
  * on commence la journée en douceur en ajoutant un peu de style sur la _navbar_. Je ne souhaite pas passer trop de temps sur le _CSS_ pour le moment car il me reste tout le travail sur la requete a faire. J'ai trouve beaucoup de docs sur le _site d'angularjs_, mais il me manque une infos pour l'adapter a ce modele de controller. **Sylvain m'envoie la réponse** que je cherchais, ce qui débloque mon affaire.
  * OUPS, **probleme de CORS**, ca faisait longtemps tient ! Je rajoute un header _ACAO_ dans ma requete au sein du fichier typescript, et je cherche du coté de Python. Une solution simple semble d'etre utiliser _flask-cors_, ce qui est parfait car c'est justement Flask que j'utilise. **Ca fonctionne**, ma requete est bien effectué, je récupere mes données. Maintenant je cherche comment les transmettre a ma vue. J'imagine qu'il faut utiliser le _$scope_ que je vois depuis 3 jours. Je vois donc qu'il faut bien utiliser $scope dans ma requete du controller, mais **PAS** dans la vue.
  * **mes données sont maintenant récupérées depuis l'API Python, affichées dans mon tableau, et triées en fonction de l'age**.

  * je fais maintenant une petite pause CSS, et met en page ma liste de résultats. Je n'ai pas la journée donc je fais quelque chose de rapide. Mais je me laisse un peu entrainer par la découverte de AngularJs, et j'implémente des directives _ng-click_ pour pouvoir trier la liste des utilisateurs par noms/age/sex. Super cool. Mais ce n'était pas demandé donc je supprime ce code en conservant cette fonction dans un coin de mon cerveau.
  * Je vais désormais me pencher sur la **recherche Python** pour chercher un utilisateur par son nom, et enlever le simulacre que j'avais ajouté en _angularJS_.
  * apres moult recherches dans la documentation de Flask et Stackoverflow, je parviens a faire créer des routes uniques pour chaque utilisateurs présents dans ma liste sous la forme _/users/<name>_. Ce n'était pas facile, et ce n'est toujours pas parfait. Maintenant que j'ai compris la méthode, je vais **implémenter des IDs uniques** afin d'**éviter les problemes de doublon**.

* __lundi apres-midi__
  * on va commencer par un petit peu de CSS de digestion. On va étudier la question des elements actifs de la navbar pour y appliquer un style particulier.