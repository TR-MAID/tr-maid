import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { ORIGINAL_IMG_ARRAY, PARTICIPANTS } from '../config/constants';
import useScrollToTop from '../hooks/useScrollToTop';

const DetailPage = () => {
  const params = useParams();

  useScrollToTop();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        exit={{ opacity: 0 }}
      >
        <img
          src={ORIGINAL_IMG_ARRAY[params.id]}
          alt={`${PARTICIPANTS[params.id].NICKNAME}님의 원본 그림`}
          // style={{ marginBottom: '100px' }}
        />
      </motion.div>
    </>
  );
};

export default DetailPage;
