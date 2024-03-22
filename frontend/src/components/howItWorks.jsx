import "./css/howItWorks.css";
import Works1 from "../assets/works1.webp";
import Works2 from "../assets/works2.webp";
import Works3 from "../assets/works3.webp";
export function HowItWorks() {
  return (
    <>
      <section className="section-works">
        <div className="wrap">
          <h2>How It Works</h2>
          <div className="inner">
            <div className="block">
              <div>
                <img
                  src={Works1}
                  alt="choose from legal forms list"
                  loading="lazy"
                  decoding="async"
                  width="204"
                  height="180"
                />
                <h3>Choose Your legal Form</h3>
                <p>Browse our 160+ free online legal contracts & documents</p>
              </div>
            </div>

            <div className="block">
              <div>
                <img
                  src={Works2}
                  alt="choose from legal forms list"
                  loading="lazy"
                  decoding="async"
                  width="204"
                  height="180"
                />
                <h3>Answer Simple Questions</h3>
                <p>
                  Our contract creator will turn your answers into a customized
                  legal form
                </p>
              </div>
            </div>

            <div className="block">
              <div>
                <img
                  src={Works3}
                  alt="choose from legal forms list"
                  loading="lazy"
                  decoding="async"
                  width="204"
                  height="180"
                />
                <h3>Sign Your Document</h3>
                <p>Download and print your customized legal document</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
