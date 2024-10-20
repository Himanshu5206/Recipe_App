import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/App_Context';
import { Link, useLocation } from 'react-router-dom';

const FetchReceipeByid = ({ id }) => {
  const location = useLocation()


  const { getReceipeByid } = useContext(AppContext);
  const [receipe, setreceipe] = useState("");
  useEffect(() => {
    const fetchReceipe = async (id) => {
      const result = await getReceipeByid(id);

      // console.log("receiepe by Id",result);
      setreceipe(result.data.receipe);


    };

    fetchReceipe(id);
  }, [id]);


  return (
    <div className='text-center'>
      <div className="text-center" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>

        <div className='d-flex justify-content-center align-items-center p-3'>


          <img src={receipe.imgurl}
            className="card-img-top"
            alt="..."

            style={{
              width: "200px",
              height: "200px",
              borderRadius: "10px",
              border: "2px solid yellow",
            }}
          />
        </div>
        <h3>{receipe.title}</h3>

      </div>

      {location.pathname !== '/saved' && (
        <>


          <div className='container' style={{
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            gap: "2 rem",
          }}>

            <div className='left'>
              <h4>
                {receipe.qty1}
              </h4>

            </div>


            <div className="left">
              <h4>  {receipe.ing1} - {receipe.qty1}</h4>
              <h4>  {receipe.ing2} - {receipe.qty2}</h4>
              <h4>  {receipe.ing3} - {receipe.qty3}</h4>
              <h4>  {receipe.ing4} - {receipe.qty4}</h4>

            </div>

            <div className="right" style={{
              maxWidth: "500px"
            }}>
              {receipe.ist}

            </div>



          </div>

          <Link to={'/'} className='btn btn-warning my-5'> Back to Home </Link>
        </>
      )}
    </div>
  );
};

export default FetchReceipeByid;
