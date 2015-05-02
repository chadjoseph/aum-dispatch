import document from 'aum-document';

export default function (name, data) {
  var event = document.createEvent('CustomEvent');

  event.initCustomEvent(name, false, false, data);

  window.dispatchEvent(event);
}

