import React from "react";
import { hhDataProps } from "./hhData.props";
import styles from './hhData.module.css';
import { Card } from "../Card/Card";
import Image from 'next/image';
import { priceRu } from "@/helpers/helpers";

export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: hhDataProps): JSX.Element => {
    return (
        <div className={styles.hh}>
            <Card className={styles.count}>
                <div className={styles.title}>Всего вакансий</div>
                <div className={styles.countValue}>{count}</div>
            </Card>
            <Card className={styles.salary}>
                <div>
                    <div className={styles.title}>Начальный</div>
                    <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
                    <div className={styles.rate}>
                        <Image src='./rate.svg' alt='rate star' className={styles.filled} />
                        <Image src='./rate.svg' alt='rate star' />
                        <Image src='./rate.svg' alt='rate star' />
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Средний</div>
                    <div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
                    <div className={styles.rate}>
                        <Image src='./rate.svg' alt='rate star' className={styles.filled} />
                        <Image src='./rate.svg' alt='rate star' className={styles.filled} />
                        <Image src='./rate.svg' alt='rate star' />
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Профессионал</div>
                    <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
                    <div className={styles.rate}>
                        <Image src='./rate.svg' alt='rate star' className={styles.filled} />
                        <Image src='./rate.svg' alt='rate star' className={styles.filled} />
                        <Image src='./rate.svg' alt='rate star' className={styles.filled} />
                    </div>
                </div>
            </Card>
        </div>
    )
}