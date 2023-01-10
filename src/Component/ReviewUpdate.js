import React from 'react';

const ReviewUpdate = ({ review }) => {
    const { feedback } = review;
    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="review-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="review-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <input type="text" className='w-full'  value={feedback} />
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">Update</label>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReviewUpdate;