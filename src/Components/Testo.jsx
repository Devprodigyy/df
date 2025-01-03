import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

// Import required modules
import { EffectFade, Navigation } from 'swiper/modules';

// Testimonials data
const testimonials = [
    {
        id: 1,
        name: "John Doe",
        role: "Software Engineer",
        feedback:
            "This platform has exceeded my expectations. The UI is intuitive and the features are incredibly useful.",
        image: "https://img.freepik.com/free-photo/beautiful-woman-park-last-sunny-days_144627-16058.jpg?t=st=1735399921~exp=1735403521~hmac=e571f5f98c711b189cc7c5da123629e0de9bf8ffcd59e75daf5ff07894d2d995&w=740",
    },
    {
        id: 2,
        name: "Jane Smith",
        role: "Product Manager",
        feedback:
            "I’ve seen significant improvement in my team's workflow after using this. Highly recommend it!",
        image: "https://img.freepik.com/free-photo/young-beautiful-girl-looking-front-wearing-olive-green-t-shirt-isolated-pink-wall-with-copy-space_141793-90409.jpg?t=st=1735399946~exp=1735403546~hmac=93f383f241315176758899411776ea4e6afcbfe24297f17799160c7054f64c92&w=996",
    },
    {
        id: 3,
        name: "Emily Johnson",
        role: "Designer",
        feedback:
            "The design and functionality are top-notch. I can't imagine working without it now.",
        image: "https://img.freepik.com/free-photo/beautiful-girl-with-cute-face_144627-11591.jpg?uid=R116679855&ga=GA1.1.1916767579.1733323732&semt=ais_hybrid",
    },
];

const Testo = () => {
    const swiperRef = React.useRef(null); // Ref to control swiper manually

    return (
        <>
            <div className='h-[10vh] w-full bg-yellow-300'>
                <h1 className="text-[3vh] text-center py-5 text-black">
                    Testimonial
                </h1>
            </div>
            <section className="h-[50vh] w-full relative bg-yellow-300 flex items-center justify-center">
                <Swiper
                    ref={swiperRef}
                    grabCursor={true}
                    effect="fade" // Using fade effect instead of custom creative effect
                    modules={[EffectFade, Navigation]} // Include only the required modules
                    className="mySwiper h-full"
                    loop={true} // Make it loop infinitely
                    autoplay={{
                        delay: 3000, // Time between slides
                    }}
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="mx-auto my-auto flex flex-col items-center justify-center border-[2px] border-black bg-white p-6 rounded-lg shadow-md text-center w-[300px] h-[400px] md:w-[500px]">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-24 h-24 rounded-full mb-4 object-cover"
                                />
                                <h3 className="text-lg font-bold mb-2">{testimonial.name}</h3>
                                <p className="text-sm italic text-gray-600 mb-2">{testimonial.role}</p>
                                <p className="text-sm text-gray-700">{testimonial.feedback}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    );
};

export default Testo;
