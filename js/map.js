if (window.screen.width > 1280 ) {
    let contactsMap = document.getElementById('contacts-map');
    let contactsMapIframe = contactsMap.querySelector('iframe');

    function contactMapWheelListener(e) {
        if (e.ctrlKey) {
            e.preventDefault();
            contactsMapIframe.style.pointerEvents = 'auto';
        }
    }

    contactsMap.addEventListener('mouseenter', function (e) {
        if (e.target === contactsMap) {
            contactsMap.addEventListener('mousewheel', contactMapWheelListener, {passive: false});
        }
    })

    contactsMap.addEventListener('mouseleave', function (e) {
        contactsMapIframe.style.pointerEvents = 'none';
        contactsMap.removeEventListener('mousewheel', contactMapWheelListener);
    })
}else if(window.screen.width < 1279 ) {
    let contactsMap = document.getElementById('contacts-map');
    let contactsMapIframe = contactsMap.querySelector('iframe');
    contactsMapIframe.style.pointerEvents = 'auto';
}