import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import Modal from './Modal.jsx';
import ProductTile from './ProductTile/ProductTile.jsx';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: 80vh;
  grid-template-areas:
    "ImageGallery ProductTile"
  height: 80vh;
  gap: 4%;

  .card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 4%;
    border-radius: 10px;
  }
`;

export default function Overview({ product_id }) {

  const [styles, setStyles] = useState(null);
  const [info, setInfo] = useState(null);
  const [currStyle, setCurrStyle] = useState(null);
  const [show, setShow] = useState(false);


  const defaultStyle = (s) => {
    let styleIndex = 0;
    for (var i = 0; i < s.length; i++) {
      if (s[i]['default?']) {
        styleIndex = i;
        break;
      }
    }
    return styleIndex;
  };

  const showModal = (e) => {
    setShow(!show);
  };

  useEffect(() => {
    Promise.all([
      axios.get(
      `/products/${product_id}`)
        .then(res => (res.data))
        .catch(err => console.error(err)),
      axios.get(
        `/products/${product_id}/styles`)
        .then(res => (res.data))
        .catch(err => console.error(err))
    ])
    .then(([info, styles]) => {
      setInfo(info);
      setStyles(styles.results);
      setCurrStyle(defaultStyle(styles));
    })
    .catch(err => console.log('Error in promises...', err));
  }, [product_id]);

  return (
    <div className='Overview'>
        {currStyle !== null ? (<Modal show={show} onClose={showModal}/>) : <div></div>}
      <Wrapper>
        {currStyle !== null ? (<ImageGallery photos={styles[currStyle].photos}/>) : <div></div>}
        {currStyle !== null ? (<ProductTile info={info} styles={styles} currStyle={currStyle} setCurrStyle={setCurrStyle}/>) : <div></div>}
      </Wrapper>
    </div>
  );
}