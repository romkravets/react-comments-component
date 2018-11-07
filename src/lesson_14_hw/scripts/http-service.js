export class HTTPService {
    get(url, successCallBack, errorCallback) {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url);
        xhr.send();
        xhr.onreadystatechange = function() {
            if (xhr.readyState ===4) {
                if(xhr.status === 200) {
                    const parsedData = JSON.parse(xhr.response);
                    successCallBack(parsedData);
                } else {
                    errorCallback(xhr);
                    //console.log(readyState);
                }
            }
        }
    }
    post(url, data, successCallback,  errorCallback) {
        const xhr = new XMLHttpRequest()
        xhr.open('POST', url);
        xhr.setRequestHeader('content-type','application/json');
        xhr.send((typeof data !== 'stryng') ?  JSON.stringify(data) : data);
        xhr.onreadystatechange = function() {
            if (xhr.readyState ===4) {
                if(xhr.status === 200) {
                    const parsedData = JSON.parse(xhr.response);
                    successCallback(parsedData);
                } else {
                    errorCallback(xhr);
                }
            }
        }
    }
    delete(url, successCallback,  errorCallback) {
        const xhr = new XMLHttpRequest()
        xhr.open('DELETE', url);

        xhr.send();
        xhr.onreadystatechange = function() {
            if (xhr.readyState ===4) {
                if(xhr.status === 200) {
                    const parsedData = JSON.parse(xhr.response);
                    successCallback(parsedData);
                } else {
                    errorCallback(xhr);
                }
            }
        }
    }
}