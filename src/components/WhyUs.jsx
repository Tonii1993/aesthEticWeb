import React from "react";

const WhyUs = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto py-10 px-4 lg:py-18 lg:px-6">
        <div className="text-center mb-3">
          <h2 className="text-4xl tracking-tight font-bold text-primary-800">
            Why choose us?
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row md:flex-col ">
          <div className="mr-0 md:mr-8 mb-6 md:mb-0">
            <img
              className="w-full h-auto max-w-lg mx-auto pt-10"
              src="https://media.istockphoto.com/id/165129422/photo/portrait-of-woman-with-lines-on-her-face.jpg?s=1024x1024&w=is&k=20&c=WiM2SVEW_GuyFFQMaqKn-9kRsGoN1EcCFOolM0CB0-Q="
              alt="whyus"
            />
          </div>

          <div className="flex-1 flex flex-col sm:flex-row flex-wrap mb-4 -mx-2">
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6">
                  Only Top Products:
                </h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia, deserunt beatae repudiandae tempore aspernatur
                  voluptatem quas. Aperiam eaque exercitationem illum
                  asperiores, repellat impedit ut ipsam. Perspiciatis unde hic
                  ab. Quae!
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6">
                  The best Doctors
                </h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti ut accusamus ipsa fugiat commodi, minima voluptatem
                  hic reiciendis cumque! Incidunt quia alias quo saepe,
                  explicabo dicta optio beatae ex nulla?
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6">
                  24/7 Customer Support
                </h3>
                <p className="text-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Animi, repellat iure. Obcaecati cum perferendis delectus,
                  atque dolorum eligendi deserunt a.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6">
                  Great Feedback
                </h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  blanditiis sequi ut eos distinctio illum aperiam suscipit,
                  eaque doloremque reiciendis!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
