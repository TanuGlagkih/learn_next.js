import React, { useContext } from "react";
import cn from 'classnames';
import styles from './Menu.module.css';
import { format } from 'date-fns';
import { AppContext } from "@/context/app.context";
import { FirstLevelMenuItem, PageItem } from "@/interfaces/menu.interface";
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/product.svg';
import { TopLevelCategory } from "@/interfaces/toppage.interface";
import Link from "next/link";
import { useRouter } from "next/router";

const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: 'icon', id: TopLevelCategory.Courses },
    { route: 'services', name: 'Сервисы', icon: 'icon', id: TopLevelCategory.Services },
    { route: 'books', name: 'Книги', icon: 'icon', id: TopLevelCategory.Books },
    { route: 'products', name: 'Продукты', icon: 'icon', id: TopLevelCategory.Products },
]

export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);
    const router = useRouter();

    const openSecondLevel = (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            if (m._id.secondCategory == secondCategory) {
                m.isOpened = !m.isOpened;
            };
            return m;
        }))
    }

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(m => (
                    <div key={m.route}>
                        <Link href={`/${m.route}`}>
                            <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: m.id == firstCategory
                            })}>
                                {m.icon}
                                <span>{m.name}</span>
                            </div>
                        </Link>
                        {m.id == firstCategory && buildSecondLevel(m)}
                    </div>
                ))}
            </>
        )
    }

    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map(m => {
                    if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
                        m.isOpened = true;
                    }
                    return (
                        <div key={m._id.secondCategory}>
                            <div className={styles.secondCategory} onClick={() => openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
                            <div className={cn(styles.secondLevelBlock, {
                                [styles.secondLevelBlockOpened]: m.isOpened
                            })}>
                                {buildThirdLevel(m.pages, menuItem.route)}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(p => (
                <Link href={`/${route}/${p.alias}`}>
                    <p className={cn(styles.thirdLevel, {
                        [styles.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath
                    })}>
                        {p.category}
                    </p>
                </Link>
            ))

        )
    }

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    )
}