import {getApiNoAuth} from '../utils'

export default {
    UseAdmin(){
        return getApiNoAuth()
        .get('/admins',{
        })
        .then(function (response){
            console.log(response)
            return response.data

        })
        .catch(function(err)
        {
            console.log(err)
        })

    }
}