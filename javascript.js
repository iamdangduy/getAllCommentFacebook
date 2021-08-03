var idPost = '4411810592236487'
var accessToken = 'EAAAAZAw4FxQIBAClubrQSTjmI1okDPP7ceWJYv2FrjzTeOQALRvDnhqZAeZBq0vDjgbbV7ADobzjY2kEIyelMVGdTZAXiy6ZCAuBJqLAqOYDwFZCQLekD9mQ1GW29Un28P84XLQ2DDzaDiBiOqOxyBSdYt4WZCwA81lCbmBOikGsZBjZA2q9qaRNzNnZCFKvzREy4ZD'
var url = 'https://graph.facebook.com/'+ idPost +'/comments?fields=message&access_token=' + accessToken;

checkCode = (url) => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((post) => {
      var comment = post.data;
      comment.forEach((element) => {
        if (element.message !== '') {
          if (element.message.includes('LOL')) {
            let start = element.message.indexOf('LOL');
            let codeLOL = element.message.substr(start, 13);
              console.log(codeLOL);
          }
        }
      });
      checkCode(post.paging.next);
    });
}

checkCode(url);
