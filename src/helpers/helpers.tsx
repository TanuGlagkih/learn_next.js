import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/product.svg';
import Image from 'next/image';
import { TopLevelCategory } from "@/interfaces/toppage.interface";
import type { FirstLevelMenuItem } from '@/interfaces/menu.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <Image src='./icons/courses.svg' alt="иконка для раздела курсы" width={100} height={100} />, id: TopLevelCategory.Courses },
    { route: 'services', name: 'Сервисы', icon: <Image src='./icons/services.svg' alt="иконка для раздела сервисы" width={100} height={100} />, id: TopLevelCategory.Services },
    { route: 'books', name: 'Книги', icon: <Image src='./icons/books.svg' alt="иконка для раздела книги" width={100} height={100} />, id: TopLevelCategory.Books },
    { route: 'products', name: 'Продукты', icon: <Image src='./icons/product.svg' alt="иконка для раздела продукты" width={100} height={100} />, id: TopLevelCategory.Products },
]

export const priceRu = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat('₽');