7 – Négociation de contenu
Expliquez le principe de la négociation de contenu http entre client et serveur (Exemple, illustrations...).

La négociation de contenu permet de définir, entre le client et le serveur, le format le plus adapté pour communiquer entre eux en fonction des capacités et préférences de chaque partie. 
Ceci est organisé selon de 2 mécanismes :
	1. Négociation de contenu basée sur l'en-tête "Accept"
	2. Négociation de contenu basée sur l'en-tête"Content-type"
	
1. l'en-tête "Accept" :
Ex d'en-tête "Accept" : Accept-Language : fr
Le client envoie une requête HTTP avec l'en-tête"Accept-Language' : fr pour spécifier le type de contenu qu'il peut accepter en réponse. Ici donc un contenu en français. 

1. l'en-tête "Content-type" :
Permet au client de spécifier le format du contenu qu'il envoie au serveur.
Ex d'en-tête "Content-type" :image/jpeg
Ce type de contenu est utilisé pour envoyer des iamges au format JPEG.