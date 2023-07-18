import { GetServerSideProps } from 'next';
import { withLayout } from '../layout/layout';
import { HomePageComponent } from '../page-components';
import { MenuItem } from '../interfaces/menu.interface';
import axios from 'axios';

const Index = (): JSX.Element => {
  return <HomePageComponent />;
};

export default withLayout(Index);

export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  const { data: menu } = await axios.post<MenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`,
    { firstCategory: 0 }
  );

  return {
    props: {
      menu,
    },
  };
};

interface HomePageProps {
  menu: MenuItem[];
}
