import React from 'react';
import s from "../../components/users/Users.module.css";
import {UserType} from "../../redux/users_reducer/users-reducers";

type PaginatorPropsType = {
    onSetCurrentPage: (pageNumber: number) => void
    usersOnPage: number
    totalUsersCount: number
    currentPage: number

}

const Paginator = (props:PaginatorPropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.usersOnPage)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
            <div>
                {pages.map(page => {

                    return (
                        <span key={page} className={props.currentPage === page ? s.selectedPage : ''}
                              onClick={() => props.onSetCurrentPage(page)}
                        >{page}</span>
                    )
                })}
            </div>
            )
};

export default Paginator;