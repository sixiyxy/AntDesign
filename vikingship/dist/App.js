// eslint-disable-next-line 
import React from 'react';
import axios from 'axios';
var App = function () {
    // const [ title, setTitle ] = useState('')
    // const postData = {
    //   title: 'mytitle',
    //   body: 'hello man'
    // }
    // useEffect(() => {
    //   axios.post('https://jsonplaceholder.typicode.com/posts', postData)
    //     .then(resp => {
    //       setTitle(resp.data.title)
    //     })
    // })
    var handleFileChange = function (e) {
        var files = e.target.files;
        if (files) {
            var uploadedFile = files[0];
            var formData = new FormData();
            formData.append(uploadedFile.name, uploadedFile);
            axios.post('https://jsonplaceholder.typicode.com/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(function (resp) {
                console.log(resp);
            });
        }
    };
    return (React.createElement("div", { className: "App", style: { marginTop: '100px', marginLeft: '100px' } },
        React.createElement("input", { type: "file", name: "myFile", onChange: handleFileChange })));
};
export default App;
