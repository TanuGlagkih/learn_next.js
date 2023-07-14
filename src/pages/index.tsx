import React from "react";
import { Htag, Button, P, Tag, Rating } from "@/components";
import { withLayout } from "@/layout/Layout";
import { GetStaticProps } from "next";
import axios from 'axios';
import { MenuItem } from "@/interfaces/menu.interface";

function Home({ menu, firstCategory }: HomeProps): JSX.Element {

  return (
    <>
      <Htag tag='h1'>Текст</Htag>
      <Button appearence='primary' arrow="right"> Кнопка </Button>
      <P size='l'>Большой</P>
      <P>Средний</P>
      <P size='s'>Маленький</P>
      <Tag size='s' color='red'>Большой</Tag>
      <Tag color='green'>Средний</Tag>
      <Rating isEditable rating={3}>123</Rating>

    </>
  )
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}