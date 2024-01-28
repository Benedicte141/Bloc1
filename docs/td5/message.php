url = http://html.net/message.php?message=toto

 

<php>
  if $_GET["message"]=""
  then echo "<h1>message " . message par défaut . "</h1>";
  else echo "<h1>message " . $_GET["message"] . "</h1>";

 

<!php>