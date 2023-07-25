/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Skeleton from 'react-loading-skeleton';


const ForcastCardSkeleton = ({ card }) => {
    return Array(card).fill(0).map((item) => (
        <>
            <Skeleton height={217} style={{ borderRadius: '1rem' }} />
        </>
    ));

}

export default ForcastCardSkeleton