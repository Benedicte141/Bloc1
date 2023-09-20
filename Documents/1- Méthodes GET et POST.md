1 - Méthodes GET et POST
Illustrez au travers d’un ou plusieurs exemples précis les différences entre les méthodes http GET et 
POST, mentionnez les URLs utilisées, les données échangées (requête)…

 
La méthode GET permet d'obtenir des informations par une requête au travers d'un navigateur. Elle implique une réponse.
Par exemple, elle permet au navigateur d'obtenir un document HTML, pour afficher la page web requise sur l'écran de l'internaute. 

Exemple de méthode GET :
Je lance une recherche dans le navigateur firefox avec les mots clés : bénédicte+GADY+femme+caen
URL: https://www.google.com/search?client=firefox-b-e&q=recherche+b%C3%A9n%C3%A9dicte+gady+femme+caen

Dans l'URL, je retrouve les mots clés de ma recherche => problème de sécurité des données.
La chaîne de requête est introduite par un « ? » (point d'interrogation).

J'obtiens dans les résultats de recherche du navigateur plusieurs pages WEB retournées.

exemple de requête méthode GET :
<form  method="get">
     Prénom: <input type="text" placeholder="Votre nom"><br/>
     <input type="submit" value="Envoyer">
</form>

============================================================================================================================================================================

Exemple de méthode POST :

La méthode POST :
Elle permet de transmettre des informations qui ne sont pas visibles dans l'URL. Elle permet également de mettre à jour un serveur.

Exemple :
Lors de l’achat d’un objet sur un site commerçant, le stock doit être diminué de un sur le serveur du site. 

On précise method=”post” dans la balise HTML pour l’utiliser. 
exemple de requête méthode POST :

<form method="post" action="mapage.fr"> Création d’un formulaire utilisant la méthode POST. Les données seront envoyée à mapage.fr.
   <input type="text" name="nom"> Création d’un champ de saisie de texte, appelé « nom ».
   <input type="text" name="prénom"> Création d’un champ de saisie de texte, appelé « prénom ».
   <input type="submit" value="Envoyer"> Création de l’envoi.
</form> Fermeture de la balise du formulaire. 


==============================================================================================================================================================================
sources :
https://fr.w3docs.com/apprendre-html/methodes-http.html
https://www.maxicours.com/se/cours/la-transmission-d-un-formulaire-avec-get-ou-post/

![image](https://github.com/Benedicte141/Bloc1/assets/143993873/24cec67f-9350-431f-9c7b-91f987b820b7)

