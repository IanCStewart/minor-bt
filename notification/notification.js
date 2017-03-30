const form = document.querySelector('form');

function handleSubmit(event) {
  if (supportsFetch()) {
    geDataFetch(form.action);
    event.preventDefault();
  } else if (supportsXHR()) {
    getDataXml(form.action, event);
    event.preventDefault();
  } else {
    return false;
  }
}

function geDataFetch(url) {
	fetch(url, {type:'text/html'})
    .then(data => data.text())
    .then(string => getHtml(string))
    .catch(err => renderNotificationError(err));
}

function getDataXml(url) {
  var xhr = new XMLHttpRequest();
  xhr.onerror = function(e) {
    console.warn('Something went wrong', e);
    return false;
  };
  xhr.onload = function() {
    if(this.statusText === 'OK') {
      getHtml(this.responseXML.body.outerHTML);
    } else {
      return renderNotificationError();
    }
  };
  xhr.open('GET', url);
  xhr.responseType = 'document';
  xhr.send();
}

function getHtml(data) {
  const dummy = document.createElement('div');
  dummy.innerHTML = data;
  const notification = dummy.querySelector('.notification');
  getPictureUri() ? notification.querySelector('img').src = getPictureUri() : null;
  notification.querySelector('h2').innerHTML = 'The Score';
  setTimeout(() => renderNotification(notification), 5000);
}

function getPictureUri() {
  const checked = document.querySelector('input[name="team"]:checked + img');
  return checked ? checked.src : null;
}

function renderNotification(html) {
  document.querySelector('.notify').innerHTML = html.outerHTML;
}

function renderNotificationError() {
  document.querySelector('.notify').innerHTML = `
    <section class="notification">
      <h1>Something went wrong!</h1>
      <p>please try again later</p>
    </section>
  `;
}

function supportsXHR() {
  if (!window.XMLHttpRequest)
    return false;

  return true;
}

function supportsFetch() {
	if ('fetch' in window) {
		return true;
	}
	return false;
}

form.addEventListener('submit', handleSubmit, false);
