import axios from 'axios';
import { GetServerSideProps } from 'next';

import { withLayout } from '../../layout/layout';
import { MenuItem } from '../../interfaces/menu.interface';
import { ProductModel } from '../../interfaces/product.interface';
import { PageModel } from '../../interfaces/page.interface';

const Course = ({ menu, page, products }: PageProps): JSX.Element => {
  return <div>Course</div>;
};

export default withLayout(Course);

export const getServerSideProps: GetServerSideProps<PageProps> = async ({
  query,
}) => {
  const { slug } = query;
  const firstCategory = 0;

  if (!slug) {
    return { notFound: true };
  }

  const { data: menu } = await axios.post<MenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`,
    {
      firstCategory,
    }
  );

  const { data: page } = await axios.post<PageModel[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find/${slug}`
  );

  const { data: products } = await axios.post<ProductModel[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/product-find`,
    {
      category: slug,
    }
  );

  return {
    props: { menu, page, products },
  };
};

interface PageProps extends Record<string, unknown> {
  menu: MenuItem[];
  page: PageModel[];
  products: ProductModel[];
}
