import React from "react";
import { SidebarProps } from "./Sidebar.props";
import cn from 'classnames';
import styles from './Sidebar.module.css';
import { Menu } from "../Menu/Menu";
import Image from "next/image";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
    return (
        <div className={cn(className, styles.sidebar)} {...props}>
            <Image className={styles.logo} src={'../logo.svg'} alt='logo' />
            <div>search</div>
            <Menu />
        </div>
    )
}