function goToVideo(){
    document.getElementsByClassName('video')[0].scrollIntoView({
        behavior: 'smooth'
    });
}

function goToChat(){
    document.getElementsByClassName('chat-spacy')[0].scrollIntoView({
        behavior: 'smooth'
    });
}