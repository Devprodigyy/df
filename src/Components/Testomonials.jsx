import React from "react";

// TEstimonials
const testimonials = [
    {
        id: 1,
        name: "John Doe",
        role: "Software Engineer",
        feedback:
            "This platform has exceeded my expectations. The UI is intuitive and the features are incredibly useful.",
        image: "https://img.freepik.com/free-photo/beautiful-woman-park-last-sunny-days_144627-16058.jpg?t=st=1735399921~exp=1735403521~hmac=e571f5f98c711b189cc7c5da123629e0de9bf8ffcd59e75daf5ff07894d2d995&w=740", // Replace with real image URLs
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

const Testimonial = () => {
    return (
        <section id="testimonials" className="w-full py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
                What Our Clients Say
            </h1>
            <div className="w-full flex flex-wrap justify-center gap-8">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full text-center"
                    >
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                        />
                        <h2 className="text-xl font-semibold text-gray-800">
                            {testimonial.name}
                        </h2>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                        <p className="text-gray-600 mt-4">{testimonial.feedback}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonial