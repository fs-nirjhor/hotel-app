import {useParams} from 'react-router-dom';
import Button from '@mui/material/Button';

const Book = () => {
	const {bedType} = useParams();
return (
  <div className="book-page">
    <h3>Are You Ready To Book A <i>{bedType}</i> Room ?</h3>
      <Button variant="contained">{bedType ? "Confirm Your Booking" : "Add A Room"}</Button> 
  </div>
);
};

export default Book;
