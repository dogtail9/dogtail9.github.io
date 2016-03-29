(function(window, document) {
    document.body.style.display = 'none';
    var client = new XMLHttpRequest();
    
    var posts = document.createElement('div');
    
    var myPosts = GetPosts();
    
    for(var i = 0; i < myPosts.length; i++) {
        client.open("GET", 'posts/' + myPosts[i] + '.md', false);
        client.send();
        
        if (client.readyState == 4 && client.status == 200) {
            var newNode = document.createElement('xmp');
            newNode.innerHTML = client.responseText;
            posts.appendChild(newNode);
        }
    }
    
    var placeholder = document.getElementsByTagName('posts')[0];
    document.body.replaceChild(posts, placeholder);
    
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

function GetPosts() {
    var client = new XMLHttpRequest();
    client.open("GET", "posts.json", false);
    client.send();
    
     if (client.readyState == 4 && client.status == 200) {
       var myArr = JSON.parse(client.responseText);
     }
      
    return myArr.posts;
}
