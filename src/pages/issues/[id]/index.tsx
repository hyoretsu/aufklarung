import Link from 'next/link';
import { useRouter } from 'next/router';

import Details from 'components/Issue';
import LocationInfo from 'components/LocationInfo';

const Issue: React.FC = () => {
 const { pathname } = useRouter();

 return (
  <>
   <LocationInfo>
    <Link href={pathname}>v. 7 n. Especial (2020): Dossiê Sartre</Link>
   </LocationInfo>
   <Details />
  </>
 );
};

export default Issue;
