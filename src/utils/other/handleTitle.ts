
function handleTitle(title: String) {
    if(!title)
        return;
    if(title.length < 20)
        return title;
    return title.slice(0, 20) + "...";
}

export default handleTitle;
