const VisaBenefits = () => {
  return (
    <div className="visa-benefits py-16 px-5 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Visa Benefits</h2>
        <p className="text-lg mb-12">
          Explore the key benefits of applying for your visa through us.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="benefit-card p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Quick Process
            </h3>
            <p className="text-gray-700">
              Our visa application process is fast and efficient, ensuring that
              you receive your visa without unnecessary delays.
            </p>
          </div>
          <div className="benefit-card p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              24/7 Support
            </h3>
            <p className="text-gray-700">
              We provide round-the-clock support, answering your questions and
              assisting with any issues at any stage of the process.
            </p>
          </div>
          <div className="benefit-card p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Affordable Rates
            </h3>
            <p className="text-gray-700">
              Our services come at competitive and affordable prices, making it
              easier for you to apply for your visa without breaking the bank.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaBenefits;