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
    console.warn('Something went wrong', e); //eslint-disable-line no-console
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
  notification.querySelector('img').src = getPictureUri() || notification.querySelector('img').src;
  notification.querySelector('img').alt = getPictureAlt() || 'logo-team';
  notification.querySelector('h2').innerHTML = 'The Score';
  setTimeout(() => renderNotification(notification), 5000);
  supportsNotification() ? checkNotificationPermission(notification) : null;
}

function getPictureUri() {
  const checked = document.querySelector('input[name="team"]:checked + img');
  return checked ? checked.src : null;
}

function getPictureAlt() {
  const checked = document.querySelector('input[name="team"]:checked + img');
  return checked ? checked.alt : null;
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

function checkNotificationPermission(data) {
  let score = data.querySelector('p').innerHTML;
  const team = data.querySelector('img').alt;
  const title = `${team} scored!`;
  score = score.replace(/\<em>|<\/em>/g, '');

  const options = {
    icon: `/assets/${team}.png`,
    body: score,
    id: 'nhl-score-notify'
  };

  if (Notification.permission === 'granted') {
    sendNotification(title, options);
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission(permission =>
      permission === 'granted'
      ? sendNotification(title, options)
      : false
    );
  }
}

function sendNotification(title, options) {
  setTimeout(
    () => (
      new Notification(title, options),
      console.log(`%c ${title}`, 'font-size: 2.4rem'), //eslint-disable-line no-console
      console.log(`%c ${options.body}`, 'font-size: 1.6rem') //eslint-disable-line no-console
    ),
    5000
  );
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

function supportsNotification() {
  if ('Notification' in window) {
    return true;
	}
	return false;
}

form.addEventListener('submit', handleSubmit, false);
