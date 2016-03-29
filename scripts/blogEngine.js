(function(window, document) {
    document.body.style.display = 'none';
    
    var markdownElements = document.getElementsByTagName('xmp');
    
    var arr = [].slice.call(markdownElements);
    
    for (var i = 0; i < arr.length; i++) {
        document.body.replaceChild(convertMarkdownToHtml(arr[i]), arr[i]);
    }
    
    document.body.style.display = '';
})(window, document);

function convertMarkdownToHtml(element) {
    
    var markdown = element.textContent;
    
    var newNode = document.createElement('div');
    
    newNode.innerHTML = marked(markdown, {
            highlight: function(code) {
                return hljs.highlightAuto(code).value;
            }
        })

    //newNode.innerHTML = marked(markdown);
    return newNode;
}