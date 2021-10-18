var lang = localStorage.lang = 'fr'
function translate(id, text) {
  var elem = document.getElementById(id)
  elem && text[lang] && (elem.textContent = text[lang])
}

translate("welcome", {
  "fr": "Bienvenue à Zone01 Rouen !"
})
translate("zone-01", {
  "fr": "Zone01, c'est notre plateforme collaborative d'apprentissage du code."
})
translate("zone-01-process", {
  "fr": "Nouveau ici ? Voilà ce que tu dois faire :"
})
translate("instruction-1", {
  "fr": "Crée un compte et connecte-toi sur la plateforme."
})
translate("instruction-2", {
  "fr": "Complète les tests cognitifs en ligne."
})
translate("instruction-3", {
  "fr": "Patiente pour savoir si tu es séléctionné.e pour l'étape suivante."
})
translate("account", {
  "fr": "C'est tout ! Si tu as déja créé un compte, connecte-toi pour compléter ta candidature ou suivre son progrès."
})
translate("about-us", {
  "fr": "Tu veux en savoir plus sur nous ?"
})
translate("contact", {
  "fr": "Nous contacter"
})
translate("sign-in", {
  "fr": "Se connecter"
})
translate("or", {
  "fr": "ou"
})
translate("join", {
  "fr": "Créer un compte"
})
