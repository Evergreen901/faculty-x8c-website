export const addEventListeners = (scrollCb, keyCb) => {
    document.body.addEventListener('wheel', scrollCb);
    document.body.addEventListener('keydown', keyCb);
};

export const removeEventListeners = (scrollCb, keyCb) => {
    document.body.removeEventListener('wheel', scrollCb);
    document.body.removeEventListener('keydown', keyCb);
};

export const handleElementScroll = (e) => {
    e.preventDefault();
    const position = Math.round(e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight);
    if (position === 0) {
        document.body.classList.remove('prevent-scrolling');
    }
    const top = e.target.scrollHeight - e.target.clientHeight;
    if (position === top) {
        document.body.classList.remove('prevent-scrolling');
    }
};
