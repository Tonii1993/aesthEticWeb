import React from "react";
import Question from "../layouts/Question";

const questions = [
  {
    id: 1,
    title: "AT WHAT AGE DO I START?",
    info: "There is no specific age to start aesthetic or cosmetic treatments – it really does depend on the individual and their own particular skin. Of course, we would not recommend starting too young unless you have very specific issues relating to scarring or marks… An anti-aging campaign can be gently introduced around the age of thirty.",
  },
  {
    id: 2,
    title: "WHAT IS HYALURONIC ACID?",
    info: "Despite its harsh-sounding name, hyaluronic acid is a natural molecule, and one that occurs naturally in the human body: it is found in the vitreous humour of the eyes, in the synovial fluid present in joints, and is one of the main components of the extracellular matrix (a ‘jelly’ which fills the dermis and contains fibroblasts). This molecule acts like a sponge in the skin – it is able to retain more than 1000 times its own weight in water. Unfortunately, as we age, the body produces less hyaluronic acid, and the acid that is produced is of a lower quality. Skin loses its elasticity, becomes drier, and less plump. That is why hyaluronic acid injections help reverse the effects of time on the skin.",
  },
  {
    id: 3,
    title: "IS IT PAINFUL?",
    info: "The practitioner will do everything possible to reduce any discomfort. Injections are carried out using very fine needles and even if a little discomfort is experienced, the sensation is tolerable.",
  },
  {
    id: 4,
    title: "ARE THERE ANY SIDE EFFECTS?",
    info: "With aesthetic medicine procedures, there is no “zero risk” of experiencing side effects but they do tend to be minimal if they occur. Slight redness, bruising or flaking after a chemical peel, slight bruising around injection sites….these can all be normal reactions and can be treated by using a prescribed cream or easily covered up with light make-up. If you notice or experience any unusual symptoms, you should immediately contact your doctor. Your doctor will have informed you of any potential side effects, even the rare ones, before you decide to undergo any treatment.",
  },
  {
    id: 5,
    title: "HOW LONG DOES IT LAST?",
    info: "Results obtained during a session will be visible for 6 to 9 months depending on the patient and the product injected. However, the product doesn’t completely disappear. Should you decide to follow up the treatment, the volume injected may be reduced and sessions will not need to be so regular.",
  },
];

const FaqsSection = () => {
  return (
    <div className="max-h-screen flex flex-col justify-center xl:px-25 px-5">
      <section className="bg-SecondaryColor text-black">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          {questions.map((question, index) => (
            <Question
              key={question.id}
              {...question}
              defaultOpen={index === 0}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FaqsSection;
