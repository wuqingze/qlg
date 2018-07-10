const ajax = function(data){
    if(process.env.NODE_ENV === 'production'){
        // alert(data.url)
        $.ajax(data)
    }else{
        data.url = 'http://localhost:8192'+data.url
        // data.dataType = "jsonp"
        // alert(data.url)

        data['xhrFields'] = {
            withCredentials: true
        }

        // data['header'] = {
        //     'Access-Control-Allow-Origin' : "http://localhost:8192/test/sessionid"
        // }

        // data['crossDomain'] = true
    }
    $.ajax(data)
}
export default ajax