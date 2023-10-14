import React, { useState } from 'react';
import { users } from '../../utils/data';
import Card from '../card'
import styles from "./style.module.css"

const List = () => {

    const [list, setList] = useState(users)
    const [selectedUser, selectUser] = useState(null)
    const [search, setSearch] = useState('')

    const onClickItem = item => {
        selectUser(item)
    }
    const onChangeInput = e => {
        const { value } = e.target
        setSearch(value)
        const newUsers = users.filter(
            i => i.firstName.toLowerCase().includes(value.toLowerCase()) || i.lastName.toLowerCase().includes(value.toLowerCase()) || i.email.toLowerCase().includes(value.toLowerCase())
        )
        setList(newUsers)
    }

    return (
        <div className='mainDiv'>
            <div id='flexBox'>
                <div className='tableBox'>
                <input
                    placeholder='Search User name'
                    value={search}
                    onChange={onChangeInput}
                />
                    <table>
                        <tbody>
                            <tr key={1}>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                            {list.map(item => (
                                <tr key={item.id}
                                    style={{
                                        background: selectedUser && selectedUser.id === item.id ? 'red' : 'lightgray'
                                    }}
                                    className={styles.listItem}
                                    onClick={() => onClickItem(item)}
                                >
                                    <td>{item.id}</td>
                                    <td>{item.firstName} {item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='serchedElement'>
                    <h1>Details</h1>
                    {selectedUser && <Card user={selectedUser} />}
                </div>
            </div>
        </div>
    )
}

export default List;