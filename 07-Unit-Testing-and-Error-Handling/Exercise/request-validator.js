function requestValidator(request) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (request.method === undefined || !methods.includes(request.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (request.uri === undefined || !/^([a-zA-Z0-9\.]+|\*)$/gm.test(request.uri) || request.uri.trim().length === 0) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (request.version === undefined || !versions.includes(request.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (request.message === undefined || !/^[^<>\\&'"]*$/gm.test(request.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }
    
    return request;
}