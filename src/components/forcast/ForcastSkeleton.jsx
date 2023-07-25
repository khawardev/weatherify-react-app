/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Skeleton from 'react-loading-skeleton';

const ForcastSkeleton = ({ card }) => {
    return (
        <div  >
            {Array(card)
                .fill(0)
                .map((item, index) => (
                    <div key={index} >
                        <Skeleton height={217} style={{ borderRadius: '1rem', marginBottom:'15px' }} />
                    </div>
                ))}
        </div>
    );
};


export default ForcastSkeleton