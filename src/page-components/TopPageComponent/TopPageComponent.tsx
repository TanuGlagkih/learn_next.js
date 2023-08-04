import React from "react";
import styles from './TopPageComponent.module.css';
import { TopPageComponentProps } from "./TopPageComponent.props";
import { HhData, Htag, Tag } from "@/components";
import { TopLevelCategory } from "@/interfaces/toppage.interface";

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag="h1">{page.title}</Htag>
                {products && <Tag color="gray" size="m">{products.length}</Tag>}
                <span>Sortind</span>
            </div>
            <div>{products && products.map(p => (<div key={p._id}>{p.title}</div>))}</div>
            <div className={styles.hhTitle}>
                <Htag tag="h2">Вакансии - {page.category}</Htag>
                <Tag color="red" size="m">hh.ru</Tag>
                <span>Sortind</span>
            </div>
            {firstCategory === TopLevelCategory.Courses && <HhData {...page.hh} />}
        </div>
    )
}