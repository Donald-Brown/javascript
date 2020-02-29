/**
 * Easy HTTP Library
 * Library for making HTTP requests
 * 
 * @version 2.0.0
 * @author Donald Brown
 * @license MIT
 * 
 */

 class EasyHTTP {
    // Make HTTP POST request
    async post(url, data){
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resData = await response.json();    
        return resData;
    }

    // Make HTTP GET
    async get(url){
        const response = await fetch(url);

        const resData = await response.json();
        return resData;
    }

    // Make a put request
    async put(url, data){
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const resData = await response.json();
        return resData;
    }

    // Make an http delete
    async delete(url){
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        const resData = await 'Resource deleted...';
        return resData;
    }
 }