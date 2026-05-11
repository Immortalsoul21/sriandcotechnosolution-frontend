import { useLocation, useParams } from 'react-router-dom';
import SeoHead from '@/components/SeoHead';
import { getSeoForRoute } from '@/seo/getSeoForRoute';

export default function PageSeo() {
  const location = useLocation();
  const params = useParams();
  const seo = getSeoForRoute(location.pathname, params, location.state);

  return (
    <SeoHead
      {...seo}
      includeOrganizationSchema={location.pathname === '/home' || location.pathname === '/'}
    />
  );
}
