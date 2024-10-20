import { useParams } from 'react-router-dom';
import FetchReceipeByid from './FetchReceipeByid';

const Detail = () => {
  const { id } = useParams();

  return (
    <div>
      <FetchReceipeByid id={id} />
    </div>
  )
}

export default Detail;

