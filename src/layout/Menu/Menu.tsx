import React, { useContext } from "react";
import cn from 'classnames';
import styles from './Menu.module.css';
import { format } from 'date-fns';
import { AppContext } from "@/context/app.context";

export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext)

    return (
        <ul>
            {menu.map(item => (
                <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
            ))}
        </ul>
    )
}