import { Fade, Slide } from "react-awesome-reveal";
const CustomerReviews = () => {
  return (
    <div className="customer-reviews py-16 px-5 bg-gray-100 my-20">
      <div className="container mx-auto text-center">
        <Fade>
          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            What Our Customers Say
          </h2>
        </Fade>
        <Slide>
          <p className="text-lg mb-12">
            Hear from some of our happy clients who have successfully applied
            for their visas.
          </p>
        </Slide>

        <Slide>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="review-card bg-white p-6 shadow-lg rounded-lg w-80">
              <p className="text-gray-700 mb-4">
                "I had an amazing experience applying for my visa. The process
                was quick, and the support team was really helpful throughout!"
              </p>
              <h4 className="font-semibold text-blue-600">John Doe</h4>
              <p className="text-gray-500">Traveler</p>
            </div>
            <div className="review-card bg-white p-6 shadow-lg rounded-lg w-80">
              <p className="text-gray-700 mb-4">
                "Thanks to this service, I received my student visa in no time.
                Their attention to detail is remarkable!"
              </p>
              <h4 className="font-semibold text-blue-600">Jane Smith</h4>
              <p className="text-gray-500">Student</p>
            </div>
            <div className="review-card bg-white p-6 shadow-lg rounded-lg w-80">
              <p className="text-gray-700 mb-4">
                "I applied for a work visa, and it was processed faster than
                expected. Highly recommend their service!"
              </p>
              <h4 className="font-semibold text-blue-600">Michael Johnson</h4>
              <p className="text-gray-500">Professional</p>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default CustomerReviews;
