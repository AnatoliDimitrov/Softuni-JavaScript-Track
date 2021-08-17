function solve(httpRequest) {
    ;
    validateMethod(httpRequest);
    validateURI(httpRequest);
    validateVersion(httpRequest);
    validateMessage(httpRequest);

    return httpRequest;
    
    function validateMethod(http) {
        let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
        let method = http.method;

        if (method === undefined || !methods.includes(method)) {
            throw new Error('Invalid request header: Invalid Method');
        }
    }

    function validateURI(http) {
        let uri = http.uri;
        let uriRegex = /^[\w.@&*]+$/;
        let isValid = false;
        if (uri === '*' || uriRegex.test(uri)) {
            isValid = true;
        }

        if (uri === undefined || !isValid) {
            throw new Error('Invalid request header: Invalid URI');
        }
    }

    function validateVersion(http) {
        let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
        let version = http.version;

        if (version === undefined || !versions.includes(version)) {
            throw new Error('Invalid request header: Invalid Version');
        }
    }
    
    function validateMessage(http) {
        let message = http.message;
        let messageRegex = /^[^<>\\&'"]+$/;
        let isValid = messageRegex.test(message) || message === '';

        if (message === undefined || !isValid) {
            throw new Error('Invalid request header: Invalid Message');
        }
    }
}
    console.log(solve({
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: '<script>alert("xss vulnerable")</script>'
      }
                           
      ));