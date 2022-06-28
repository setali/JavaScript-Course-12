function setCookie (name, value, time, path = '/') {
  var date = new Date()
  date.setSeconds(date.getSeconds() + time)

  document.cookie =
    name + '=' + value + ';expires=' + date.toUTCString() + ';path=' + path
}

function getCookies () {
  var cookie = document.cookie

  var arr = cookie.split(';')

  var result = {}

  arr.forEach(function (el) {
    var element = el.trim().split('=')
    result[element[0]] = element[1]
  })

  return result
}

function getCookie (name) {
  return getCookies()[name]
}

function removeCookie (name) {
  setCookie(name, '', 0)
}

// removeCookie('name')
// setCookie('token', 'asdafsrgerweffaasfvs', 20 * 60)
