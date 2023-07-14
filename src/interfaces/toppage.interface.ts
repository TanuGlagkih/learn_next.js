export interface TopPageAdvantage {
    _id: string;
    title: string;
    description: string;
}

export enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Products
}

export interface HhData {
    _id: string;
    count: string;
    juniorSalary: string;
    middleSalary: string;
    seniorSalary: string;
    updateAt: Date;
}

export interface TopPageModel {
    tags: string[];
    _id: string;
    secondCategory: string;
    alias: string;
    title: string;
    category: string;
    seoText: string;
    tagsTitle: string;
    metaTitle: string;
    metaDescription: string;
    firstCategory: TopLevelCategory;
    advantages: TopPageAdvantage[];
    createdAt: Date;
    updatedAt: Date;
    hh: HhData;
}