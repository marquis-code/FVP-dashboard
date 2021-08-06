import React, {useState} from 'react'
import { Rating } from 'react-simple-star-rating'



const RatingComponent = () => {
    const [rating, setRating] = useState(0)
    const handleRating = (rate) => {
        setRating(rate)
        // Some logic
    }
    return (
        <div class="w-full bg-white p-5 pt-0  max-w-lg rounded-md ">
            <div class="  ">
                <div className="mx-6">
                    <img src="/images/rate-illustration.svg" alt="" class="top-image" />
                </div>
                <p className="text-center my-3 select-title">Rate Your Experience</p>
                <div class="flex justify-between h-10 w-72 mx-auto">
                    <Rating className="mx-auto mb-2" size={50} onClick={handleRating} ratingValue={rating} /* Rating Props */ />

                </div>
                <form action="" className="max-w-sm mx-auto">


                    <textarea className="my-4 gray-bg p-5 rounded w-full gray-bg p-5" type="text" placeholder="How can we make it better?"
                        rows="3" />
                    <br />
                    <button type="submit" className="primary-btn full-w ">Submit</button>
                </form>
            </div>

        </div>
    )
}


export default RatingComponent