import axios from 'axios';
import { GetServerSideProps } from 'next';

import { withLayout } from '../../layout/layout';
import { MenuItem } from '../../interfaces/menu.interface';
import { ProductModel } from '../../interfaces/product.interface';
import { PageModel } from '../../interfaces/page.interface';
import { firstLevelMenu } from '../../helpers/constants';

const Index = ({ products }: PageProps): JSX.Element => {
  return <div>Index, {products.length}</div>;
};

export default withLayout(Index);

export const getServerSideProps: GetServerSideProps<PageProps> = async ({
  query,
}) => {
  const { type, slug } = query;
  const firstCategory = 0;

  if (!slug) {
    return { notFound: true };
  }

  const firstCategoryItem = firstLevelMenu.find((c) => c.route === type);

  const { data: menu } = await axios.post<MenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`,
    { firstCategory: firstCategoryItem.id }
  );

  const { data: page } = await axios.get<PageModel[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find/${slug}`
  );

  const { data: products } = await axios.post<ProductModel[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/product-find`,
    {
      category: slug,
    }
  );

  return {
    props: { menu, page, products, firstCategory: firstCategoryItem.id },
  };
};

interface PageProps extends Record<string, unknown> {
  menu: MenuItem[];
  page: PageModel[];
  products: ProductModel[];
  firstCategory: number;
}
