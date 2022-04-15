import React, { useEffect, useState } from 'react'
import api from '../utils/api'

function useUsers() {
    const [users, setUsers] = useState([])

    useEffect(() => {


        api.get('users?page=2')
            .then(function (response) {

                setUsers(response)
            });
    }, [])
    return { users }
}

export default useUsers