var lang = localStorage.lang = 'fr'
function translate(id, text) {
  var elem = document.getElementById(id)
  elem && text[lang] && (elem.textContent = text[lang])
}

translate("welcome", {
  "fr": "Bienvenue à 01 !"
})
translate("zone-01", {
  "fr": "Zone 01 is our collaborative coding education platform"
})
translate("zone-01-process", {
  "fr": "New here? Here’s what you need to do:"
})
translate("instruction-1", {
  "fr": "Create an account, and log into the platform."
})
translate("instruction-2", {
  "fr": "Complete the online cognitive test."
})
translate("instruction-3", {
  "fr": "Wait to find out whether you’ve made it to the next stage."
})
translate("account", {
  "fr": "That’s it! If you’ve already created an account, sign in to complete your application or check for updates."
})
translate("about-us", {
  "fr": "Want to know more about us ?"
})
translate("contact", {
  "fr": "Contact us"
})
translate("sign-in", {
  "fr": "se connecter"
})
translate("or", {
  "fr": "ou"
})
translate("join", {
  "fr": "create an account"
})
