import React from "react";
import { TagProps } from "./Tag.props";
import cn from 'classnames';
import styles from './Tag.module.css';

export const Tag = ({ size = 'm', children, color = 'ghost', href, className, ...props }: TagProps): JSX.Element => {
    return (
        <p
            className={cn(styles.tag, className, {
                [styles.s]: size == 's',
                [styles.m]: size == 'm',
                [styles.ghost]: color == 'ghost',
                [styles.red]: color == 'red',
                [styles.green]: color == 'green',
                [styles.gray]: color == 'gray',
                [styles.primary]: color == 'primary',
            })}
            {...props}
        >{
                href ? <a href={href}>{children}</a> : <>{children}</>
            }
        </p>
    )
}